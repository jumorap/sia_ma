import React, { useState } from 'react'
import { Text, Pressable, View, Modal, TouchableOpacity, Image  } from 'react-native'
import { TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.js';


export default function LoginScreen({ navigation }) {
    const [nombre_usuario, setnombre_usuario] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [modalVisible, setModalVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);

    const onLoginPressed = () => {
        setModalVisible(true);
    }
    const onPasswordVisiblePressed = () =>{
        setPasswordVisible(!passwordVisible);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../Assets/Images/logo.png')} />
            <Text style={styles.textoHead}>
                Ingrese su Usuario y Contraseña
            </Text>
            <View style={styles.textField}>
                <TextInput
                    style={styles.input}
                    label="nombre de usuario"
                    placeholder="Nombre de usuario"
                    returnKeyType="next"
                    value={nombre_usuario.value}
                    onChangeText={(text) => setnombre_usuario({ value: text, error: '' })}
                    error={modalVisible}
                    autoCapitalize="none"
                    textContentType="username"
                    keyboardType="default"
                    mode="outlined"
                    right={<TextInput.Icon icon={() => <FontAwesomeIcon style={styles.icon} icon={faUserAlt} />} />}
                />
            </View>
            <View style={styles.textField}>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={modalVisible}
                    mode="outlined"
                    secureTextEntry = {passwordVisible} 
                    right={<TextInput.Icon onPress={() => {onPasswordVisiblePressed(); return false;}} icon={() => <FontAwesomeIcon style={styles.icon} icon={passwordVisible ? faLockOpen:faLock} />} />}
                />
            </View>
            <TouchableOpacity style={styles.generalButton} onPress={onLoginPressed}>
                <Text style={styles.textButton}> INICIAR SESIÓN </Text>
            </TouchableOpacity>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Usuario o contraseña incorrectos</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Aceptar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

