import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";


/**
 * Page to show the personal information of the user
 * @returns {JSX.Element}
 */




 import { getHistoriaAcademica , getCursosByCodigoAsignatura} from "../../Middleware";

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
   

  
//fetch historia academica
const [data, setData] = useState(null)
useEffect(() => {

  getHistoriaAcademica("juan").then((response) => {
    console.log(response)
    setData(response)
  })

}, [data])



//fetch cursos pailas
const [cursos, setCursos] = useState([])
const [asignaturas, setAsignaturas] = useState([])

useEffect(() => {
 
  console.log(data)

  data?._asignaturasInscritas.forEach(asignatura => {


    //obtener _id_asignature: Int por cada asignatura y extraer cursos == a asignatura._codigo

    // getCursosByCodigoAsignatura  asignatura._codigo
    
  
    getCursosByCodigoAsignatura(asignatura._id_asignature).then((response) => {
    console.log("peticion a asignatura x para obener cursos")
    console.log(response)
    let cursosdeAsignatura_i = response

    cursosdeAsignatura_i.forEach(cursito => {
        //buscar id curso
        console.log(cursito)
        if(cursito.id_curso == asignatura._codigo){
          cursos.push(cursito)
          setCursos(cursos)
          asignaturas.push(asignatura)
          setAsignaturas(asignaturas)
        }
    });
    
    })
    

}


);

}, [cursos])

    return (
        <ScrollView>
            
                
            <Text style={[styles.allText, {fontWeight: "bold", paddingTop: 10}]}>Horario de Clases</Text>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Lunes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[1]?.horarios[0].hora_inicio + ":00 - " + cursos[1]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[1]?.id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[1]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[1]?.horarios[0]?.salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[1].horarios[0]?.documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[1]?.horarios[0].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Martes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[0]?.horarios[0].hora_inicio + ":00 - " + cursos[1]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[0]?.id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[0]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[0]?.horarios[0].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[0]?.horarios[0].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[0]?.horarios[0].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Miercoles</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[1]?.horarios[1].hora_inicio + ":00 - " + cursos[1]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[1]?.id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[1]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[1]?.horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[1]?.horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[1]?.horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Jueves</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[0]?.horarios[1].hora_inicio + ":00 - " + cursos[1]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[0]?.id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[0]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[0]?.horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[0]?.horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[0]?.horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Viernes</Text>

            

        </ScrollView>
    )
}
//<Text style={styles.allText}>{"No tienes clases para este día! "}</Text>
export default Horario;
