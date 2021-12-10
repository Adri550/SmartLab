import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Header } from 'react-native-elements';

export default function Home() {
  return (
    <View>
      <Header
        centerComponent={{ text: 'SmartLab', style: { color: '#fff', fontSize: 30 } }}
        backgroundColor="#6f737a"
      />
      <View style={styles.con}>
        <View>
          <Text h1>¡Bienvenidos a SMARTLAB!</Text>
          <Text h4>Esta es una aplicación que te ayudara a visualizar en tiempo real las disponibilidad de los recursos audiovisuales</Text>
        </View>
        <View>
          <Image
            style={{
              resizeMode: "contain",
              width: 300,
              height: 300,
            }}
            source={require('../logo.png')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 25,
  },
  con:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-around'
  }
});
