import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const encryptPassword = (pass) => {
    let encrypt = CryptoJS.AES.encrypt(pass, "@encryptpass").toString();
    return encrypt;
  };

  /*const decryptPassword = (pass) => {
    let bytes = CryptoJS.AES.descrypt(pass, "@encryptpass");
    let descrypt = bytes.toString(CryptoJS.enc.Utf8);
    return descrypt;
  };*/

  const login = (userData) => {
    // lógica de autenticación
    // cifrado
    const pass = encryptPassword(userData?.password);
    const data = {username: userData?.username, password: pass}

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));

    navigate("/solution-generation", {
      replace: true,
      state: {
        logged: true,
        name: userData?.username,
      },
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    // Verificar si hay un usuario almacenado en el localStorage al cargar la aplicación
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return { user, login, logout };
};

export default useAuth;
