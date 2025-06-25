import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    containerMovie: {
        paddingTop: 20,
        paddingBottom: 16,
        paddingLeft: 120,
        padding: 20,

        marginRight: 100,

        width: 100,
        height: "fit-content",

        alignItems: "center",
        justifyContent: "center"
        
    },
    titulo: {

        color: "white",
        fontSize: 25,
        paddingTop: 10,
        width: 200
    },
    preco: {
        fontSize: 20,
        color: "white",
        paddingLeft: 4 ,
        width: 200,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(0, 0, 0, 0.56)",
        borderRadius: 5
    },
    textNota: {
        fontSize: 16,
        color: "yellow",
        paddingLeft: 4 ,
        width: 200,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(0, 0, 0, 0.56)",
        borderRadius: 5   
    },
    images: {
        width: 200,
        height: 270,
        borderRadius: 5
    },
    descricao: {
        fontSize: 18,
        color: "white",
        paddingLeft: 4 ,
        width: 200,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(0, 0, 0, 0.56)",
        borderRadius: 5,
        marginTop: 10
    },
    quantidade: {
        fontSize: 20,
        color: "white",
        paddingLeft: 4 ,
        width: 215,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(0, 0, 0, 0.56)",
        borderRadius: 5
    }

})

export default styles