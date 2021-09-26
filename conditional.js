const age=25;
if (age<=20){
    console.log("You are in teen age.")
}
else if(age>20 && age<=29) 
{
    console.log("You are in your twenties.")
}
else
{
    console.log("You are old.")
}

let day='sunday';
switch(day)
{
    case'monday':
    console.log("It is monday")
    break;
    case'tuesday':
    console.log("It is tuesday")
    break;
    case'wednesday':
    console.log("It is wednesday")
    break;
    case'thursday':
    console.log("It is thursday")
    break;
    default:
    console.log("It is friday")

}

let c=0;
while(c<=10){
    console.log(c)
    c++
}
let todaydate=new Date();
console.count(todaydate);