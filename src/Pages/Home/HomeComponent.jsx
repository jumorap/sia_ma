import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles.js';


export default function Home({setUser}) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../Assets/Images/sia_logo.png')} />
            <Text style={styles.textoHead}>
                Bienvenido al SIA
            </Text>
        </View>
    );
}

