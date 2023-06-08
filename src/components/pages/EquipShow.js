import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";
import Loader from '../Loader';

const EquipShow = (props)=> {

const [invent, setInvent] = useState([]);
const [selectValue, setSelectValue] = useState([])
const [loading, setLoading] = useState(false);

function handleCreate(e){
    e.preventDefault()
    alert(selectValue)
}
  
useEffect(() => {
    //Axios.get("/equiplist")
    Axios.get("https://equip-vercel-theta.vercel.app/equiplist")
    .then((response) =>{
    setInvent(response.data.inventario);
    });
    {  setLoading(true)}
    

}, []) 

return (   
    <div className='EquipShow'>
      
      
        <select id = "inventarios" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value = "">Selecione o equipamento...</option>
        {invent.map(invent => {

        return (
                <option  value={invent.id}key={invent.id}> 
                {invent.PATRIMONIO }
                {invent.EQUIPAMENTO }
                {invent.MARCA }
                {invent.MODELO }
                {invent.SERIAL }
                {invent.LOCALIZACAO }</option>
                )  
        })}
         {!loading && <Loader/>}
        </select>
        <h1>{selectValue}</h1>
        </div>
        )
        
    }
export default EquipShow