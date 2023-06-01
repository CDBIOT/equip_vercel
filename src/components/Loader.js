import React from "react";
import styles from './Loading.module.css';
import loading from "./loading.svg"

function Loader() {

return(
<div className={styles.loader_on}>
    <img src = {loading} alt= "Loading"/>

</div>

)

}
export default Loader