import { Button, Icon, Form, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

function Register() {
  const [form, setForm] = useState({
    uname: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createRegister();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/registers", {
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
      err.phone = "Phone Number is Required!";
    }
    if (!form.password) {
      err.password = "Password is Required!";
    }
    if (!form.rePassword) {
      err.rePassword = "Re-Password is Required!";
    }

    return err;
  };

  return (
    <>
      <div class="content">
        <div class="flex-div">
          <div class="name-content">
            <h1 class="logo">Sign-UP</h1>
            <p>Connect with friends and the world around you on our App.</p>
          </div>
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
              type="password"
            />
            <Form.Input
              fluid
              error={
                errors.rePassword
                  ? { content: "Please Enter Re-Password", pointing: "below" }
                  : null
              }
              label="Re-Password"
              placeholder="Enter Re-Password"
              name="rePassword"
              onChange={handleChange}
              type="password"
            />
            <a>
              <span style={{ color: "#fff000" }}>Already Registered?</span>{" "}
              <Link href="/login">Login Here</Link>
            </a>
            <Button class="login" type="submit" color="green">
              Create
            </Button>
            {/* <input type="text" placeholder="name" required />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Re-Password" required />
            <button class="login">Register</button>

            <a>
              <span style={{ color: "#fff" }}>Already Registered?</span>{" "}
              <Link href="/login">Login Here</Link>
            </a> */}

            {/* <div className="login_with">
              <Link href="/api/auth/signin">
                <Button
                  color="google plus"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <Icon name="google plus" /> Login with Google
                </Button>
              </Link>
            </div> */}
          </Form>
        </div>
      </div>
    </>
  );
}
export default Register;
