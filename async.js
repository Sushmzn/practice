const users=[
    {
        id:1,
        name:'john'
    },
    {
        id:2,
        name:'Sara'
    }
]
const getuserbyid = async(id) =>{
//   const newuserarray = users.filter(user, index) => {
//     return user.id===id
//    };
//let founduser=null;
//console.log(users)
//for (const user of users){
//    if (user.id===id){
//        founduser=user
//    }
//}
//console.log(founduser)    
//}
//getuserbyid(1);

const result=users.find((user,index)=>{
    return user.id===id;
})
return result;
};                                      