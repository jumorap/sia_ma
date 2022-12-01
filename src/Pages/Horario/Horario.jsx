import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { getUser } from "../../Middleware";
import styles from "./styles";


/**
 * Page to show the personal information of the user
 * @returns {JSX.Element}
 */




 import { getHistoriaAcademica } from "../../Middleware";

 // simple request to API
 // if (!data) getUser().then((response) => setData(response.user))
 
 const globalPrograma = "Ingeniería de Sistemas y Computación"
 const globalFacultad = "Ingeniería"
 
 
 const getData = () => {
 
     const Horario1 = [
       {
         dia: "2",
         hora_inicio: "7",
         hora_fin: "11",
         salon: "401-201",
         documento_profesor: "Astaiza Gerardo",
         tipo: "Magistral",
       },
       {
         dia: "4",
         hora_inicio: "7",
         hora_fin: "11",
         salon: "401-201",
         documento_profesor: "Astaiza Gerardo",
         tipo: "Magistral",
       },
     ]
 
     const Horario2 = [
         {
           dia: "1",
           hora_inicio: "9",
           hora_fin: "13",
           salon: "453-303",
           documento_profesor: "Jorge Triviño",
           tipo: "Practica",
         },
         {
           dia: "3",
           hora_inicio: "9",
           hora_fin: "13",
           salon: "453-303",
           documento_profesor: "Jorge Triviño",
           tipo: "Practica",
         },
       ]
 
       const Horario3 = [
         {
           dia: "3",
           hora_inicio: "14",
           hora_fin: "16",
           salon: "453-303",
           documento_profesor: "Daenerys Targarien",
           tipo: "Practica",
         },
         {
           dia: "5",
           hora_inicio: "14",
           hora_fin: "16",
           salon: "453-303",
           documento_profesor: "Daenerys Targarien",
           tipo: "Practica",
         },
       ]
     
       const Cursos = [
         { //arquisoft
         id_curso: "Arquitecura de software",
         codigo_asignatura: 123,
         grupo: 2,
         horarios: [Horario1],
         cupos_disponibles: 0,
         cupos_totales: 30,
       },
       { //calculo diferencial
         id_curso: "Calculo Diferencial",
         codigo_asignatura: 456,
         grupo: 3,
         horarios: [Horario2],
         cupos_disponibles: 0,
         cupos_totales: 25,
       },
     //   { //arquitics
     //     id_curso: "Computación visual",
     //     codigo_asignatura: 545,
     //     grupo: 1,
     //     horarios: [Horario3],
     //     cupos_disponibles: 0,
     //     cupos_totales: 25,
     //   },
     ]
     
       return Cursos;
     };
 
 
 



const Horario = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Make a single request to the API
        if (!data) getUser().then((response) => setData(response.user))
        console.log(data)
    }, [data])

    var datos = getData()

    return (
        <ScrollView>
            
                
            <Text style={[styles.allText, {fontWeight: "bold", paddingTop: 10}]}>Horario de Clases</Text>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Lunes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + datos[1].horarios[0].hora_inicio + ":00 - " + datos[1].horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + datos[1].id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + datos[1].grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + datos[1].horarios[0].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[1].horarios[0].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[1].horarios[0].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Martes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + datos[0].horarios[0].hora_inicio + ":00 - " + datos[1].horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + datos[0].id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + datos[0].grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + datos[0].horarios[0].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[0].horarios[0].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[0].horarios[0].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Miercoles</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + datos[1].horarios[1].hora_inicio + ":00 - " + datos[1].horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + datos[1].id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + datos[1].grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + datos[1].horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[1].horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[1].horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Jueves</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + datos[0].horarios[1].hora_inicio + ":00 - " + datos[1].horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + datos[0].id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + datos[0].grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + datos[0].horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[0].horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Profesor: " + datos[0].horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Viernes</Text>

            <Text style={styles.allText}>{"No tienes clases para este día! "}</Text>

        </ScrollView>
    )
}

export default Horario;
