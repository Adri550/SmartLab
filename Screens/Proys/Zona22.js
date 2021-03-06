import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { FContext } from '../../Navigations/Context/Context';
import { Text, Card } from 'react-native-elements';


export default function Zona2() {
  const [proys2, setProys2] = useState([])
  useEffect(() => {
    const getProys2 = () => {
      fetch('https://api.bluemoonsports.works/api/proys2')
        .then(res => res.json())
        .then(res => setProys2(res))
    }
    getProys2()
  }, [])
  const { } = useContext(FContext);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {proys2.map((p, index) => (
          <Card key={index} containerStyle={{
            borderRadius: 30,
            backgroundColor: '#fff',
            minWidth: 250

          }}>
            <Card.Title>{p.nombre}</Card.Title>
            <View>
              <View style={styles.container3}>
                <Card.Image style={styles.image} source={require('../../logito.jpeg')} />
                <Text>HP 4510</Text>
                <View style={{ paddingTop: 10 }}>
                  <Text style={{ backgroundColor: p.disponible === 1 ? 'green' : 'red', color: 'white', width: 150, borderRadius: 10 }}>{
                    p.disponible === 1 ? "          Disponible" : "No disponible"
                  }</Text>
                </View>
                <View style={{ paddingTop: 10 }}>
                </View>
              </View>


            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00376b',
    alignItems: 'center',


  },
  container3: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',

  },
  image: {
    width: 150,
  },
});