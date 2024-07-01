import axios from 'axios';

const SampleUrl = 'https://social-media-host-backends.vercel.app';

// Axios instance with basic configuration
export const basicRequest = axios.create({
  baseURL: SampleUrl,
  timeout: 10000, // Example timeout configuration (adjust as needed)
});

// Axios instance with token-based authentication
const persistedLoginData = localStorage.getItem("persist:logindata");
const loginData = persistedLoginData ? JSON.parse(persistedLoginData) : {};
const loginInfo = loginData.userlogin ? JSON.parse(loginData.userlogin).LoginInfo[0] : null;
const AdminloginInfo = loginData.adminLogin ? JSON.parse(loginData.adminLogin).LoginInfo[0] : null;

const TOKEN = loginInfo ? loginInfo.Token : '';
const AdminToken = AdminloginInfo ? AdminloginInfo.Token : '';

export const TokenRequest = axios.create({
  baseURL: SampleUrl,
  headers: { Authorization: `Bearer ${TOKEN}` },
  timeout: 10000, // Example timeout configuration (adjust as needed)
});

export const AdminTokenRequest = axios.create({
  baseURL: SampleUrl,
  headers: { Authorization: `Bearer ${AdminToken}` },
  timeout: 10000, // Example timeout configuration (adjust as needed)
});
