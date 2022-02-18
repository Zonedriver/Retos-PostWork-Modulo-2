import React from 'react';

const Reto=()=>{
  const [state, setState] = React.useState({
    nombre: '',
    apellidos: [
      '',
      ''
    ]
  })
 
const setStateSup = (atributo)=>(event)=>setState({
  ...state,
  [atributo]: event.target.value
})

const arrayState = (atributo,i)=>(event)=>{
  let array = [...state[atributo]];
  array[i] = event.target.value;
  setState({
    ...state,
    [atributo]: array
  })
}

  return(
    <div>
      {' Nombre: '}
      <input onChange={setStateSup('nombre')}/>
      {' Apellido Materno: '}
      <input onChange={arrayState('apellidos',0)}/>
      {' Apellido Paterno: '}
      <input onChange={arrayState('apellidos',1)}/>
      <br/><br/>    
      {state.nombre} {state.apellidos[0]} {state.apellidos[1]}  
    </div>
  )
}

Reto.propTypes = {};

export default Reto;