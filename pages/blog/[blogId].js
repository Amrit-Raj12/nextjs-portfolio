import Image from 'next/image';
import { Typography, Divider } from 'antd';
import Tilt from "react-tilt";

const { Title, Paragraph, Text, Link } = Typography;



export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { blogId: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blogId;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function BlogId({ data }) {
  const { id, userId, title, body } = data;

  return (
    <>
      <div className="blog_details">

      <Typography className='typography'>
      <Tilt
                                className="Tilt"
                                options={{
                                  max: 25,
                                }}
                                style={{ height: 300, width: 700 }}
                              >
                                <div className="Tilt_inner">
                                <Image src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='blogImage' width="700" height="298" />
                                </div>
                              </Tilt>
       
    <Title><h3>{title}</h3></Title>
    <Paragraph>
    <h5>{body}</h5>
    </Paragraph>
   

   


    </Typography>

        {/* <h3>Id:{id}</h3>
        <h4>UserId:{userId}</h4>
        <h4>Title:{title}</h4>
        <h5>Body:{body}</h5> */}
      </div>
    </>
  );
}

export default BlogId;
