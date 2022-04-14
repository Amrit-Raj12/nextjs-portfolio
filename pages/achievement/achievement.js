import styles from "../../styles/Home.module.css";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function Achievement({img, link, ttl, desc, ttt}) {
  return (
    <div className={styles.achievement}>
      <div className={styles.achievement_browser}>
        <div className={styles.achievement_circle}>
           
        </div>
        <div className={styles.achievement_circle}>
            
        </div>
        <div className={styles.achievement_circle}>

        </div>
      </div>
      <a>
        <img src={img} alt="" className={styles.achievement_img} />
      </a>
      <div className={styles.achievement_ttl_desc}>
      <Typography>
          <Title className={styles.achievement_title}>
          {ttl}
          </Title>
          <Paragraph className={styles.achievement_desc}>
          {desc}
          </Paragraph>
      </Typography>
      
      
      </div>
    </div>
  );
}

export default Achievement;
