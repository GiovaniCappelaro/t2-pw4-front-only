import api from './api';

let configRequest = {
    headers :{
        "Content-type" : 'application/json'
    }
}

// Faz uma chamada ao backend  para cadastrar feitiço
const createSpell = async (spell) => {
    //localhost:8888/spells/addSpell
    return await api.post('/spells/addSpell',spell,configRequest)
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}


const listAllSpells = async () => {
    //localhost:8888/spells
    return await api.get('/spells')
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}

const findSpellById = async (id) => {
    //localhost:8888/spells/findSpell/:id
    return await api.get(`/spells/findSpell/${id}`)
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}

// {id: 1, 'nome': 'ksksk', 'modo':'ksjdhfk'}
const updateSpell = async (spell) => {
    //localhost:8888/spells/editSpell/:id
    const objSpell = JSON.parse(spell);
    return await api.put(`/spells/editSpell/${objSpell.id}`,spell,configRequest)
    .then(response => {
        return response;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro ao atualizar feitiço =>  ${err}`);
    });
}

const destroySpell = async (id) => {
    //localhost:8888/spells/deleteSpell/:id
    return await api.delete(`/spells/deleteSpell/${id}`)
    .then(response => {
        return response;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro ao excluir feitiço =>  ${err}`);
    });
}

export {
    createSpell, listAllSpells, findSpellById, updateSpell, destroySpell
}

