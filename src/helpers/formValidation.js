export const rutValidation = (rut, body) => {
  /^[0-9]{8}-[0-9kK]{1}$/i.test(rut)
    ? (body.rut.error = false)
    : (body.rut.error = true);

  return body;
};
export const nameValidation = (name, body) => {
  /^[aA-zZ]{2,25}$/i.test(name)
    ? (body.nombre.error = false)
    : (body.nombre.error = true);

  return body;
};
export const lastValidation = (last, body) => {
  /^[aA-zZ]{2,25}$/i.test(last)
    ? (body.ape_paterno.error = false)
    : (body.ape_paterno.error = true);

  return body;
};
export const lastMValidation = (lastM, body) => {
  /^[aA-zZ]{2,25}$/i.test(lastM)
    ? (body.ape_materno.error = false)
    : (body.ape_materno.error = true);

  return body;
};
export const emailValidation = (email, body) => {
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)
    ? (body.email.error = false)
    : (body.email.error = true);

  return body;
};
export const addressValidation = (addres, body) => {
  /^[aA-zZ 0-9]{2,25}$/i.test(addres)
    ? (body.direccion.error = false)
    : (body.direccion.error = true);

  return body;
};

const formValidation = (e, data) => {
  const { rut, firstName, lastName, lastNameM, email, address } = e.target;

  /^[0-9]{8}-[0-9kK]{1}$/i.test(rut.value)
    ? (data.rut.value = rut.value)
    : (data.rut.error = true);
  /^[aA-zZ]{2,25}$/i.test(firstName.value)
    ? (data.nombre.value = firstName.value)
    : (data.nombre.error = true);
  /^[aA-zZ]{2,25}$/i.test(lastName.value)
    ? (data.ape_paterno.value = lastName.value)
    : (data.ape_paterno.error = true);
  /^[aA-zZ]{2,25}$/i.test(lastNameM.value)
    ? (data.ape_materno.value = lastNameM.value)
    : (data.ape_materno.error = true);
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email.value)
    ? (data.email.value = email.value)
    : (data.email.error = true);
  /^[aA-zZ 0-9]{2,25}$/i.test(address.value)
    ? (data.direccion.value = address.value)
    : (data.direccion.error = true);

  return data;
};

export const jsonPostFormat = (body) => {
  body = {
    rut: body.rut.value,
    nombre: body.nombre.value,
    ape_paterno: body.ape_paterno.value,
    ape_materno: body.ape_materno.value,
    email: body.email.value,
    direccion: body.direccion.value,
  };
  return body;
};

export default formValidation;
