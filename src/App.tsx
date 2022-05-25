import React, { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "./index";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
  const { store } = useContext(Context);
  //TODO разобраться с типом для useState<IUser[]>
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const getUsers = async () => {
    try {
      const res: any = await UserService.fetchUsers();
      setUsers(res.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  if (store.isLoading) {
    return <div>Загрузка ...</div>;
  }

  if (!store.isAuth) {
    return (
      <>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
        <LoginForm />
        <div>
          <button onClick={() => getUsers()}>Show users</button>
          {users.map((user: any) => (
            <div key={user.email}>{user.email}</div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <h1>
        {store.isAuth
          ? `Пользователь авторизован: ${store.user.email} `
          : `Требуется авторизация`}
      </h1>
      <h1>
        {store.user.isActivated ? "Аккаунт автивирован" : "Требуется активация"}
      </h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <div>
        <button onClick={() => getUsers()}>Show users</button>
        {users.map((user: any) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
