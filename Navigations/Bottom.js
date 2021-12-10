import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackN from "./stack";
import LabsTop from "./LabsTop";
import ProysTop from "./ProysTop";
import Home from "../Screens/Home";
import Regist from "../Screens/Registro";
import GitHubScreen from "../Screens/Contacto";
import TecTop from "./TecTop";

const Tab = createBottomTabNavigator();
export default function Bottom(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor:"#6CABDD",
            tabBarInactiveTintColor:"#1C2C5B",
            tabBarShowLabel:true,
            tabBarLabelStyle:{
                fontSize:12
            },
            tabBarStyle:{
                paddingBottom:5,
                backgroundColor:"#f3f3f1"
            }
        }

        }
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarLabel:"Inicio",
                tabBarIcon:({color})=>(
                    <Ionicons name={"home"} size={20} color={color}/>
                )
            }}
            
            />
            <Tab.Screen
            name="Labs"
            component={LabsTop}
            options={{
                headerShown: false,
                tabBarLabel:"Labs",
                tabBarIcon:({color})=>(
                    <Ionicons name={"laptop"} size={20} color={color}/>
                )
            }}
            />
            <Tab.Screen
            name="Proys"
            component={ProysTop}
            options={{
                headerShown: false,
                tabBarLabel:"Proys",
                tabBarIcon:({color})=>(
                    <Ionicons name={"tv"} size={20} color={color}/>
                )
            }}
            />
           
            <Tab.Screen
            name="Regist"
            component={Regist}
            options={{
                headerShown: false,
                tabBarLabel:"Registro",
                tabBarIcon:({color})=>(
                    <Ionicons name={"person-add"} size={20} color={color}/>
                )
            }}
            />
            <Tab.Screen
            name="Contacto"
            component={GitHubScreen}
            options={{
                headerShown: false,
                tabBarLabel:"Contacto",
                tabBarIcon:({color})=>(
                    <Ionicons name={"person"} size={20} color={color}/>
                )
            }}
            />
            <Tab.Screen
            name="Tecs"
            component={TecTop}
            options={{
                headerShown: false,
                tabBarLabel:"Tecs",
                tabBarIcon:({color})=>(
                    <Ionicons name={"logo-buffer"} size={20} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}
