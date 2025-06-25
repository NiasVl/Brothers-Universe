import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView} from 'react-native';


import playstation from '../../../data/playstation';
import xbox from '../../../data/xbox';
import nintendo from '../../../data/nintendo';

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
    <View style = {{width: "90%", borderBottomColor: "white", borderBottomWidth: 1, marginTop: 50, marginBottom: 20, borderStyle: "double", borderRadius: 10, paddingBottom: 10, backgroundColor: "rgba(16, 52, 163, 0.26)"}}>
    
    <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "cyan", textShadowColor: "rgb(0, 136, 255)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}> Playstation </Text> </Text>
    <FlatList

      data ={playstation}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.avaliacao} img = {item.img} desc = {item.desc} preco = {item.preco} descricao = {item.desc} quant = {item.quant} />

  )}   />


      </View>

    {/* XBOX */}
    <View style = {{width: "90%", borderBottomColor: "white", borderBottomWidth: 1, marginTop: 50, marginBottom: 20, borderStyle: "double", borderRadius: 10, paddingBottom: 10, backgroundColor: "rgba(48, 143, 17, 0.26)"}}>
    
    <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "lime", textShadowColor: "rgba(0, 255, 0, 0.8)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}>XBOX</Text> </Text>
    <FlatList

      data ={xbox}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.avaliacao} img = {item.img} desc = {item.desc} preco = {item.preco} descricao = {item.desc} quant = {item.quant} />

  )} />


      </View>

    {/* Nintendo */}
    <View style = {{width: "90%", borderBottomColor: "white", borderBottomWidth: 1, marginTop: 50, marginBottom: 20, borderStyle: "double", borderRadius: 10, paddingBottom: 10, backgroundColor: "rgba(125, 15, 15, 0.26)"}}>
    
        <Text style = {{color: "white", fontSize: 30, marginLeft: 30}}> Games <Text style = {{color: "rgb(255, 110, 110)", textShadowColor: "rgba(255, 0, 0, 1)", textShadowOffset: {height: 0, width: 0}, textShadowRadius: 20 }}>Nintendo</Text> </Text>

    <FlatList

      data ={nintendo}
      horizontal = {true}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <Cards titulo = {item.nome} nota = {item.avaliacao} img = {item.img} desc = {item.desc} preco = {item.preco} descricao = {item.desc} quant = {item.quant} />

  )} style = {{marginRight: 10}}/>


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