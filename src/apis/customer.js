import axios from "./axios";

export const signInRequest = (email, password) => {
  return axios.get(`customer/SignIn?email=${email}&password=${password}`);
};

export const signUpRequest = (
  fName,
  lName,
  birthday,
  email,
  password,
  street,
  city,
  postalcode,
  country
) => {
  return axios.post(`customer/SignUp`, {
    FirstName: `${fName}`,
    LastName: `${lName}`,
    Birthday: birthday ? "" : null,
    Email: `${email}`,
    Password: `${password}`,
    Street: `${street}`,
    City: `${city}`,
    PostalCode: postalcode ? "" : null,
    Country: `${country}`,
  });
};

export const passwordReset = (email) => {
  return axios.patch(`/customer/password?email=${email}`);
};
