import styles from "./styles.module.scss"


export default function CardProdutos() {
 return (
   <div>
     <div className={styles.container}>
         <div className={styles.header}>
             <h1 className={styles.text}> Produtos </h1>
             <h1 className={styles.text}> Recomendados </h1>
         </div>
     </div>
   </div>
 );
}

