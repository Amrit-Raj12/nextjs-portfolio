import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";
import styles from "../styles/Home.module.css";

const NewHeading = () => {
  const [form, setForm] = useState({ title: "", subTitle: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  // const [imageSrc, setImageSrc] = useState();
  // const [uploadData, setUploadData] = useState();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createHeading();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createHeading = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/headings", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);

    // const form = e.currentTarget;
    // const fileInput = Array.from(form.elements).find(
    //   ({ name }) => name === "file"
    // );

    // const formData = new FormData();

    // for (const file of fileInput.files) {
    //   formData.append("file", file);
    // }

    // formData.append("upload_preset", "my_uploads");

    // const data = await fetch(
    //   "https://api.cloudinary.com/v1_1/dzur9wakk/image/upload",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // ).then((r) => r.json());

    // setImageSrc(data.secure_url);
    // setUploadData(data);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // const reader = new FileReader();

    // reader.onload = function (onLoadEvent) {
    //   setImageSrc(onLoadEvent.target.result);
    //   setUploadData(undefined);
    // };

    // reader.readAsDataURL(e.target.files[0]);
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is Required!";
    }
    if (!form.subTitle) {
      err.subTitle = "Sub-Title is Required!";
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
      <h1>Create Heading</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit} style={{ width: "480px" }}>
            <Link href="/">
              <Button style={{ float: "right" }} basic color="blue" animated>
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </Link>
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
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.subTitle
                  ? { content: "Please Enter subTitle", pointing: "below" }
                  : null
              }
              label="subTitle"
              placeholder="Enter subTitle"
              name="subTitle"
              onChange={handleChange}
            />

            <Form.Input
              fluid
              error={
                errors.aboutTitle
                  ? { content: "Please Enter aboutTitle", pointing: "below" }
                  : null
              }
              label="aboutTitle"
              placeholder="Enter aboutTitle"
              name="aboutTitle"
              onChange={handleChange}
            />

            <Form.Input
              fluid
              error={
                errors.aboutDescription
                  ? {
                      content: "Please Enter aboutDescription",
                      pointing: "below",
                    }
                  : null
              }
              label="aboutDescription"
              placeholder="Enter aboutDescription"
              name="aboutDescription"
              onChange={handleChange}
            />
            {/* <Form.Input
              fluid
              label="Image"
              type="file"
              name="file"
              onChange={handleChange}
            />
            <img src={imageSrc} width={200} height={200} />

            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}

            {uploadData && (
              <code>
                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
              </code>
            )} */}

            <Button type="submit" color="green">
              Create
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewHeading;
