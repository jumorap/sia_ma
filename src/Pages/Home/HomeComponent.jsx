import React, { useState } from 'react'
import { Text, Pressable, View, Modal, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.js';
import { auth } from '../../Middleware/Session/get-api.js';


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

