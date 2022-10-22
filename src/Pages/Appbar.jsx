import * as React from 'react';
import { Text } from 'react-native';
import { Appbar, Drawer } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';


const SidePanel = () => {
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </Drawer.Section>
    );
}


const MyComponent = () => {
    const [active, setActive] = React.useState('');

    return (
        <>
        <Appbar style={{ backgroundColor: "#1F2D52" }}>
            <Appbar.Action icon={() => <Text><FontAwesomeIcon icon={faHome} color={"#FFF"} /></Text>} onPress={() => {setActive(!active)}} />
            <Text style={{color:"#FFF"}}>Sistema de Información Académica</Text>
        </Appbar>
        {active ? <SidePanel/>:""}
        </>
    );
};


export default MyComponent;