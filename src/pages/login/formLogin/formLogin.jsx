import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./formLogin.css";

import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const VALID_PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/;

const schema = Yup.object().shape({
  username: Yup.string().required("Nombre de usuario es obligatorio"),
  //password: Yup.string().required('Contraseña es obligatoria'),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña no debe superar los 20 caracteres")
    .required("Contraseña es obligatoria")
    .matches(
      VALID_PASSWORD_REGEX,
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
    ),
});

const FormLogin = ({ onSearch, recoverPassword }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onSearch(data);
    reset();
  };

  return (
    <Container className="container" component="main" maxWidth="xs">
      <Paper elevation={3} className="paper">
        <LockIcon style={{ marginRight: "8px" }} />
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <TextField
            {...register("username")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de usuario"
            autoComplete="username"
            error={!!errors.username}
            helperText={errors.username?.message}
            className="textField"
          />

          <TextField
            {...register("password")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password?.message}
            className="textField"
          />

          <div className="buttonsContainer">
            <Button
              onClick={recoverPassword}
              variant="contained"
              className="recoverButton"
              startIcon={<MailOutlineIcon />}
            >
              Recuperar Contraseña
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="loginButton"
              startIcon={<VpnKeyIcon />}
            >
              Ingresar
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

FormLogin.propTypes = {
  onSearch: PropTypes.func,
  recoverPassword: PropTypes.func,
};

export default FormLogin;
