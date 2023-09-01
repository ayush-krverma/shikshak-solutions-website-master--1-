const API_URL =
    document.domain === 'localhost'
        ? "http://localhost:4020/api-call/"
        : "https://shikshaksolutions.com/api-call/";


const Apis = {
  //Authentication api
  GetUserLogin: `${API_URL}/api/customer/login`,
  GetUserRegister: `${API_URL}/api/customer/register`,
  GetCustomerDetails: `${API_URL}/api/customer/getUserByEmailId?email=`,


};
export { API_URL, Apis };
