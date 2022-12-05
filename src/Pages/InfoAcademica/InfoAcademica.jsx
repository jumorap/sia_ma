import {ScrollView, Text, View} from "react-native";
import React, { useState, useEffect } from "react";

import { getHistoriaAcademica } from "../../Middleware";
import styles from "./styles";


const globalPrograma = "Ingeniería de Sistemas y Computación"
const globalFacultad = "Ingeniería"


const Cards = (asignatura) => {
    return (
        <View style={styles.card}>
            <View style={[styles.cardLeft]}>
                <Text style={[styles.allText, {fontWeight: "bold"}]}>{asignatura._nombre + "  (" + asignatura._codigo + ")  "}</Text>
                <Text style={styles.allText}>{"Creditos: " + asignatura._creditos}</Text>
                <Text style={styles.allText}>{"Tipo: " + asignatura._tipo}</Text>
                <Text style={styles.allText}>{"Periodo cursado: " + asignatura._periodo}</Text>
            </View>

            <View style={[styles.cardRight]}>
                <Text style={[styles.allText, {fontWeight: "bold"}]}>{asignatura._definitiva}</Text>
                <Text style={styles.allText}>{asignatura._esAprobada ? "Aprobada" : "Reprobada"}</Text>
            </View>
        </View>
    );
}


const InfoAcademica = () => {
    
    
const [data, setData] = useState(null)
useEffect(() => {
  // Make a single request to the API
  //id historia de juan sessionStorage.USER
  if(data == null || data == undefined){
      getHistoriaAcademica("juan").then((response) => { 
      setData(response.getHistory[0])
      console.log(response.getHistory[0])
      })
  
    }
}, [data])

  //console.log(data.history)
  console.log(data?._asignaturas)

    return (
        <ScrollView>
            <Text style={[styles.allText, {fontWeight: "bold", textAlign: "center", paddingTop: 10}]}>Historia Academica</Text>

            <View style={[styles.infoBasica]}>
                <View style={[styles.infoBasicaLeft]}>
                    <Text style={styles.allText}>{"Programa:\t\t" + globalPrograma}</Text>
                    <Text style={styles.allText}>{"Facultad:\t\t\t" + globalFacultad}</Text>
                </View>

                <View style={[styles.infoBasicaRight]}>
                    <View style={styles.infoBasicaRightCard}>
                        <Text style={[styles.allText, styles.promedios]}>{data?._pa}{"\nPA"}</Text>
                    </View>

                    <View style={[styles.infoBasicaRightCard]}>
                        <Text style={[styles.allText, styles.promedios]}>{data?._papa}{"\nPAPA"}</Text>
                    </View>

                    <View style={[styles.infoBasicaRightCard]}>
                        <Text style={[styles.allText, styles.promedios]}>{data?._pappi}{"\nPAPPI"}</Text>
                    </View>
                </View>
            </View>


            <Text style={[styles.allText, {paddingLeft: 20, fontWeight: "bold"}]}>Asignaturas:</Text>

            <View style={styles.view}>
                {data?._asignaturas?.map((asignatura) => {
                    return (
                        <View>
                            {Cards(asignatura)}
                        </View>
                    );
                })}
            </View>

        </ScrollView>
    )
}

export default InfoAcademica;
