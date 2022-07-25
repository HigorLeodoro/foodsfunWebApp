import styles from "./styles.module.scss"

import CardProdutos from "../../components/CardProdutos";

export default function produtos() {
 return (
   <div>
     <div className={styles.banner}></div>
     <CardProdutos/>
   </div>
 );
}