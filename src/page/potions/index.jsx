import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { destroyPotion, listAllPotion } from "../../service/potionService";

export default function Potion(){
    const [potions, setPotions] = useState([]);
    
    const getPotions = async() => {
        const result = await listAllPotion();
        setPotions(result);
        console.log(potions);
    }

    const handleButtonDeletePotion = async (potionId) =>{
        console.log(potionId);
        const result = await destroyPotion(potionId);
        if(result.status === 200){
            setPotions(potions.filter(potion => potion.id !== potionId));
        }
    }

    const deletePotion = (idPositon) =>{
        handleButtonDeletePotion(idPositon);
        console.log(idPositon);
    }

    useEffect(()=>{
        getPotions();
    },[])

  
    return(   
      <div>
          <h1>Listagem de poções</h1>

            <Link to="/potions/addPotion"><button>Adicionar nova poção</button></Link> 
            <br/>
          
          {potions ? (
              <>
               <ul>      
                    {potions.map(potions => (
                        <li key={potions.id}>
                            <Link to={`/potions/${potions.id}`}><h3>{potions.nome}</h3></Link>
                            <Link to={`/potions/editPotion/${potions.id}`} ><button>Editar</button></Link>
                            <button onClick={()=>deletePotion(potions.id)}>Delete</button>
                        </li>
                    )
                    )}
                </ul>
              </>

            ) : (<>
                <h1>Nenhuma poção cadastrada.</h1>
            </>)
          }
         
        {/* <button style={{padding: 10, margin: 10}}><Link to="./addPotion">Add Potion</Link></button> */}
      </div>
    )
}