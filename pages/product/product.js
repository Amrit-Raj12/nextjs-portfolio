import styles from "../../styles/Home.module.css";

function Product({ img, link }) {
  return (
    <div className={styles.project}>
      <div className={styles.project_browser}>
        <div className={styles.project_circle}></div>
        <div className={styles.project_circle}></div>
        <div className={styles.project_circle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.project_img} />
      </a>
      <h5>HHELLO</h5>
    </div>
  );
}

export default Product;
