const makestruppercase=(String)=>{
    return String.toUpperCase();
};

const makestrlowercase=(String)=>{
    return String.toLowerCase();
};

const passuserinput=(input, callback) =>{
    input="Hello "+ input;
    return callback(input)
}

console.log(passuserinput("IIMS",makestrlowercase))
console.log(passuserinput("iims",makestruppercase))
