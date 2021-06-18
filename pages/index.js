//login component
import Input from "../components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeLoginData } from "../redux/login/actions"

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };
  const handleSubmit = preventDefault(() => {
    const { password , email } = state;
    if(email.value && password.value && !password.err &&!email.err){
      dispatch(storeLoginData({
        email:email.value,
        password: password.value
      }))
      router.push({
        pathname: "/home",
      });
    }
  });
  const [state, setState] = useState({
    email: {
      value: "",
      err: "",
    },
    password: {
      value: "",
      err: "",
    },
  });
  const setValidations = (e, name) => {
    if (e.target.value === "") {
      setState({
        ...state,
        [name]: {
          value: e.target.value,
          err: "This field is required",
        },
      });
    } else {
      if (name === "email") {
        const isValidEmail = validateEmail(e.target.value);
        setState({
          ...state,
          [name]: {
            value: e.target.value,
            err: !isValidEmail ? "Invalid email" : "",
          },
        });
      } else {
        setState({
          ...state,
          [name]: {
            value: e.target.value,
            err: "",
          },
        });
      }
    }
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const onInputChange = (e, name) => {
    setState({
      ...state,
      [name]: {
        ...state[name],
        value: e.target.value,
      },
    });
    setValidations(e, name);
  };
  const { password , email } = state;
  return (
    <>
      <Head>
        <title>users List next app</title>
        <meta
          name="description"
          content="App for displaying user informations & statistics"
        ></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <form
        className="login-form m-auto"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
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
          <Input
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            onChange={(e) => onInputChange(e, "email")}
            error={state.email.err}
          />
          <Input
            placeholder="Password"
            id="Password"
            name="Password"
            type="password"
            className="mb-3"
            error={state.password.err}
            onChange={(e) => onInputChange(e, "password")}
          />
          <Button text="login" className="d-flex m-auto mt-1" type="submit" disabled={!(email.value && password.value && !password.err &&!email.err)} />
          {!(email.value && password.value && !password.err &&!email.err) && <small className="text-muted"> fill valid data to be able to login</small>}
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
