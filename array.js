let e=[1,2,3,4,5]
console.log(e.length)
console.log(e.length-1)

let ar1=[1,2]
let ar2=['apple','banana']
console.log(...ar1,...ar2)

let pushexample=['apple','banana']
pushexample.push("orange")
console.log(pushexample)

let popexample=['apple','banana','orange']
popexample.pop();
console.log(popexample)

let shiftexample=['apple','banana','orange']
shiftexample.shift();
console.log(shiftexample)

let unshiftexample=['apple','banana','orange']
unshiftexample.unshift('pomogranate');
console.log(unshiftexample)

//SLICE and SPLICE are different method!!!!!!!

//splice method //can remove items from array
let spliceexample=['apple','banana','orange']
spliceexample.splice(1,0,'avocado','pomogranate')//(index,numberofitems)
console.log(spliceexample)
spliceexample.splice(0,4)//removes 4 items from index 0
console.log(spliceexample)

//slice method
let sliceexample=['apple', 'avocado', 'pomogranate', 'banana', 'orange']
let newslice=sliceexample.slice(1,3)//slices from 1 index to 2(avocade and pomogranate)
console.log(newslice)