import { StatusBar, setStatusBarBackgroundColor, } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import axios from 'axios';


export default function App(){

const[cep,setCep] = useState ("")
const[Logradouro, setLogradoro] = useState("")
const[Bairro, setBairro] = useState("")
const[Cidade, setCidade] = useState("")
const[Estado, setEstado] = useState("")


  return(
    <View style={styles.containerPrincipal}>
          <View style = {styles.topBar}> 

                       <Text style = {styles.title}>
                          Buscador de Cep
                       </Text>
            </View>

        <View style = {styles.containerCep}>

        <TextInput
        style={
          {
            borderColor: "black",
            borderWidth: 2,
            width: 200,
            fontSize: 18,
            marginTop: 30,
            marginEnd: 20,
            borderRadius: 30,


          }}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        placeholder='Cep'

        />

        <TouchableOpacity style= {styles.botaoBuscar}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>

        </View>   

        <TextInput
        style = {styles.caixaTexto}
        value={Logradouro}
        onChangeText={(texto) => setLogradoro(texto)}
        placeholder='Logradouro'

        />
        

      <TextInput
        style = {styles.caixaTexto}
        value={Bairro}
        onChangeText={(texto) => setBairro(texto)}
        placeholder='Bairro'

        />
        
      <TextInput
        style = {styles.caixaTexto}
        value={Cidade}
        onChangeText={(texto) => setCidade(texto)}
        placeholder='Cidade'

        />


      <TextInput
        style = {styles.botaoDoEstado}
        value={Estado}
        onChangeText={(texto) => setEstado(texto)}
        placeholder='Estado'

        />





     </View>

  );
}

const styles = StyleSheet.create({

    containerPrincipal:{
      flex: 1,
      flexDirection: "colum",
     
      
    },

    topBar:{
      flexDirection: "row",
      height: 70,
      backgroundColor: "green",
    },

    title:{
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: "bold",
      alignSelf: "center",
      margin: 20,
    },

    containerCep:{
      flexDirection: "row",
      height: 100,
      marginHorizontal: 20,
     

    },


    botaoBuscar:{
      backgroundColor: "green",
      width: 120,
      height:70,
      marginTop: 30,
      marginEnd: 20,
      borderRadius: 10,
      padding: 20,
    },


    textoBotaoBuscar:{
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: 'center',
    },



    caixaTexto:{
      borderBlockColor: "black",
      borderWidth:2,
      padding: 15,
      fontSize:18,
      borderRadius: 30,
      marginTop: 10,
      marginHorizontal: 20,
    },


    botaoDoEstado:{
      borderBlockColor:"black",
      borderWidth:2,
      padding: 5,
      fontSize:30,
      marginTop: 60,
      borderRadius: 10,
      marginHorizontal: 20,
      width:200,
      marginLeft:100,


    },

});
