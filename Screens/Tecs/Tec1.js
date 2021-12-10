import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { FContext } from '../../Navigations/Context/Context';
import { Text, Card } from 'react-native-elements';
import {Link } from "react-router-dom";


export default function Tec1({navigation}) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <h3>Instituto Tecnológico de Tijuana  </h3>
         <Text>TOMAS AQUINO</Text><br></br>
        <Text>Instituto Tecnológico de Tijuana Calzada Del Tecnológico S/N, Fraccionamiento Tomas Aquino. Tijuana, Baja California. C.P. 22414
</Text><br></br><br></br>
<Button style={styles.button}
                title= "UNIDAD TOMAS AQUINO"
                onPress={()=>navigation.navigate('Regist')}
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
    
   
    button:{
      backgroundColor:'#0BD539',
      width:'100%',
      padding:10,
      borderRadius:15,
      alignItems:'center',

    },
    

})