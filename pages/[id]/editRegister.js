import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";
import styles from "../../styles/Home.module.css";

const EditRegister = ({ register }) => {
  const [form, setForm] = useState({
    uname: heading.uname,
    email: heading.email,
    phone: heading.phone,
    password: heading.password,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateUser();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/registers/${router.query.id}`,
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

    if (!form.uname) {
      err.uname = "UserName is Required!";
    }
    if (!form.email) {
      err.email = "Email is Required!";
    }
    if (!form.phone) {
      err.phone = "phone is Required!";
    }
    if (!form.password) {
      err.password = "password is Required!";
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
                errors.uname
                  ? { content: "Please Enter username", pointing: "below" }
                  : null
              }
              label="Username"
              placeholder="Enter Name"
              name="uname"
              value={form.uname}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.email
                  ? { content: "Please Enter email", pointing: "below" }
                  : null
              }
              label="Email"
              placeholder="Enter Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.phone
                  ? { content: "Please Enter Phone number", pointing: "below" }
                  : null
              }
              label="Phone"
              placeholder="Enter Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.password
                  ? { content: "Please Enter Password", pointing: "below" }
                  : null
              }
              label="Password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={form.password}
              type="password"
            />
            <Button class="login" type="submit" color="green">
              Update
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

EditRegister.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/registers/${id}`);
  const { data } = await res.json();

  return { register: data };
};

export default EditRegister;
