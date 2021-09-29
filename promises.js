const gethello=()=>{
    return new Promise((resolve,reject) =>{
        reject("There was some error!!!");
    });
};

gethello()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error);
})