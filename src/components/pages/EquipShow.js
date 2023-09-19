import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";
import Loader from '../Loader';

const EquipShow = (props)=> {

const [invent, setInvent] = useState([]);
const [selectValue, setSelectValue] = useState([])
const [loading, setLoading] = useState(false);

function equipList(e){
   // e.preventDefault()
    alert(selectValue)

 
const options = {
    'Access-Control-Allow-Origin':'*',
    method: 'GET',	
    mode: 'cors',
    cache: 'default',
    'Content-Type': 'application/json'}
    
     Axios.get("https://equips-server.vercel.app/equips",options)
     .then(resp=>{ setInvent(resp.data.inventario);
     }).catch(err=> console.log(err))
    
    {setLoading(true)}
}
useEffect(() => {
    equipList();
    }, [])
    

return (   
    <div className='EquipShow'>
      
      
        <select id = "inventarios" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value = "">Selecione o equipamento...</option>
       { invent.length >0 ?(
        invent.map(invent => {

        return (
                <option  value={invent.id}key={invent.id}> 
                {invent.PATRIMONIO }
                {invent.EQUIPAMENTO }
                {invent.MARCA }
                {invent.MODELO }
                {invent.SERIAL }
                {invent.LOCALIZACAO }</option>
                )  
        })):(!loading && <Loader/>)}
         {!loading && <Loader/>}
        </select>
        <h1>{selectValue}</h1>
        </div>
        )
        
    }
export default EquipShow