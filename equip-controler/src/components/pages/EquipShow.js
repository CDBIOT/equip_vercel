import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";

const EquipShow = ()=> {

const [invent, setInvent] = useState([]);
const [selectValue, setSelectValue] = useState([])
  
useEffect(() => {
    Axios.get("http://localhost:3001/")
    .then((response) =>{
    setInvent(response.data);
    });
}, []) 


return (   
    <div className='EquipShow'>
       
        <select id = "invent" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value = "" >Selecione o equipamento...</option>
        {invent.map(invent => {

        return (
                <option value key={invent.id}> {invent.patrimonio}
                {invent.equipamento}
                {invent.marca}
                {invent.modelo}
                {invent.Nsérie}
                {invent.localização}</option>
                )  
        })}
        </select>
        <h3 >{selectValue}</h3>
        </div>
        )
        
    }
export default EquipShow