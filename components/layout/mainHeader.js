import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function MainHeader() {
  const [session, loading] = useSession();

  return (
    <>
      <div className="Hnav">
        <input type="checkbox" id="Hnav-check" />
        <div className="Hnav-header">
          <div className="Hnav-title">Amrit-Raj</div>
        </div>
        <div className="Hnav-btn">
          <label htmlFor="Hnav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="Hnav-links">
          <a>{session && !loading ? session.user.name : ""}</a>

          {session && !loading ? (
            <Link href="/newHeading">
              <a>New Heading</a>
            </Link>
          ) : (
            ""
          )}

          <Link href="#abt">
            <a>About</a>
          </Link>
          <Link href="#">
            <a>Projects</a>
          </Link>
          <Link href="#">
            <a>Achivements</a>
          </Link>
          <Link href="#">
            <a>Blogs</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
          {!loading && !session && (
            <Link href="/login">
              <a>Sign-in</a>
            </Link>
          )}

          {session && (
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign-out
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MainHeader;
