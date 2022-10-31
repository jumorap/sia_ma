const styles = {
    view: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "10",
        background: "#f4f4f4",
        boxShadow: 2,
        width: "100%",
    },
    allText: {
        color: "#000"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        height: "auto",
        margin: 10,
        marginBottom: 2,
        padding: 4,
        // alignItems: "center"

        backgroundColor: "#f4f4f4",
        transition: "boxShadow 300ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: 4,
        boxSizing: "border-box",
        boxShadow: "1 2 9 #F4AAB0",
        backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.08), rgba(255, 255, 255, 0.08))",
    },

    CardContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    card_left: {
    },

    card_right: {
        width: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // flexWrap: "wrap",
    },

    infoBasica: {
    },

    infoBasica_left: {
        width: 60,
        backgroundColor: "rgb(0, 0, 255)",
    },

    infoBasica_right: {
        display: "flex",
        flexDirection:"row",
        width: 100,
        // flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "5",
        paddingBottom: "5",
    },

    infoBasica_right_card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aaa",
        margin: 5,
    }
}

export default styles