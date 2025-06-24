import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView} from 'react-native';


import playstation from '../../../data/data';

import Cabecalho from '../../components/cabecalho';
import Cards from '../../components/cards';


export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

  return (
    <ScrollView style = {{flex: 2}}>
    <View style={styles.container}>

    {/* Inicio cabeçalho*/}
    <Cabecalho/>
    {/* Fim cabeçalho*/}
    

    {/* Playstation */}
    <View style = {{width: "100%", borderBottomColor: "white", borderBottomWidth: 1, marginTop: 50, marginBottom: 20}}>
    
    <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "cyan", textShadowColor: "rgba(0, 0, 255, 1)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}> Playstation </Text> </Text>
    <FlatList

      data ={playstation}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.nota} img = {item.img} desc = {item.desc}/>

  )} />


      </View>

    {/* XBOX */}
    <View style = {{width: "100%", borderBottomColor: "white", borderBottomWidth: 1, marginTop: 50, marginBottom: 20}}>
    
    <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "lime", textShadowColor: "rgba(0, 255, 0, 0.8)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}>XBOX</Text> </Text>
    <FlatList

      data ={playstation}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.nota} img = {item.img} desc = {item.desc}/>

  )} />


      </View>

    {/* Nintendo */}
    <View style = {{width: "100%", marginTop: 50, marginBottom: 20}}>
    
        <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "rgb(255, 110, 110)", textShadowColor: "rgba(255, 0, 0, 0.8)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}>Nintendo</Text> </Text>

    <FlatList

      data ={playstation}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.nota} img = {item.img} desc = {item.desc}/>

  )} />


      </View>
    

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: "center"
    }
});