import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";
import styles from "../../styles/Home.module.css";

const EditHeading = ({ heading }) => {
  const [form, setForm] = useState({
    title: heading.title,
    subTitle: heading.subTitle,
    aboutTitle: heading.aboutTitle,
    aboutDescription: heading.aboutDescription,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateHeading();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateHeading = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/headings/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is Required!";
    }
    if (!form.subTitle) {
      err.subTitle = "subTitle is Required!";
    }
    if (!form.aboutTitle) {
      err.aboutTitle = "aboutTitle is Required!";
    }
    if (!form.aboutDescription) {
      err.aboutDescription = "aboutDescription is Required!";
    }

    return err;
  };

  return (
    <div className={styles.form_container}>
      <h1>Update Heading</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit} style={{ width: "480px" }}>
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "Please Enter a title", pointing: "below" }
                  : null
              }
              label="Title"
              placeholder="Enter Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.subTitle
                  ? { content: "Please Enter a subTitle", pointing: "below" }
                  : null
              }
              label="subTitle"
              placeholder="Enter subTitle"
              name="subTitle"
              value={form.subTitle}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              error={
                errors.aboutTitle
                  ? { content: "Please Enter a aboutTitle", pointing: "below" }
                  : null
              }
              label="aboutTitle"
              placeholder="Enter aboutTitle"
              name="aboutTitle"
              value={form.aboutTitle}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              error={
                errors.aboutDescription
                  ? {
                      content: "Please Enter a aboutDescription",
                      pointing: "below",
                    }
                  : null
              }
              label="aboutDescription"
              placeholder="Enter aboutDescription"
              name="aboutDescription"
              value={form.aboutDescription}
              onChange={handleChange}
            />

            <Button type="submit">Update</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

EditHeading.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/headings/${id}`);
  const { data } = await res.json();

  return { heading: data };
};

export default EditHeading;
