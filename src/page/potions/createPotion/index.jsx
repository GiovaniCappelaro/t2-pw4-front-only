import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createPotion, findPotionById, updatePotion } from "../../../service/potionService";

export default function CreatePotion(){
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [name, setName] = useState('');
    const [preparation, setPreparation] = useState('');
    const [nameButton, setNameButton] = useState('Adicionar');
  
    const nameChange = event => {setName(event.target.value)};
    const preparationChange = event => {setPreparation(event.target.value)};

  
  
    async function addNewPotion(data) {
        const result = await createPotion(data);
        if (result) {
            navigate('/potions');
        } else {
            alert("Não foi possivel cadastrar poção");
        }
    }

    async function update(data) {
        const result = await updatePotion(data);
        if (result) {
            navigate('/potions');
        } else {
            alert("Não foi possivel editar poção");
        }
    }

    const formSubmit = (event) => {  
      event.preventDefault();
    
        // se tiver id no useParams (editar)
        if(id){
            // enviar dados com o id da poção
            const data = JSON.stringify({'id':id, 'nome' : name, 'preparo' : preparation});
            update(data);
        }else{
            // cadastro não há id ainda
            const data = JSON.stringify({'nome' : name, 'preparo' : preparation});
            addNewPotion(data);
        }
   
     };

     const getPotion = async() => {
        const result = await findPotionById(id);
        console.log(result);
        if(result){
            setName(result.pocao.nome);
            setPreparation(result.pocao.preparo);
        }else{
            alert(result.mensagem);
        }
        
    }

     // ao iniciar componente, se for passado id, busca poção e coloca em useState (form)
     useEffect(() =>{
        if(id && id > 0){
            setNameButton("Editar");
            getPotion();
        }
     }, []);

  
    return(
      <div>
        <form style={{padding: 10}} id="formAddPotion" onSubmit={formSubmit}>
          <label htmlFor="nome">Nome</label><br/>
          <input type="text" id="nome" onChange={nameChange} value={name}/><br/>
          <label htmlFor="preparo">Preparo</label><br/>
          <input type="text" id="preparo" onChange={preparationChange} value={preparation}/><br/><br/>
          <input type="submit" value={nameButton} />
          <Link to="/potions"><button style={{margin: 10}}>Voltar</button></Link>        
        </form>
      </div>
    )  
}