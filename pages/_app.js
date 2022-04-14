import "../styles/globals.css";
import "../styles/main-style.css";
import { Provider } from "next-auth/client";
import { Layout } from "antd";
import MainHeader from "../components/layout/mainHeader";
import "../components/layout/mainHeader.css";
import MainFooter from "../components/layout/mainFooter";
import "../components/layout/mainFooter.css";
import About from "./about";
import "../styles/loginStyle.css";

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Layout>
          <MainHeader />
          <Content>
            <Component {...pageProps} />
            {/* <About {...pageProps} /> */}
          </Content>
          <MainFooter />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
