import React, { useState } from "react";

const Player = () => {
  // enteredPlayerName para almacenar el nombre del jugador ingresado
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  //submitted para rastrear si se ha enviado el nombre del jugador.
  const [submitted, setSubmitted] = useState(false);

  // handleChange se activa cada vez que el usuario escribe en el campo de entrada de texto. Actualiza el estado 
  //enteredPlayerName con el valor actual del campo de entrada.
  function handleChange(event) {
    setEnteredPlayerName(event.target.value);
  }
//handleClick es una función que se activa cuando el usuario hace clic en el botón "Set Name". 
//Establece el estado submitted en true
  function handleClick(){
    setSubmitted(true)
  }


  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button  onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
