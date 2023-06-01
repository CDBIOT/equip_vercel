import React from 'react';
import{Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../blue/logo.png';
import logo_toi from '../blue/logo_toi.png';

function Navbar(){

return(
 
<nav className={styles.navbar}>
    
    <li>
    <p>
    <img src={logo} alt="Logo"/>
    <img src={logo_toi} alt="Logo"/>
    </p>
    </li>
        <ul className={styles.list}>

        <li className={styles.item}> 
            <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
            <Link to="/EquipShow">EquipShow</Link>
        </li>
       
        <li className={styles.item}>
            <Link to="/EquipList">Equipamentos</Link>
        </li>
        <li className={styles.item}>
            <Link to="/CadEquip">Cadastro Equipamentos</Link>
        </li>
        <li className={styles.item}>
            <Link to= "/Contato"> Contato</Link>
        </li>
    </ul>
   </nav>
)
}
export default Navbar

