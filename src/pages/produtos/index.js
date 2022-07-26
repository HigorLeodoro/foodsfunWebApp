import styles from "./styles.module.scss"

import CardProdutos from "../../components/CardProdutos";

export default function produtos() {
 return (
   <div>
     <div className={styles.banner}></div>

        <div className={styles.header}>

          <div className={styles.container}>
            <h1 className={styles.text1}> Produtos </h1>
            <h1 className={styles.text}> Recomendados </h1>
          </div>

          <div className={styles.input}>
            <input type="text" />
          </div>
        </div>

     <CardProdutos/>
   </div>
 );
}