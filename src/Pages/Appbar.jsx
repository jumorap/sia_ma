import * as React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Appbar, Button, Drawer } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const SidePanel = ({ user, setUser, setPage, page, active, setActive }) => {

    const ontouchoutside = () => {
        setActive(false);
    }

    const changePage = (namePage) =>{
        setPage(namePage);
        setActive(false);
    }

    const closeSession = () =>{
        setPage('');
        setUser({nombre_usuario: '', auth_token: ''});
    }

    return (
        user.nombre_usuario != ''?
        <TouchableOpacity onPressIn={ontouchoutside} style={{ position: 'absolute', backgroundColor: '#FFF', paddingBottom: "10%", paddingTop: "10%", elevation: 6, right: "20%", left: 0, top: 63, bottom: 0 }}>
            <View style={{ flex: 1, flexDirection: "column", justifyContent: 'space-between' }}>
                <Drawer.Section>
                    <Drawer.Item
                        label="Información Personal"
                        active={page === 'Info_personal'}
                        onPress={() => { changePage('Info_personal') }}
                    />
                    <Drawer.Item
                        label="Información Académica"
                        active={page === 'Info_academica'}
                        onPress={() => changePage('Info_academica')}
                    />
                    <Drawer.Item
                        label="Horario"
                        active={page === 'Horario'}
                        onPress={() => changePage('Horario')}
                    />
                    <Button onPress={() => closeSession()}>Cerrar sesión</Button>
                </Drawer.Section>
                <View>
                    <Image style={{
                        alignContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }} source={require('../Assets/Images/logo.png')} />
                    <Text style={{ padding: 20, color: "#000" }}>
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
        </TouchableOpacity>:<></>
    );
}


const myApp = ({ children }) => {
    const [active, setActive] = React.useState(false);
    const [page, setPage] = React.useState('');
    const [user, setUser] = React.useState({nombre_usuario: '', auth_token: ''})
    const names = { Info_personal: 1, Info_academica: 2, Horario: 3, Home:4 };

    const onsreent = () => {
        setActive(false);
    }

    /**
     * Capitalize and remove special characters from a string
     * @param title string to be capitalized and clean
     * @returns {*} capitalized string without special characters
     */
    const cleanTitlePage = (title) => {
        return title.replace(/_/g, " ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../Assets/Images/bg.jpg')} resizeMode="cover" style={{
                flex: 1,
                width: '100%'
            }}>
                <View position="relative">
                    <Appbar style={{ backgroundColor: "#1F2D52", elevation: 6 }}>
                        <Appbar.Action icon={() =>
                            <Text>
                                <FontAwesomeIcon icon={faBars} color={"#FFF"}/>
                            </Text>
                        } onPress={() => { setActive(!active) }} />

                        <Text style={{ color: "#FFF" }}>
                            {cleanTitlePage(page)}
                        </Text>
                    </Appbar>
                </View>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ backgroundColor: "#FFF", borderRadius: 10, margin: 10 }}>
                        {user.nombre_usuario != ''? children[names[page != ''? page : "Home"]] : React.cloneElement(children[0], { setUser: setUser})}
                    </View>
                </View>
                {active ? <SidePanel user={user} setUser={setUser} setPage={setPage} setActive={setActive} active={active} page={page} /> : <></>}
            </ImageBackground>
        </View>
    );
};


export default myApp;
