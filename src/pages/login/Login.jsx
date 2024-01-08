import Header from "../../shared/header/header";
import useAuth from "../../shared/hooks/useAuth";
import FormLogin from "./formLogin/formLogin";

export const Login = () => {
  const { login } = useAuth();

  const handleSearch = (data) => {
    login(data);
  };

  const recoverPassword = () => {
    console.log("Entro a Recuperar contraseña");
    window.location.href = "/reset-password";
  };

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
