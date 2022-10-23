import * as React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Appbar, Drawer } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const SidePanel = ({ setPage, page }) => {
    return (
        <View style={{ flexDirection: "column", justifyContent: 'space-between', position: 'absolute', backgroundColor: '#FFF', paddingBottom: "10%", paddingTop: "10%", elevation: 6, right: "20%", left: 0, top: 63, bottom: 0 }}>
            <Drawer.Section>
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
            <View>
                <Image style={{
                    alignContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }} source={require('../Assets/Images/logo.png')} />
                <Text style={{ padding: 20 }}>
                    Contacto página web
                    Cra. 1 No. 18-10, Edificio 2, Piso 2, Oficina 201
                    Bogotá, Colombia
                    Teléfono: (57) 1 381 8000
                    Fax: (57) 1 381 8001
                    Correo electrónico:
                    iami@gmail.com
                </Text>
            </View>
        </View >
    );
}


const myApp = ({ children }) => {
    const [active, setActive] = React.useState(false);
    const [page, setPage] = React.useState('');
    const names = { Info_personal: 1 };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../Assets/Images/bg.jpg')} resizeMode="cover" style={{
                flex: 1,
                width: '100%'
            }}>
                <View position="relative">
                    <Appbar style={{ backgroundColor: "#1F2D52", elevation: 6 }}>
                        <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faBars} color={"#FFF"} /></Text>} onPress={() => { setActive(!active) }} />
                        <Text style={{ color: "#FFF" }}>{page}</Text>
                    </Appbar>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ backgroundColor: "#fff" }}>
                        {children[names[page] || 0]}
                    </View>
                </View>
                {active ? <SidePanel setPage={setPage} page={page} /> : <></>}
            </ImageBackground>
        </View>
    );
};


export default myApp;