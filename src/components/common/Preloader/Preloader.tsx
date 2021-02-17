import preloader from "../../../assets/images/loader.gif";
import styles from "../../Users/users.module.css";
import React from "react";

export let Preloader = ()=>{
    return <div>
        <img src={preloader} className={styles.loader}/>
    </div>
}
