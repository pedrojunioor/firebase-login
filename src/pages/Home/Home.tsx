import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/context";
import './Home.scss'

import { decrypt } from '../../utils/index'

export const Home = () => {

  const { handleLogout } = useContext(AuthContext)
  const user = decrypt(localStorage.getItem("user"), true);

  return (
    <div className="home-container">
      <h1>Seja bem vindo {user.displayName}</h1>
      <button onClick={e => handleLogout(e)}>LOGOUT</button>
    </div >
  )
}