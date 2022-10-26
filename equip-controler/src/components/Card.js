import React from "react";

import {useEffect, useState} from 'react';
import Axios from "axios";


function Card(props){
    const [equipas, setEquipas] = useState([]);
      
    useEffect(() => {
        Axios.get("http://localhost:3001/")
        .then((response) =>{
        setEquipas(response.data);
        });
       
    }, [])

return(
<div>
    <h3 >{equipas.patrimonio}
    {equipas.equipamento}
    {equipas.marca}
    {equipas.modelo}
    {equipas.Nsérie}
    {equipas.localização}</h3>
</div>
)

}
export default Card