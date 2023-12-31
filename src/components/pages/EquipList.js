import React, { useState , useEffect } from "react";
import Axios from "axios";
import styles from "./Equip.module.css"

function EquipList() {
const [equipas, setEquipas] = useState('');
      
const options = {
    'Access-Control-Allow-Origin':'*',
    method: 'GET',	
    mode: 'cors',
    cache: 'default',
    'Content-Type': 'application/json'}
    
useEffect(() => {
       Axios.get("equips-server.vercel.app/equips",options)
        .then((response) =>{
        setEquipas(response.data.inventario);
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
    <td width="10%"className={styles.th}>Serial</td>
    <td width="20%"className={styles.th}>Localização</td>
    </th></tr>
    </table>

    <tbody className={styles.tbody}>

    {equipas.length >0 ? ( 
    equipas.map((equipas, index) => (
    <tr key = {index}>
        <td width="10%"className={styles.td}>{equipas.PATRIMONIO}</td>
        <td width="25%"className={styles.td}>{equipas.EQUIPAMENTO}</td>
        <td width="20%"className={styles.td}>{equipas.MARCA}</td>
        <td width="20%"className={styles.td}>{equipas.MODELO}</td>
        <td width="10%"className={styles.td}>{equipas.SERIAL}</td>
        <td width="20%"className={styles.td}>{equipas.LOCALIZACAO}</td></tr>

        ))) : (
         <p1>Não há itens na lista</p1>
        )} 
        </tbody>
        <tfooter>
        <tr >
         <td width="10%"className={styles.td}>{equipas._id}</td>
        <td width="10%"className={styles.td}>{equipas.PATRIMONIO}</td>
        <td width="25%"className={styles.td}>{equipas.EQUIPAMENTO}</td>
        <td width="20%"className={styles.td}>{equipas.MARCA}</td>
        <td width="20%"className={styles.td}>{equipas.MODELO}</td>
        <td width="10%"className={styles.td}>{equipas.SERIAL}</td>
        <td width="20%"className={styles.td}>{equipas.LOCALIZACAO}</td></tr>

        </tfooter>
       
    </>

    )
}
export default EquipList