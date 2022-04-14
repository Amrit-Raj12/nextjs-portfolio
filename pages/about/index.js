import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import "antd/dist/antd.css";
import { Row, Col, Typography, Button, Divider } from "antd";
import img3 from "../../public/3.jpg";
import Tilt from "react-tilt";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

function About({ abouts }) {
  console.log(abouts.data[0]);
  const dts = abouts.data[0];
  console.log(dts);

  return (
    <>
      <div className={styles.about_box}>
        <Row>
          <Col className={styles.about_col} span={24}>
            <Row className={styles.about_inner_row} gutter={[16, 8]}>
              <Col className={styles.about_inner_col1} span={12}>
                <Tilt
                  className="Tilt"
                  options={{
                    max: 25,
                  }}
                  style={{ height: 250, width: 250 }}
                >
                  <div className={styles.Tilt_inner}>
                    <Image
                      src={img3}
                      className={styles.img}
                      height={590}
                      width={420}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col span={12}>
                <div className={styles.about_text_box}>
                  <Typography>
                    {/* {dts.map((about) => {
                      return ( */}
                    <>
                      <Title className={styles.about_text_title}>
                        {dts.title}
                      </Title>
                      <Paragraph className={styles.about_text_para}>
                        {dts.description}
                      </Paragraph>
                      <div className={styles.cro_btn_box}>
                        <button className={styles.button}>
                          Download CV <DownloadOutlined />
                        </button>
                      </div>
                    </>
                    {/* );
                    })} */}
                  </Typography>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;

About.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/abouts");
  const data = await res.json();
  return {
    abouts: data,
  };
};
