import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import axios from 'axios';
import Home from './page/home';
import Potion from './page/potions';
import Header from './components/Header';
import CreatePotion from './page/potions/createPotion';

// npm install react-router-dom

function App() {
  return ( 
    <><Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potions" element={<Potion />} />
        <Route path="/potions/addPotion" element={<CreatePotion/>}/>
        <Route path="/potions/editPotion/:id" element={<CreatePotion/>}/>
      </Routes>
    </Router></>
  );
}


/* function CriaTabelas(){
  const [stateHome, setStateHome] = useState([]);
  useEffect(()=>{
    async function criaTabelasHome(){
      const resposta = await fetch("http://localhost:8888/",
        {method: "GET"}
      ).catch((error)=>{
        alert(`Erro ao criar tabelas. ${error}`);
      });

      if(resposta.status > 400){
        alert(`Houve um erro na requisição. Erro código ${resposta.status}`);
      }else{
        const respostaJson = await resposta.json();
        setStateHome(respostaJson);
      }
    }

    criaTabelasHome();
  }, []);

  return(
    <ul>
      <h2>{stateHome}</h2>
    </ul>
  );
}
*/



export default App;
