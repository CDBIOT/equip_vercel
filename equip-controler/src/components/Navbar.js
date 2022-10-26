import React from 'react';
import{Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../blue/logo.png';
import logo_toi from '../blue/logo_toi.png';

function Navbar(){

return(

    <ul className={styles.list}>
    <li>
    <p>
    <img src={logo} alt="Logo"/>
    <img src={logo_toi} alt="Logo"/>
    </p>
    </li>

        <li className={styles.item}> 
            <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
            <Link to= "/Contato"> Contato</Link>
        </li>
        <li className={styles.item}>
            <Link to="/CadEquip">Cadastro Equipamentos</Link>
        </li>
        <li className={styles.item}>
            <Link to="/EquipList">Equipamentos</Link>
        </li>
        <li className={styles.item}>
            <Link to="/EquipShow">EquipShow</Link>
        </li>
    </ul>
   
)
}
export default Navbar

