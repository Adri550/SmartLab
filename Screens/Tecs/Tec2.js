import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { FContext } from '../../Navigations/Context/Context';
import { Text, Card } from 'react-native-elements';


export default function Tec2({navigation}) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <h3>Instituto Tecnológico de Tijuana  </h3>
         <Text>UNIDAD OTAY</Text><br></br>
        <Text>Dirección: Blvd. Industrial s/n, Cd Industrial, 22430 Tijuana, B.C.</Text> <br></br>
        <Text>Teléfono: 664 607 8400</Text><br></br><br></br>
         <Button 
                title= "UNIDAD OTAY"
                onPress={()=>navigation.navigate('Home')}
            />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    inputContainer:{
      width:'80%'

    },

    input:{
      backgroundcolor:'white',
      paddingHorizontal:15,
      paddingVertical:18,
      borderRadius:10,
      marginTop:5,
    },
    buttonContainer:{
      width:'80%',
      justifyContent:'center',
      alignItems:'center'

    },
    button:{
      backgroundColor:'#0BD539',
      width:'100%',
      padding:10,
      borderRadius:10,
      alignItems:'center',

    },
    buttonOutLine:{
      backgroundColor:'white',
      marginTop:5,
      borderColor:'#0BD539',
      borderWidth:2,
      alignItems:'center'


    },
    buttonText:{
      color:'white',
      fontWeight:'100',
      fontSize:16,

    },
    buttonOutLineText:{
      color:'#0BD539',
      fontWeight:'100',
      fontSize:16,

    }


})