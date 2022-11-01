import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { getUser } from "../../Middleware";
import styles from "./styles";


/**
 * Page to show the personal information of the user
 * @returns {JSX.Element}
 */
const Horario = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Make a single request to the API
        if (!data) getUser().then((response) => setData(response.user))
        console.log(data)
    }, [data])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Horario</Text>
            </View>
        </ScrollView>
    )
}

export default Horario;
