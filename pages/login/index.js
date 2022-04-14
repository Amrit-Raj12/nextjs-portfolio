import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";
import { signIn, signOut, useSession, getSession } from "next-auth/client";

function Login() {
  const [session, loading] = useSession();

  return (
    <>
      <div className="Lcontent">
        <div className="Lflex-div">
          <div className="Lname-content">
            <h1 className="Llogo">Login</h1>
            <p>Connect with friends and the world around you on our App.</p>
          </div>
          <form className="Lform">
            <input type="email" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button className="Llogin">Log In</button>
            <a href="#">Forgot Password ?</a>

            <div className="Llogin_with">
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
              {/* <Link href="/api/auth/signin">
                <Button
                  color="gray"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  <Icon name="github" /> Login with Github
                </Button>
              </Link> */}
            </div>
            <hr />
            <Link href="/register">
              <button className="Lcreate-account">Create New Account</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: `${process.env.BASE_URL}`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "List of 100 personalized blog" : "List of free blogs",
    },
  };
}
