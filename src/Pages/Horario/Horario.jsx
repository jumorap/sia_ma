import React, {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";

import {getCursosByCodigoAsignatura, getHistoriaAcademica} from "../../Middleware";
import styles from "./styles";


const Horario = () => {
   
    //fetch historia academica
    const [data, setData] = useState(null)
    useEffect(() => {

      if(data == null || data == undefined){
      getHistoriaAcademica("juan").then((response) => {

        setData(response.getHistory[0])
      })
    }

    }, [data])



    //fetch cursos
    const [cursos, setCursos] = useState([])
    const [asignaturas, setAsignaturas] = useState([])

    useEffect(() => {
      data?._asignaturasInscritas.forEach(asignatura => {
          getCursosByCodigoAsignatura(asignatura._id_asignature).then((response) => {
              let cursosdeAsignatura_i = response.cursosByCodigoAsignatura

              cursosdeAsignatura_i.map(cursito => {
                  //buscar id curso
                  if(cursito.id_curso == asignatura._codigo) {
                      setCursos(cursos => [...cursos, cursito])
                      setAsignaturas(asignaturas => [...asignaturas, asignatura])
                    }
                })
          })
      }
    );
  }, [data])

    console.log(JSON.stringify(cursos))
    return (
        <ScrollView>
            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10, fontSize: 20,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#d9d9d9",}]}>Horario de Clases</Text>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Lunes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[1]?.horarios[0]?.hora_inicio + ":00 - " + cursos[1]?.horarios[0]?.hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[1]?._nombre}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[1]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[1]?.horarios[0]?.salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[1]?.horarios[0]?.documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[1]?.horarios[0]?.tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Martes</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[0]?.horarios[0].hora_inicio + ":00 - " + cursos[0]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[0]?._nombre}</Text>
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
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[1]?._nombre}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[1]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[1]?.horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[1]?.horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[1]?.horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Jueves</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={[styles.allText, {fontWeight: "bold"}]}>{"Hora: " + cursos[0]?.horarios[1].hora_inicio + ":00 - " + cursos[0]?.horarios[0].hora_fin + ":00"}</Text>
                    <Text style={styles.allText}>{"Asignatura: " + asignaturas[0]?._nombre}</Text>
                    <Text style={styles.allText}>{"Grupo: " + cursos[0]?.grupo}</Text>
                    <Text style={styles.allText}>{"Salón: " + cursos[0]?.horarios[1].salon}</Text>
                    <Text style={styles.allText}>{"Profesor: " + cursos[0]?.horarios[1].documento_profesor}</Text>
                    <Text style={styles.allText}>{"Tipo: " + cursos[0]?.horarios[1].tipo}</Text>
                </View>
            </View>

            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10, paddingBottom: 20}]}>Viernes</Text>
        </ScrollView>
    )
}

export default Horario;
