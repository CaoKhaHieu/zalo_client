import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import {
  getNewTokenRequest,
  logoutUserRequest,
} from "../redux/actions/UserAction";
import { useHistory } from "react-router-dom";
import { User } from "../types/UserType";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Contact from "../components/Contact/Contact";
import Chat from "../components/Chat/Chat";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tokenLocalStorage = localStorage.getItem("token");
  const refeshTokenLocalStorage = localStorage.getItem("refeshToken");

  const decoded: User = {
    _id: "",
    name: "",
    phone: "",
    password: "",
    token: "",
    refeshToken: "",
    otp: "",
  };
  const [user, setUser] = useState(decoded);
  const handleLogout = async () => {
    dispatch(logoutUserRequest());
    history.push("/login");
  };

  useEffect(() => {
    if (tokenLocalStorage === null || refeshTokenLocalStorage === null) {
      history.push("/login");
    } else {
      const token: string = tokenLocalStorage.slice(
        1,
        tokenLocalStorage.length - 1
      );
      const refeshToken: string = refeshTokenLocalStorage.slice(
        1,
        tokenLocalStorage.length - 1
      );
      const decoded: any = jwt_decode(token);
      setUser(decoded);
      if (decoded.exp < Date.now() / 1000) {
        dispatch(getNewTokenRequest({ refeshToken }));
      }
    }
  }, []);

  return (
    <div>
      {tokenLocalStorage && refeshTokenLocalStorage ? (
        <div style={{display: 'flex'}}>
          <NavBar></NavBar>
          <Contact></Contact>
          <Chat></Chat>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
