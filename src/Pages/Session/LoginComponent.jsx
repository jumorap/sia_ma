import React, { useState } from 'react'
import { Text, Pressable, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({ value: 'inasdf', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [modalVisible, setModalVisible] = useState(false);

    const onLoginPressed = () => {
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textoHead}>
                Ingrese su usuario y contraseña
            </Text>
            <View
                style={{
                    borderBottomColor: '#FFFFFF',
                    borderBottomWidth: 1,
                }}
            />
            <View style={styles.textField}>
                <FontAwesomeIcon style={styles.icon} icon={faUserAlt} color={"#FFFFFF"} />
                <TextInput
                    style={styles.input}
                    label="nombre de usuario"
                    placeholder="Nombre de usuario"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    textContentType="username"
                    keyboardType="default"
                />
            </View>
            <View style={styles.textField}>
                <FontAwesomeIcon style={styles.icon} icon={faLockOpen} color={"#FFFFFF"} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
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

