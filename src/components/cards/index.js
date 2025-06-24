import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/core";

export default function Cards ({titulo, desc, nota, preco, qnt, img  }) {
     
    const navigation = useNavigation();

    return(
        <TouchableOpacity style= {styles.containerMovie} onPress={()=> navigation.navigate("Details", {titulo,desc,nota,preco,qnt,img})} >
            
           <Image style={styles.images} source= {{uri: (img)}} />
           
           <Text style ={styles.titulo}> {titulo} </Text>

           <Text style ={styles.preco}> {preco} </Text>

           <Text style ={styles.textNota}> {nota} </Text>


        </TouchableOpacity>
    )



}