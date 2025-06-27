import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native-web";
import { useRoute, useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/FontAwesome"; 
import styles from "./style";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const nota = parseFloat(route.params.nota);

  const renderStars = (nota) => {
    const stars = [];
    const full = Math.floor(nota);
    const half = nota - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++) {
      stars.push(<Icon key={`full-${i}`} name="star" size={18} color="#facc15" />);
    }
    if (half) {
      stars.push(<Icon key="half" name="star-half-full" size={18} color="#facc15" />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<Icon key={`empty-${i}`} name="star-o" size={18} color="#ccc" />);
    }

    return <View style={{ flexDirection: "row", gap: 2 }}>{stars}</View>;
  };

  return (
    <ScrollView style={styles.containerP} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoVoltar}>
        <Text style={styles.textoBotaoVoltar}>← Voltar à Home</Text>
      </TouchableOpacity>

      <View style={styles.containerImg}>
        <Image style={styles.imagem} source={{ uri: route.params.img }} />
      </View>

      <Text style={styles.titulo}>{route.params.titulo}</Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8, height: 30}}>
        <Text style={{ color: "#ccc", marginLeft: 6, marginRight: 4}}>{nota}/5.0</Text>
        {renderStars(nota)}

        <Text style={{ color: "#ccc", marginLeft: 15, fontSize: 16 }}>
          Gênero: <Text style={{ color: "#fff", textShadowOffset: {height: 3, width: 3}, textShadowColor: "rgb(0, 140, 255)" }}>{route.params.genero}</Text>
        </Text> 
        <Text style={{ color: "#ccc", marginLeft: 20, fontSize: 16 }}>
          Desenvolvedor: <Text style={{color: "#fff",textShadowOffset: {height: 3, width: 3}, textShadowColor: "rgb(0, 128, 255)" }}>{route.params.devel}</Text>
        </Text>
      </View>

      <Text style={styles.preco}>R$ {route.params.preco}</Text>

      <Text style={styles.descricao}>{route.params.descricao}</Text>
      <Text style={styles.quantidade}>Restam {route.params.quant} unidades</Text>

      <TouchableOpacity style={styles.botaoCompra} >
        <Text style={styles.textoBotaoCompra}>Comprar agora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
