import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faBirthdayCake, faFileMedical, faAward, faPeopleArrows, faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { getUser } from "../../Middleware";
import styles from "./styles";


/**
 * Generate a title card with an icon
 * @param iconTitle
 * @param title Title to show in the card
 * @returns {JSX.Element}
 */
const titleCard = (iconTitle, title) => {
    return (
        <View style={[styles.cards, styles.titles]}>
            <Text style={{ fontWeight: "bold"}}>
                <FontAwesomeIcon icon={iconTitle} color={"#8a8a8a"}/>
                &nbsp; {title}
            </Text>
        </View>
    )
}

/**
 * Generate a subtitle card
 * @param subtitle Subtitle to show in the card
 * @returns {JSX.Element}
 */
const subtitleCard = (subtitle) => {
    return (
        <View style={[styles.cards, styles.subtitles]}>
            <Text style={{ fontWeight: "bold"}}>
                {subtitle}
            </Text>
        </View>
    )
}

/**
 * Generate a card with a title and a value to show in the page
 * @param title Type of information to show
 * @param data Data to show in the card
 * @returns {JSX.Element} Card with the title and data
 */
const cardGenerator = (title, data) => {
    return (
        <View style={[styles.cards, styles.generalInfo]}>
            <Text style={{ color:"#8a8a8a" }}>
                {title}
            </Text>
            <Text>
                {!data ? "NO APLICA" : data}
            </Text>
        </View>
    )
}

/**
 * Page to show the personal information of the user
 * @returns {JSX.Element}
 */
const InfoPersonal = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Make a single request to the API
        if (!data) getUser().then((response) => setData(response.user))
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                {titleCard(faUserAlt, "Información Básica")}
                {cardGenerator("NOMBRES", data?.nombre_completo)}
                {cardGenerator("DOCUMENTO", data?.documento_identidad)}
                {cardGenerator("EXPEDIDO EN", data?.lugar_expedicion)}
                {cardGenerator("SEXO", data?.sexo)}
                {cardGenerator("ETNIA", data?.etnia)}
                {cardGenerator("EMAIL", data?.email_personal)}
                {cardGenerator("EMAIL INSTITUCIONAL", data?.email_institucional)}
                {cardGenerator("TELEFONO", data?.telefono_movil)}

                {titleCard(faBirthdayCake, "Información de Nacimiento")}
                {cardGenerator("FECHA", data?.fecha_nacimiento)}
                {cardGenerator("LUGAR", data?.lugar_nacimiento)}
                {cardGenerator("NACIONALIDAD", data?.nacionalidad)}

                {titleCard(faFileMedical, "Información de Salud")}
                {cardGenerator("Tipo de sangre", data?.tipo_sangre)}
                {cardGenerator("EPS", data?.eps)}

                {titleCard(faPeopleArrows, "Responsables")}
                {subtitleCard("Responsable 1")}
                {cardGenerator("NOMBRES R1", data?.responsables[0]?.responsable_nombre)}
                {cardGenerator("TIPO DOCUMENTO R1", data?.responsables[0]?.responsable_tipo_doc)}
                {cardGenerator("DOCUMENTO R1", data?.responsables[0]?.responsable_numero_doc)}
                {cardGenerator("TELÉFONO R1", data?.responsables[0]?.responsable_telefono)}
                {subtitleCard("Responsable 2")}
                {cardGenerator("NOMBRES R2", data?.responsables[1]?.responsable_nombre)}
                {cardGenerator("TIPO DOCUMENTO R2", data?.responsables[1]?.responsable_tipo_doc)}
                {cardGenerator("DOCUMENTO R2", data?.responsables[1]?.responsable_numero_doc)}
                {cardGenerator("TELÉFONO R2", data?.responsables[1]?.responsable_telefono)}

                {titleCard(faHouseUser, "Vivienda")}
                {subtitleCard("Vivienda Previa")}
                {cardGenerator("DIRECCIÓN", data?.vivienda[0]?.vivienda_direccion)}
                {cardGenerator("DEPARTAMENTO", data?.vivienda[0]?.vivienda_departamento)}
                {cardGenerator("CÓDIGO POSTAL", data?.vivienda[0]?.vivienda_codigo_postal)}
                {cardGenerator("ESTRATO", data?.vivienda[0]?.vivienda_estrato)}
                {cardGenerator("TELÉFONO", data?.vivienda[0]?.vivienda_telefono)}
                {subtitleCard("Vivienda Actual")}
                {cardGenerator("DIRECCIÓN", data?.vivienda[1]?.vivienda_direccion)}
                {cardGenerator("DEPARTAMENTO", data?.vivienda[1]?.vivienda_departamento)}
                {cardGenerator("CÓDIGO POSTAL", data?.vivienda[1]?.vivienda_codigo_postal)}
                {cardGenerator("ESTRATO", data?.vivienda[1]?.vivienda_estrato)}
                {cardGenerator("TELÉFONO", data?.vivienda[1]?.vivienda_telefono)}

                {titleCard(faAward, "Información de Militar")}
                {cardGenerator("Situación militar", data?.situacion_militar)}
            </View>
        </ScrollView>
    )
}

export default InfoPersonal;
