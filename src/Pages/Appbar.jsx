import * as React from 'react';
import { Text } from 'react-native';
import { Appbar, Drawer } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const SidePanel = ({ setPage, page }) => {
    return (
        <Drawer.Section style={{ display: "flex" }} title="Sistema de Información Académica">
            <Drawer.Item
                label="Información Personal"
                active={page === 'Info_personal'}
                onPress={() => setPage('Info_personal')}
            />
            <Drawer.Item
                label="Información Académica"
                active={page === 'Info_academica'}
                onPress={() => setPage('Info_academica')}
            />
            <Drawer.Item
                label="Horario"
                active={page === 'Horario'}
                onPress={() => setPage('Horario')}
            />
        </Drawer.Section>
    );
}


const myApp = ({ children }) => {
    const [active, setActive] = React.useState(false);
    const [page, setPage] = React.useState('');
    const names = { Info_personal: 1 };

    return (
        <>
            <Appbar style={{ backgroundColor: "#1F2D52" }}>
                <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faBars} color={"#FFF"} /></Text>} onPress={() => { setActive(!active) }} />
                <Text style={{ color: "#FFF" }}>SIA</Text>
            </Appbar>
            {active ? <SidePanel setPage={setPage} page={page} /> : <></>}
            {children[names[page] || 0]}
        </>
    );
};


export default myApp;