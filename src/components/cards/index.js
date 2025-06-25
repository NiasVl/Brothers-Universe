import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/core";

export default function Cards ({titulo, descricao, nota, preco, quant, img  }) {
     
    const navigation = useNavigation();

    return(

        <View style= {styles.containerMovie}>
        <TouchableOpacity onPress={()=> navigation.navigate("Details", {titulo,descricao,nota,preco,quant,img})} >
            
           <Image style={styles.images} source= {{uri: (img)}} />
        </TouchableOpacity>
           
           <Text style ={styles.titulo}> {titulo} </Text>

           <Text style ={styles.textNota} > {nota} </Text>

           <Text style = {[styles.preco , {color: "green"}]}> R$<Text style = {styles.preco} >{preco} </Text></Text>

           <Text style ={styles.quantidade}> {quant}<Text style = {{color: "red"}}>!!!</Text> </Text>

           <Text style ={styles.descricao}> {descricao} </Text>




        </View>
    )



}