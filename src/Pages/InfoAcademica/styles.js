const styles = {
    view: {
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        backgroundColor: "#d9d9d9",
        margin: 10,
        paddingBottom: 5,
        boxSizing: "border-box",
    },

    allText: {
        color: "#000"
    },

    card: {
        display: "flex",
        flexDirection: "row",
        height: "auto",
        padding: 10,
        margin: 10,
        marginBottom: 5,
        backgroundColor: "#fff",
        borderShadow: "0 0 10 #000",
        transition: "boxShadow 300ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: 4,
        boxSizing: "border-box",
    },

    cardLeft: {
        width: "70%",
    },

    cardRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        // flexWrap: "wrap",
    },

    infoBasica: {
        margin: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#d9d9d9",
    },

    infoBasicaLeft: {
    },

    infoBasicaRight: {
        borderRadius: 10,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: "bold",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-around",
    },

    promedios: {
        lineHeight: 22,
        textAlign: "center",
    },

    infoBasicaRightCard: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
    }
}

export default styles
