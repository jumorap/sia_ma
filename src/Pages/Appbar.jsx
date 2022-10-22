import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faClock, faRuler } from '@fortawesome/free-solid-svg-icons';


const MyComponent = () => {

    return (
        <Appbar style={{ justifyContent: "center", backgroundColor: "#1F2D52" }}>
            <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faHouse} color={"#FFF"} /></Text>} onPress={() => { }} />
            <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faUser} color={"#FFF"} /></Text>} onPress={() => { }} />
            <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faRuler} color={"#FFF"} /></Text>} onPress={() => { }} />
            <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faClock} color={"#FFF"} /></Text>} onPress={() => { }} />
        </Appbar>
    );
};


export default MyComponent;