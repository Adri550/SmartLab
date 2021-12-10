import React, { useState, useEffect } from "react";
import regis from '../regist.jpeg'
import { Header } from 'react-native-elements';
import { StyleSheet, View, Image } from 'react-native';

const Regist = () => {
  const [usuario, setUsuario] = useState({
    nombres: '',
      apellidos: '',
      tipo_de_usuario: '',
      nombre_usuario: ''
  })

  const hChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const hSubmit = () => {
    if (usuario.nombre_usuario === '' || usuario.tipo_de_usuario === '') {
      alert('Llena todos los campos')
      return
    }

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }
    fetch('https://api.bluemoonsports.works/api/users', requestInit)
      .then(res => res.json())
      .then(res => console.log(res))

    setUsuario({
      nombres: '',
      apellidos: '',
      tipo_de_usuario: '',
      nombre_usuario: ''
    })
    alert('Genial, te has registrado exitosamente como '+usuario.nombre_usuario+', dale este nombre de usuario al administrador para adquirir material o un laboratorio.')
  }
  return (
   <div>
      <Header
        centerComponent={{ text: 'SmartLab', style: { color: '#fff', fontSize: 30 } }}
        backgroundColor="#6f737a"
      />
    <div className="Home">
        <div className="Welc">
        <h2>Registrate</h2>
      <form onSubmit={hSubmit}>
        <div className="Data">
        

          <input onChange={hChange} name="nombre_usuario" id="nuser" className="Inputs" placeholder="Nombre de usuario"></input>
        </div>
        <div className="Data">

          <input onChange={hChange} name="nombres" id="name" className="Inputs" placeholder="Nombre"></input>
        </div>
        <div className="Data">

          <input onChange={hChange} name="apellidos" id="lastname" className="Inputs" placeholder="Apellidos"></input>
        </div>
        <div className="Data">

          <select onChange={hChange} name="tipo_de_usuario" id="type" className="Inputs" id="hh">
            <option value="Selecciona">Tipo de usuario</option>
            <option value="Alumno">Alumno</option>
            <option value="Profesor">Profesor</option>
          </select>
        </div>

        <div className="Data">
          <button type="submit" className="But">Enviar</button>
        </div>
      </form>
      <View>
          <Image
            style={{
              resizeMode: "contain",
              width: 250,
              height: 250,
            }}
            source={require('../regist.jpeg')} />
        </View>
        </div>
    </div> 
    </div>
    
    
      
  )
}
export default Regist;


    