import Header from "../../shared/header/header";
import FormLogin from "./formLogin/formLogin";

const handleSearch = (filters) => {
  console.log("Filtros ->", filters);

  //Si todo fue bien te lleva a la siguiente ventana
  window.location.href = "/solution-generation";
};

const recoverPassword = () => {
  console.log("Entro a Recuperar contraseña");

  window.location.href = "/reset-password";
};

export const Login = () => {
  return (
    <div>
      <Header></Header>
      <FormLogin
        onSearch={(filters) => handleSearch(filters)}
        recoverPassword={recoverPassword}
      ></FormLogin>
    </div>
  );
};
