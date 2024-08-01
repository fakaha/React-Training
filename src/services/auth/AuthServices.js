import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post(`${process.env.REACT_APP_SERVER}api/v1/auth/login`, data)
    .then((res) => {
      callback(true, res.data.data);      
    })
    .catch((err) => {
        callback(false, err)      
    });
};

export const getUsername = (token) => {
    if(!token) return ' ';
    const decoded = jwtDecode(token)
    console.log(decoded);
    return decoded.name;
}