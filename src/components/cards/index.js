import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './style'
import { useNavigation } from "@react-navigation/core";

export default function Cards ({titulo, descricao, nota, preco, quant, img, devel, genero}) {
     
    const navigation = useNavigation();


    return(

        <View style= {styles.containerMovie}>
        <TouchableOpacity onPress={()=> navigation.navigate("Details", {titulo,descricao,nota,preco,quant,img,devel,genero})} >
            
           <Image style={styles.images} source= {{uri: (img)}} />
        </TouchableOpacity>
           
           <Text style ={styles.titulo}> {titulo} </Text>

           <Text style ={styles.textNota} > {nota} </Text>

           <Text style ={styles.desenvolvedor}> Feito por: <Text style = {{color: "white", textShadowOffset: {height: 1, width: 1}, textShadowColor: "rgb(255, 187, 0)"}}>{devel} </Text> </Text>
            
           <Text style ={styles.genero}> Gênero: <Text style = {{color: "white", textShadowOffset: {height: 4, width: 3}, textShadowColor: "rgb(174, 111, 241)"}}>{genero} </Text> </Text>

           <Text style = {[styles.preco , {color: "green"}]}> R$<Text style = {styles.preco} >{preco} </Text></Text>

           <Text style ={styles.quantidade}> {quant}<Text style = {{color: "red"}}>!!!</Text> </Text>

           <Text style ={styles.descricao}> {descricao} </Text>




        </View>
    )



}