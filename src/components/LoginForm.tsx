import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassord] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <h1>LoginForm</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassord(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={() => {
          console.log("login btn");
          store.login(email, password);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
            console.log("reg btn");
          store.registration(email, password);
        }}
      >
        Register
      </button>
    </div>
  );
};

export default observer(LoginForm);
