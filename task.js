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
getthirdpartyapi().then((result)=>{
  console.log(result)
  const result1=result
    })
  .catch((error) => console.log(error))
  

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const result = result1.find((user, index) => {
      return user.id === id;
    });
    resolve(result)
    });

  getUserById(1)
    .then((user) => {
      if (user.id===id){
        console.log(result1[0])
      }
    })
    .catch((err) => console.log("Error:", err));
  }