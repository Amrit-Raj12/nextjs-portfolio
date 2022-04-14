import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Row, Col, Typography } from "antd";
import img from "../public/2.jpg";
import img3 from "../public/3.jpg";
import Tilt from "react-tilt";
import { DownloadOutlined, FolderViewOutlined, SendOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/client";
import Product from "./product/product";
import { achievement, products } from "./data";
import Achievement from "./achievement/achievement";
import "semantic-ui-css/semantic.min.css";

const { Title, Paragraph, Text } = Typography;

export default function Home({ headings }) {
  const [session, loading] = useSession();
  console.log({ session, loading });

  return (
    <div className={styles.container}>
      <Head>
        <title>Amrit-Raj</title>
        <meta name="description" content="Amrit-Raj, FrontEnd Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {headings.map((heading) => {
        return (
          <>
            <div className={styles.head_container}>
              <Row>
                <Col className={styles.head_box} span={24}>
                  <Row className={styles.head_row_box} gutter={[24, 8]}>
                    <Col className={styles.cro_col_box} span={24}>
                      <Row className={styles.cro_row_box} gutter={[24, 8]}>
                        <Col span={12}>
                          <div className={styles.cro_title_box}>
                            <>
                              <div key={heading._id}>
                                <Link href={`${heading._id}/editHeading`}>
                                  <Text
                                    type="secondary"
                                    className={styles.cro_text}
                                    level={6}
                                  >
                                    {heading.subTitle}
                                  </Text>
                                </Link>

                                <Title className={styles.cro_title} level={1}>
                                  {heading.title}
                                </Title>
                                {/* <Link href={`${heading._id}`}>
                              <Button primary>View</Button>
                            </Link> */}
                                <div className={styles.cro_btn_box}>
                                  <Link href={`${heading._id}`}>
                                    {session && !loading ? (
                                      <button className={styles.button}>
                                        View Profile
                                      </button>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </div>
                              </div>
                            </>
                          </div>
                        </Col>
                        <Col flex={3}>
                          <div className={styles.banner_box}>
                            <div className={styles.banner_inner_box}>
                              <Tilt
                                className="Tilt"
                                options={{
                                  max: 25,
                                }}
                                style={{ height: 250, width: 250 }}
                              >
                                <div className={styles.Tilt_inner}>
                                  <Image
                                    src={img}
                                    className={styles.img}
                                    height={590}
                                    width={420}
                                  />
                                </div>
                              </Tilt>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            {/* About Page Here */}
            <div className={styles.about_box} id="abt">
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
                            height="590px"
                            width="420px"
                          />
                        </div>
                      </Tilt>
                    </Col>
                    <Col span={12}>
                      <div className={styles.about_text_box}>
                        <Typography>
                          <>
                            <Title className={styles.about_text_title}>
                              {heading.aboutTitle}
                            </Title>
                            <Paragraph className={styles.about_text_para}>
                              {heading.aboutDescription}
                              {/* In the process of internal desktop applications
                              development, many different design specs and
                              implementations would be involved, which might
                              cause designers and developers difficulties and
                              duplication and reduce the efficiency of
                              development. */}
                            </Paragraph>
                            <div className={styles.cro_btn_box}>
                              <button className={styles.button}>
                                Download CV <DownloadOutlined />
                              </button>
                            </div>
                          </>
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            {/* Project Page Here */}
            <div className={styles.project_box}>
              <div className={styles.project_text}>
                <Typography>
                  <Title className={styles.project_title}>Project</Title>
                  <p className={styles.project_desc}>
                    In the process of internal desktop applications development,
                    many different design specs and implementations would be
                    involved, which might cause designers and developers
                    difficulties and duplication and reduce the efficiency of
                    development
                  </p>
                </Typography>
              </div>
              <div className={styles.project_list}>
                {products.map((item) => (
                  <Product key={item.id} img={item.img} link={item.link} />
                ))}
              </div>
            </div>
            {/* Achievement Page Here */}
            <div className={styles.achievement_box}>
              <div className={styles.achievement_text}>
                <Typography>
                  <Title className={styles.achievement_title}>
                    Achievements
                  </Title>
                  <p className={styles.achievement_desc}>
                    In the process of internal desktop applications development,
                    many different design specs and implementations would be
                    involved, which might cause designers and developers
                    difficulties and duplication and reduce the efficiency of
                    development
                  </p>
                </Typography>
              </div>
              <div className={styles.achievement_list}>
                {achievement.map((item) => (
                  <Achievement
                    key={item.id}
                    img={item.img}
                    link={item.link}
                    ttl={item.title}
                    desc={item.desc}
                    ttt="tasdadasdadsadsada"
                  />
                ))}
              </div>
            </div>
            {/* Blog Page Here */}
            <div className="blog_box">
              <Row className="blog_inner_row">
                <Col span={24}>
                  <Typography>
                    <>
                      <Title className={styles.about_text_title}>
                        To view Blogs Click Button
                      </Title>
                      <div className={styles.cro_btn_box}>
                        <button className={styles.button}>
                          View Blogs <FolderViewOutlined />
                        </button>
                      </div>
                    </>
                  </Typography>
                </Col>
              </Row>
            </div>
            {/* Contact Page Here */}
            <div className={styles.contact}>
              <Row>
                <Col span={24}>
                  {" "}
                  <section id="contact">
                    <div className="contact-box">
                      <div className="contact-links">
                        <h2>CONTACT</h2>
                        <div className="links">
                          <div className="link">
                            <a>
                              <img
                                src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                                alt="linkedin"
                              />
                            </a>
                          </div>
                          <div className="link">
                            <a>
                              <img
                                src="https://i.postimg.cc/YCV2QBJg/github.png"
                                alt="github"
                              />
                            </a>
                          </div>
                          <div className="link">
                            <a>
                              <img
                                src="https://i.postimg.cc/W4Znvrry/codepen.png"
                                alt="codepen"
                              />
                            </a>
                          </div>
                          <div className="link">
                            <a>
                              <img
                                src="https://i.postimg.cc/NjLfyjPB/email.png"
                                alt="email"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="contact-form-wrapper">
                        <form>
                          <div className="form-item">
                            <input type="text" name="sender" required />
                            <label>Name:</label>
                          </div>
                          <div className="form-item">
                            <input type="text" name="email" required />
                            <label>Email:</label>
                          </div>
                          <div className="form-item">
                            <textarea
                              className=""
                              name="message"
                              required
                            ></textarea>
                            <label>Message:</label>
                          </div>
                          {/* <button className="submit-btn">Send</button> */}
                          <button className={styles.button}>
                          Send <SendOutlined />
                        </button>
                        </form>
                      </div>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </>
        );
      })}
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/headings");
  const { data } = await res.json();
  return {
    headings: data,
  };
};
