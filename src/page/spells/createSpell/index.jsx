import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createSpell, findSpellById, updateSpell } from "../../../service/spellService";

export default function CreateSpell(){
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [name, setName] = useState('');
    const [execute, setExecute] = useState('');
    const [nameButton, setNameButton] = useState('Adicionar');
  
    const nameChange = event => {setName(event.target.value)};
    const executeChange = event => {setExecute(event.target.value)};

  
  
    async function addNewSpell(data) {
        const result = await createSpell(data);
        if (result) {
            navigate('/spells');
        } else {
            alert("Não foi possivel cadastrar feitiço");
        }
    }

    async function update(data) {
        const result = await updateSpell(data);
        if (result) {
            navigate('/spells');
        } else {
            alert("Não foi possivel editar feitiço");
        }
    }

    const formSubmit = (event) => {  
      event.preventDefault();
    
        // se tiver id no useParams (editar)
        if(id){
            // enviar dados com o id da poção
            const data = JSON.stringify({'id':id, 'nome' : name, 'execucao' : execute});
            update(data);
        }else{
            // cadastro não há id ainda
            const data = JSON.stringify({'nome' : name, 'execucao' : execute});
            addNewSpell(data);
        }
   
     };

     const getSpell = async() => {
        const result = await findSpellById(id);
        console.log(result);
        if(result){
            setName(result.spell.nome);
            setExecute(result.spell.execucao);
        }else{
            alert(result.mensagem);
        }
        
    }

     // ao iniciar componente, se for passado id, busca spell e coloca em useState (form)
     useEffect(() =>{
        if(id && id > 0){
            setNameButton("Editar");
            getSpell();
        }
     }, []);

  
    return(
      <div>
        <form style={{padding: 10}} id="formAddSpell" onSubmit={formSubmit}>
          <label htmlFor="nome">Nome</label><br/>
          <input type="text" id="nome" onChange={nameChange} value={name}/><br/>
          <label htmlFor="execucao">Execução</label><br/>
          <input type="text" id="execucao" onChange={executeChange} value={execute}/><br/><br/>
          <input type="submit" value={nameButton} />
          <Link to="/spells"><button style={{margin: 10}}>Voltar</button></Link>        
        </form>
      </div>
    )  
}