let arr=[
        {id:1,name:"john",age:"18",profession:"developer"},
        {id:2, name:"jack",age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19",profession:"admin"}
];
arr.map(PrintDeveloperSwitchMap);
function PrintDeveloperSwitchMap(arritem){
    if(arritem.profession==="developer"){
        console.log(arritem);
    }
}
function PrintDeveloperbyForEach(){

}
function addData(){
    let newObj = {id:4,name:"sumit",age:23,profession:"Developer"}
    arr.push(newObj);
    console.log(arr);
}

function removeAdmin(){
    arr.remove[2]
    console.log(arr)
}

function concatenateArray() {
  arr.concat({id:1,name:"john",age:"18",profession:"developer"},
        {id:2, name:"jack",age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19",profession:"admin"})
console.log(arr.concat);
}
