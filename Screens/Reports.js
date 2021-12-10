//LOGIN
import React from 'react'
import { KeyboardAvoidingView, StyleSheet,Text,TextInput,TouchableOpacity,View } from 'react-native-web'

const LoginScreen = () => {

    return(

       <KeyboardAvoidingView 
       style={styles.container} 
       behavior="padding"
       >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email"
               //value={email}
               //onChangeText={text => setEmail(text)}
                style={styles.input}
                />

              <TextInput placeholder="Password"
               //value={password}
               //onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />    
        </View>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => {}}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        </View>

       </KeyboardAvoidingView>
    )
}

export default LoginScreen

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


