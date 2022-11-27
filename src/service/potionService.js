import api from './api';

let configRequest = {
    headers :{
        "Content-type" : 'application/json'
    }
}

// Faz uma chamada ao backend  para cadastrar poção
const createPotion = async (potion) => {
    //localhost:8888/potions/addPotion
    return await api.post('/potions/addPotion',potion,configRequest)
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}

const listAllPotion = async () => {
    //localhost:8888/potions
    return await api.get('/potions')
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}

const findPotionById = async (id) => {
    //localhost:8888/potions
    return await api.get(`/potions/findPotion/${id}`)
    .then(response => {
        return response.data;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro =>  ${err}`);
    });
}

// {id: 1, 'nome': 'ksksk', 'modo':'ksjdhfk'}
const updatePotion = async (potion) => {
    //localhost:8888/potions
    const objPotion = JSON.parse(potion);
    return await api.put(`/potions/editPotion/${objPotion.id}`,potion,configRequest)
    .then(response => {
        return response;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro ao atualizar poção =>  ${err}`);
    });
}

const destroyPotion = async (id) => {
    //localhost:8888/potions
    return await api.delete(`/potions/deletePotion/${id}`)
    .then(response => {
        return response;
    }).catch((err) =>{
        console.error(`Opsssss! Ocorreu um erro ao excluir poção =>  ${err}`);
    });
}

export {
    createPotion, listAllPotion,findPotionById,updatePotion,destroyPotion
}

