import React, { useState , useEffect } from "react";
import Axios from "axios";
import styles from "./Equip.module.css"

function EquipList(equips) {
const [equipas, setEquipas] = useState([]);
      
    useEffect(() => {
        //Axios.get("http://localhost:3001/")
        Axios.get("http://equip-controler.heroku.com/")
        .then((response) =>{
        setEquipas(response.data);
        });
    }, [])

return(
    <>    
    <table className={styles.equipas_table}>
    <tr><th className={styles.th} colSpan={4}>
    <td width="10%"className={styles.th}>Patrimonio</td>
    <td width="25%"className={styles.th}>Equipamento</td>
    <td width="20%"className={styles.th}>Marca</td>
    <td width="20%"className={styles.th}>Modelo</td>
    <td width="10%"className={styles.th}>Nsérie</td>
    <td width="20%"className={styles.th}>Localização</td>
    </th></tr>
    </table>

    <tbody className={styles.tbody}>
    {equipas.length >0 ? ( 
    equipas.map((equipas, index) => (
    <tr key = {index}>
        <td width="10%"className={styles.td}>{equipas.patrimonio}</td>
        <td width="25%"className={styles.td}>{equipas.equipamento}</td>
        <td width="20%"className={styles.td}>{equipas.marca}</td>
        <td width="20%"className={styles.td}>{equipas.modelo}</td>
        <td width="10%"className={styles.td}>{equipas.Nsérie}</td>
        <td width="20%"className={styles.td}>{equipas.localização}</td></tr>

        ))) : (
         <p1>Não há itens na lista</p1>
        )} 
        </tbody>
        <tfooter>
       
        </tfooter>
       
    </>

    )
}
export default EquipList