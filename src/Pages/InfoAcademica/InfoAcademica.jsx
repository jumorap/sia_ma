import React from "react";
import {ScrollView, Text, View} from "react-native";
import React, { useState, useEffect } from "react";

import { getHistoriaAcademica } from "../../Middleware";
import styles from "./styles";


const globalPrograma = "Ingeniería de Sistemas y Computación"
const globalFacultad = "Ingeniería"

const getData = () => {

    const calificaciones01 = [
        {
            _nombre: "Parcial 1",
            _nota: "2.5",
            _porcentaje: "100"
        }
    ]


    const calificaciones02 = [
        {
            _nombre: "Parcial 1",
            _nota: "4.2",
            _porcentaje: "30"
        },
        {
            _nombre: "Parcial 2",
            _nota: "5.0",
            _porcentaje: "80"
        }
    ]

    const asignaturas = [
        {
            _codigo: "01",
            _nombre: "Calculo Diferencial",
            _creditos: "4",
            _tipo: "Fundamentación Obligatoria",
            _periodo: "2022-2",
            _esConsolidada: "true",
            _calificaciones: calificaciones01,
            _definitiva: "4.5",
            _esAprobada: true
        },
        {
            _codigo: "02",
            _nombre: "Ingeniería Económica",
            _creditos: "3",
            _tipo: "Fundamentación Optativa",
            _periodo: "2022-1",
            _esConsolidada: "true",
            _calificaciones: calificaciones02,
            _definitiva: "4.8",
            _esAprobada: true
        },
        {
            _codigo: "03",
            _nombre: "Matematicas Discretas",
            _creditos: "3",
            _tipo: "Fundamentación Obligatoria",
            _periodo: "2021-2",
            _esConsolidada: "true",
            _calificaciones: calificaciones02,
            _definitiva: "2.7",
            _esAprobada: false
        }
    ]

    return {
        _documento_identidad: "4792004165",
        _id_historia: "01",
        _id_programa: "05",
        _porcentaje_avance: "75",
        _papa: "4.1",
        _pa: "4.5",
        _semestreActual: "2022-2",
        _pappi: "3.5",
        _asignaturas: asignaturas
    };
};


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
      if (!data) getHistoriaAcademica().then((response) => setData(response))
    }, [data])
    
    
      console.log("data: " + data)
    
      //console.log(data.history)
    
     
      let historiaAcademica;
      
    
      if(data){
        historiaAcademica = data
      }else{
        historiaAcademica = getData()
      }



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
                        <Text style={[styles.allText, styles.promedios]}>{historiaAcademica._pa}{"\nPA"}</Text>
                    </View>

                    <View style={[styles.infoBasicaRightCard]}>
                        <Text style={[styles.allText, styles.promedios]}>{historiaAcademica._papa}{"\nPAPA"}</Text>
                    </View>

                    <View style={[styles.infoBasicaRightCard]}>
                        <Text style={[styles.allText, styles.promedios]}>{historiaAcademica._pappi}{"\nPAPPI"}</Text>
                    </View>
                </View>
            </View>


            <Text style={[styles.allText, {paddingLeft: 20, fontWeight: "bold"}]}>Asignaturas:</Text>

            <View style={styles.view}>
                {historiaAcademica._asignaturas.map((asignatura) => {
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
