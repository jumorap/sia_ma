import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        flex: 1,
        margin: 10,
    },
    textoHead: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1F2D52',
        padding: 20,
        paddingBottom: 20
    },
    container: {
        padding: 10,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
        
    },
    generalButton: {
        margin: 10,
        border: 30,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#1F2D52'
    },
    textButton: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    textField: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5
    },
    icon: {
        padding: 10,
        color: "#000"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        color: '#1F2D52'
    },
    buttonClose: {
        backgroundColor: "#1F2D52",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    img: {
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        height: 100
    }
});

export default styles;