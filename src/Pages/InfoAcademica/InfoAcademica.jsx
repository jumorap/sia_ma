import React from "react";
import {ScrollView, Text, View} from "react-native";
//import { getUser } from "../../Middleware";
import styles from "./styles";


const globalPrograma = "Ingeniería de Sistemas y Computación"
const globalFacultad = "Ingeniería"

const getData = () => {

    const calificaciones01 = [
        {
            nombre: "Parcial 1",
            nota: "2.5",
            porcentaje: "100"
        }
    ]


    const calificaciones02 = [
        {
            nombre: "Parcial 1",
            nota: "4.2",
            porcentaje: "30"
        },
        {
            nombre: "Parcial 2",
            nota: "5.0",
            porcentaje: "80"
        }
    ]

    const asignaturas = [
        {
            codigo: "01",
            nombre: "Calculo Diferencial",
            creditos: "4",
            tipo: "Fundamentación Obligatoria",
            periodo: "2022-2",
            esConsolidada: "true",
            calificaciones: calificaciones01,
            definitiva: "4.5",
            esAprobada: true
        },
        {
            codigo: "02",
            nombre: "Ingeniería Económica",
            creditos: "3",
            tipo: "Fundamentación Optativa",
            periodo: "2022-1",
            esConsolidada: "true",
            calificaciones: calificaciones02,
            definitiva: "4.8",
            esAprobada: true
        },
        {
            codigo: "03",
            nombre: "Matematicas Discretas",
            creditos: "3",
            tipo: "Fundamentación Obligatoria",
            periodo: "2021-2",
            esConsolidada: "true",
            calificaciones: calificaciones02,
            definitiva: "2.7",
            esAprobada: false
        }
    ]

    return {
        documento_identidad: "4792004165",
        id_historia: "01",
        id_programa: "05",
        porcentaje_avance: "75",
        papa: "4.1",
        pa: "4.5",
        semestreActual: "2022-2",
        pappi: "3.5",
        asignaturas: asignaturas
    };
};


const Cards = (asignatura) => {
    return (
        <View style={styles.card}>
            <View >
                <Text style={[styles.allText, {fontWeight: "bold"}]}> {asignatura.nombre + "  (" + asignatura.codigo + ")  "}</Text>
                <Text style={styles.allText}>{"Creditos: " + asignatura.creditos}</Text>
                <Text style={styles.allText}>{"Tipo: " + asignatura.tipo}</Text>
                <Text style={styles.allText}>{"Periodo cursado: " + asignatura.periodo}</Text>
            </View>

            <View styles={[styles.card_right]}>
                <Text style={[styles.allText, {fontWeight: "bold"}]}>{asignatura.definitiva}</Text>
                <Text style={styles.allText}>{asignatura.esAprobada ? "Aprobada" : "Reprobada"}</Text>
            </View>
        </View>
    );
}


const InfoAcademica = () => {
    let historiaAcademica = getData();

    return (
        <ScrollView>
            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Historia Academica</Text>

            <View style={{margin: 10, padding: 10, backgroundColor: "#f4f4f4", borderRadius: 10}}>
                <View styles={[styles.infoBasica]}>
                    <View styles={[styles.infoBasica_left]}>
                        <Text styles={styles.allText}>{"Programa:\t\t" + globalPrograma}</Text>
                        <Text styles={styles.allText}>{"Facultad:\t\t\t" + globalFacultad}</Text>
                    </View>

                    <View>
                        <View styles={[styles.infoBasica_right]}>
                            <View styles={styles.infoBasica_right_card}>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{"PA:"}</Text>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{historiaAcademica.pa}</Text>
                            </View>

                            <View styles={[styles.infoBasica_right_card]}>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{"PAPA:"}</Text>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{historiaAcademica.papa}</Text>
                            </View>

                            <View styles={[styles.infoBasica_right_card]}>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{"PAPPI:"}</Text>
                                <Text styles={[styles.allText, {fontWeight: "bold"}]}>{historiaAcademica.pappi}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


            <Text styles={[styles.allText, {paddingLeft: 20, fontSize: 20, fontWeight: 400}]}>&nbsp;&nbsp;&nbsp;Asignatura</Text>

            <View styles={styles.view}>
                {historiaAcademica.asignaturas.map((asignatura) => {
                    return (
                        <View>
                            <View>
                                <View>
                                    {Cards(asignatura)}
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>

            <Text styles={styles.allText}></Text>

        </ScrollView>
    )
}

export default InfoAcademica;
