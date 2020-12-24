import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


//initialze default settings
axios.defaults.baseURL = "";

//initialze the request and response interceptors
axios.interceptors.response.use(undefined, (error: any) => {
  //Handle network error
  if (error.message.include("Network Error") && !error.response) {
    console.log(
      "Network error. End-user is not connected to the internet or the api is not avilable or doesnt exists"
    );
  }

  //Handle requested resource is not found.
  if (error.status == "404") {
    console.log("API cannot find the requested resource");
  }

  //Handle authentication error
  if (error.status === "401") {
    console.log("User is unauthorized");
  }

  //Handle server error

  if (error.status === "500") {
    console.log("Server error");
  }

  throw error.response;
});

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    const token = window.localStorage.getItem("jwt");
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);




const responseBody = (response: AxiosResponse) => response.data;
export const  requests = {
    get : (path:string)=>axios.get(path).then(responseBody),
    post : (path:string,body:{}) => axios.post(path, body).then(responseBody),
    put : (path:string,body:{}) => axios.put(path, body).then(responseBody),
    del : (path:string) => axios.delete(path).then(responseBody),

}
