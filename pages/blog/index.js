import Link from "next/link";
import { Collapse } from "antd";
import styles from "../../styles/Home.module.css";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function Blog({ data }) {
  return (
    <>
      <div className={styles.blog_container}>
        <h1>List of Blogs </h1>
        {data.slice(0, 5).map((post) => {
          return (
            <div key={post.id}>
              {/* <h3>{post.id}</h3>
            <Link href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
            </Link> */}

              <Collapse className={styles.collapse} accordion>
                <Panel
                  className={styles.blog_header}
                  header={post.title}
                  key="1"
                >
                  <p>
                    <span style={{ fontWeight: "bold" }}>{post.id}: </span>
                    {post.body}
                  </p>
                  <Link href={`/blog/${post.id}`}>View More</Link>
                </Panel>
              </Collapse>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
