function examplefunction(firstname,lastname)
{
    return(firstname+' '+lastname)
}

console.log(examplefunction("i","j"))

let person = 
{
    firstname: "Sushaan",
    lastname: "Maharjan",
    age: 21,
    address: "Kathmandu",
    getAge: function(){
        return this.age
    },
    fullname: function(){
        return this.firstname+" "+this.lastname;
    }
    
}
console.log(person.fullname())
console.log(person.getage())