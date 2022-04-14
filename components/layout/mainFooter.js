import Link from "next/link";

function MainFooter() {
  return (
    <>
      {/*  FOOTER START */}

      <div className="footer">
        <div className="inner-footer">
          {/*  for Amrit-Raj and description */}
          <div className="footer-items">
            <h1>Amrit-Raj</h1>
            <p>FrontEnd Developer.</p>
          </div>

          {/*  for quick links  */}
          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div> {/*for the underline */}
            <ul>
              <Link href="#">
                <a>
                  <li>About</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Projects</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Github</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Contact</li>
                </a>
              </Link>
            </ul>
          </div>

          {/*  for some other links */}
          <div className="footer-items">
            <h3>Blogs</h3>
            <div className="border1"></div> {/*for the underline */}
            <ul>
              <Link href="#">
                <a>
                  <li>Blog1</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Blog2</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Blog3</li>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <li>Blog4</li>
                </a>
              </Link>
            </ul>
          </div>

          {/*  for contact us info */}
          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>123456789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                xyz@gmail.com
              </li>
            </ul>

            {/*   for social links */}
            <div className="social-media">
              <Link href="#">
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <i className="fab fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <i className="fab fa-google-plus-square"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/*   Footer Bottom start  */}
        <div className="footer-bottom">Copyright &copy; Amrit-Raj.</div>
      </div>

      {/*   Footer Bottom end */}

      {/*   FOOTER END */}
    </>
  );
}

export default MainFooter;
