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
        fontSize: 15,
        paddingTop: 8,
        width: 200
    },
    preco: {
        fontSize: 10,
        color: "white"
    },
    textNota: {
        fontSize: 10,
        color: "white",
        paddingLeft: 4    
    },
    images: {
        width: 200,
        height: 270,
        borderRadius: 5
    }

})

export default styles