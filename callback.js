const makestruppercase=(String)=>{
    return String.toUpperCase();
};

const makestrlowercase=(String)=>{
    return String.toLowerCase();
};

const padstring=(String)=>{
    return string.padstart(10,"0")
}

const passuserinput=(input, callback) =>{
    input="Hello "+ input;
    return callback(input)
}

console.log(passuserinput("IIMS",makestrlowercase))
console.log(passuserinput("iims",makestruppercase))

//Single line arrow function
const add =(a,b) => a+b;

const sub =(a,b) => a-b;

const mul =(a,b) => a*b;

const callbackexample = (a,b,mathcallback) =>{
    console.log(mathcallback(a,b));
}
callbackexample(2,2,add);
callbackexample(2,2,sub);
callbackexample(2,2,mul);

