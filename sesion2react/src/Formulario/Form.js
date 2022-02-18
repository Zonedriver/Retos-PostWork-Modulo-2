import React from 'react';

const Form=()=>{
  const [nombre, setNombre] = React.useState('')
  const [num, setNum] = React.useState({
    profesores: 0,
    alumnos: 0
  })
  const editarNombre =(event)=> setNombre(event.target.value)
  /*const editarProfe =(event)=> setNum({
    
    ...num,
    profesores: event.target.value
  })
  const editarAl =(event)=> setNum({
    
    ...num,
    alumnos: event.target.value
  })*/
  const editarNum = (atributo)=>(event)=>setNum({
    ...num,
    [atributo]: event.target.value
  })
  return(
    <div className="margen">
      {'Nombre Profesor/Alumno'}
      <input onChange={editarNombre}/>
      {nombre}
      <br/><br/>
      {'Numero de Profesores'}
      <input type="number" onChange={editarNum('profesores')}/>
      {num.profesores}
      <br/><br/>      
      {'Numero de Alumnos'}
      <input type="number" onChange={editarNum('alumnos')}/>
      {num.alumnos}

    </div>
  )
}

Form.propTypes = {};

export default Form;