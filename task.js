const request = require("request");
const getthirdpartyapi = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            data: body,
          });
        }
      );
    });
  };
  
 Promise.all([getthirdpartyapi(1)])
 .then((result) => console.log(result))
 .catch((error) => console.log(error));