import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import CryptoJS from "crypto-js";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    // lógica de autenticación
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    navigate('/solution-generation', {
			replace: true,
			state: {
				logged: true,
				name: userData?.username,
			},
		});
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
