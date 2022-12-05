import React, {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";

import {getCursosByCodigoAsignatura, getHistoriaAcademica} from "../../Middleware";
import styles from "./styles";


const Horario = () => {
    //fetch historia academica
    const [data, setData] = useState(null)
    const [cursos, setCursos] = useState([])
    const [asignaturas, setAsignaturas] = useState([])

    useEffect(() => {
      getHistoriaAcademica("juan").then((response) => {
        console.log({response})
        setData(response)
      })
    }, [])

    useEffect(() => {
      console.log({data})
      data?._asignaturasInscritas?.forEach(asignatura => {
          getCursosByCodigoAsignatura(asignatura?._id_asignature).then((response) => {
              console.log("peticion a asignatura x para obener cursos")
              console.log({response})
              response?.forEach(cursito => {
                //buscar id curso
                console.log(cursito)
                if(cursito.id_curso === asignatura._codigo){
                  cursos.push(cursito)
                  setCursos(cursos)
                  asignaturas.push(asignatura)
                  setAsignaturas(asignaturas)
                }
        });
        })
    });
    }, [cursos])

    return (
        <ScrollView>
            
                
            <Text style={[styles.allText, {fontWeight: "bold", paddingTop: 10}]}>Horario de Clases</Text>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Lunes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[1]?.horarios[0]?.hora_inicio + ":00 - " + cursos[1]?.horarios[0]?.hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[1]?.id_curso}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[1]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[1]?.horarios[0]?.salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[1]?.horarios[0]?.documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[1]?.horarios[0]?.tipo}</Text>
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
