import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
  containerP: {
    flex: 1,
    backgroundColor: "#141a29",
    paddingHorizontal: 16,
    paddingTop: 24,
    width: "100%",
  },
  botaoVoltar: {
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1f2a3c",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  textoBotaoVoltar: {
    color: "#f0f0f0",
    fontSize: 14,
  },
  containerImg: {
    width: "100%",
    height: 350,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  nota: {
    fontSize: 16,
    color: "#cccccc",
    marginBottom: 8,
  },
  preco: {
    fontSize: 24    ,
    fontWeight: "bold",
    color: "#f29f05",
    marginBottom: 12,
  },
  descricao: {
    fontSize: 20,
    color: "#dddddd",
    marginBottom: 16,
  },
  quantidade: {
    fontSize: 18,
    color: "#32cd32",
    marginBottom: 20,
  },
  botaoCompra: {
    backgroundColor: "#f0c14b",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
    width: "100%",
  },
  textoBotaoCompra: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {
  color: "#ccc",
  fontSize: 14,
  marginBottom: 6,
},
avaliacoes: {
  fontStyle: "italic",
  color: "#aaa",
  marginTop: 8,
  marginBottom: 4,
},

});
