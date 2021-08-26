import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";
import useStyles from "../../hooks/useStyles";
import formValidation, {
  addressValidation,
  emailValidation,
  jsonPostFormat,
  lastMValidation,
  lastValidation,
  nameValidation,
  rutValidation,
} from "../../helpers/formValidation";
import { Collapse } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

<Copyright />;

const Form = () => {
  let data = {
    rut: { value: null, error: false },
    nombre: { value: null, error: false },
    ape_paterno: { value: null, error: false },
    ape_materno: { value: null, error: false },
    email: { value: null, error: false },
    direccion: { value: null, error: false },
  };

  const [rutError, setRutError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [paternoError, setPaternoError] = useState(false);
  const [maternoError, setMaternoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const setError = (data) => {
    setRutError(data.rut.error);
    setNameError(data.nombre.error);
    setPaternoError(data.ape_paterno.error);
    setMaternoError(data.ape_materno.error);
    setEmailError(data.email.error);
    setAddressError(data.direccion.error);
  };

  const rutStateChange = (e) => {
    data = rutValidation(e.target.value, data);
    setError(data);
  };
  const nameStateChange = (e) => {
    data = nameValidation(e.target.value, data);
    setError(data);
  };
  const lastStateChange = (e) => {
    data = lastValidation(e.target.value, data);
    setError(data);
  };
  const lastMStateChange = (e) => {
    data = lastMValidation(e.target.value, data);
    setError(data);
  };
  const emailStateChange = (e) => {
    data = emailValidation(e.target.value, data);
    setError(data);
  };
  const addressStateChange = (e) => {
    data = addressValidation(e.target.value, data);
    setError(data);
  };

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    data = formValidation(e, data);

    if (data.rut.error ) {
      setError(data);
    }
    if (data.nombre.error ) {
      setError(data);
    }
    if (data.ape_paterno.error ) {
      setError(data);
    }
    if (data.ape_materno.error ) {
      setError(data);
    }
    if (data.email.error ) {
      setError(data);
    }
    if (data.direccion.error ) {
      setError(data);
    } else {
      setError(data);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: jsonPostFormat(data) }),
      };
      fetch("https://reqres.in/api/posts", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data.body));
    }
  };

  const maxLenght = (i, limit) =>
    (i.target.value = i.target.value.toString().slice(0, limit));

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Registrar Paciente
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                error={rutError}
                onBlur={(e) => {
                  rutStateChange(e);
                }}
                name="rut"
                variant="outlined"
                required
                fullWidth
                id="rut"
                label="RUT xxxxxxxx-x"
                autoFocus
                onInput={(i) => maxLenght(i, 11)}
              />
              <Collapse in={rutError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                error={nameError}
                onBlur={(e) => {
                  nameStateChange(e);
                }}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primer nombre"
                onInput={(i) => maxLenght(i, 25)}
              />
              <Collapse in={nameError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={paternoError}
                onBlur={(e) => {
                  lastStateChange(e);
                }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido paterno"
                name="lastName"
                onInput={(i) => maxLenght(i, 25)}
              />
              <Collapse in={paternoError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={maternoError}
                onBlur={(e) => {
                  lastMStateChange(e);
                }}
                variant="outlined"
                required
                fullWidth
                id="lastNameM"
                label="Apellido materno"
                name="lastNameM"
                onInput={(i) => maxLenght(i, 25)}
              />
              <Collapse in={maternoError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailError}
                onBlur={(e) => {
                  emailStateChange(e);
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo "
                name="email"
                autoComplete="email"
                onInput={(i) => maxLenght(i, 50)}
              />
              <Collapse in={emailError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={addressError}
                onBlur={(e) => {
                  addressStateChange(e);
                }}
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Direccion "
                name="address"
                autoComplete="address"
                onInput={(i) => maxLenght(i, 30)}
              />
              <Collapse in={addressError}>
                <Alert severity="warning">revisa el campo</Alert>
              </Collapse>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Form;
