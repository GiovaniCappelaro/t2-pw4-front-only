import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { destroySpell, listAllSpells } from "../../service/spellService";

export default function Spell(){
    const [spell, setSpell] = useState([]);
    
    const getSpells = async() => {
        const result = await listAllSpells();
        setSpell(result);
        console.log(spell);
    }

    const handleButtonDeleteSpell = async (spellId) =>{
        console.log(spellId);
        const result = await destroySpell(spellId);
        if(result.status === 200){
            setSpell(spell.filter(spell => spell.id !== spellId));
        }
    }

    const deleteSpell = (idSpell) =>{
        handleButtonDeleteSpell(idSpell);
        console.log(idSpell);
    }

    useEffect(()=>{
        getSpells();
    },[])

  
    return(   
      <div>
          <h1>Listagem de Feitiços</h1>

            <Link to="/spells/addSpell"><button>Adicionar novo feitiço</button></Link> 
            <br/>
          
          {spell ? (
              <>
               <ul>      
                    {spell.map(spell => (
                        <li key={spell.id}>
                            <Link to={`/spells/${spell.id}`}><h3>{spell.nome}</h3></Link>
                            <Link to={`/spells/editSpell/${spell.id}`} ><button>Editar</button></Link>
                            <button onClick={()=>deleteSpell(spell.id)}>Delete</button>
                        </li>
                    )
                    )}
                </ul>
              </>

            ) : (<>
                <h1>Nenhum feitiço cadastrado.</h1>
            </>)
            }         
      </div>
    )
}