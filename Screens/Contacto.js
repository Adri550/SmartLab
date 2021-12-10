import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from 'react-native-elements';


export default function GitHubScreen() {
    return (
        <View>

<Header
        centerComponent={{ text: 'SmartLab', style: { color: '#fff', fontSize: 30 } }}
        backgroundColor="#6f737a"
      />
        <View style={styles.container}>
            <Ionicons name={"logo-github"} size={100} color='black'/>
            <Text style={styles.bold}>@luzerandy</Text>
        </View>
        <View style={styles.container1}>

            <Ionicons name={"logo-github"} size={100} color='black'/>
            <Text style={styles.bold}>@adrii05</Text>
        </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bold:{
          fontWeight:'bold',
          fontSize: '30px',
      },
    bold:{
        fontWeight:'bold',
        fontSize: '30px',
    },
});