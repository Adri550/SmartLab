import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants';
import Tec1 from "../Screens/Tecs/Tec1";
import Tec2 from "../Screens/Tecs/Tec2";

const Tab = createMaterialTopTabNavigator();
export default function TecTop(){
    return(
        <Tab.Navigator
        initialRouteName="Tec1"
        screenOptions={{
            tabBarActiveTintColor:"#6CABDD",
            tabBarInactiveTintColor:"#1C2C5B",
            tabBarShowLabel:true,
            tabBarLabelStyle:{
                fontSize:12
            },
            tabBarStyle:{
                paddingTop:Constants.statusBarHeight,
                paddingBottom:5,
                backgroundColor:"#f3f3f1"
            }
        }

        }
        >
            <Tab.Screen
            name="Unidad 1"
            component={Tec1}
            options={{
                headerShown: false,
                tabBarLabel:"Zona 1",
                tabBarIcon:({color})=>(
                    <Ionicons name={"pin"} size={20} color={color}/>
                )
            }}
            
            />
            <Tab.Screen
            name="Unidad 2"
            component={Tec2}
            options={{
                headerShown: false,
                tabBarLabel:"Zona 2",
                tabBarIcon:({color})=>(
                    <Ionicons name={"pin"} size={20} color={color}/>
                )
            }}
            />
            
            
        </Tab.Navigator>
    )
}