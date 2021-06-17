//login component
import Input from "../components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>users List next app</title>
        <meta name="description" content="App for displaying user informations & statistics"></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <form className="login-form  m-auto ">
        <div>
          <img
            src="/static/logo.png"
            alt="logo"
            height="90px"
            width="100%"
          ></img>
        </div>
        <div>
          <h1 className="text-center mb-2">Login</h1>
          <Input placeholder="Email" type="text" />
          <Input placeholder="Password" type="password" className="mb-3" />
          <Button text="login" className="d-flex m-auto" />
        </div>
        <style jsx>{`
          .login-form {
            border: 1px solid #000;
            padding: 30px;
            width: 30%;
            border-radius: 10px;
            margin-top: 100px !important;
          }
        `}</style>
      </form>
    </>
  );
};

export default index;
