// Arrow function :

function sum1(a,b)
{
    
}
// arrow operator
const sum=()=>{
    let a=10,b=5;
    let total = a +b;
    console.log(total);
    return `The total is : ${total}`
}

//console.log(sum());


// for loop :
// for(starting,ending, increment){}

//For Each Loop :
fruits = ["apple","cherry","mango"];

// fruits.forEach((value, index, array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });

async function getEmployeeData()
{
    try
    {
        let res = await fetch("https://date.nager.at/api/v2/publicholidays/2020/US");
        
        console.log("First : ");
        console.log(res);

        console.log("2nd : ");
        data = await res.json();
        console.log(data);

        return data;

    }
    catch(error)
    {
        console.log(error);
    }
}

getEmployeeData();

async function displayEmployeeData()
{
    let holidays = await getEmployeeData();

    console.log("Holidays data : ");
    console.log(holidays);

    let html="";

    holidays.forEach((holiday,index) =>{
        console.log("Holiday value");
        console.log(holiday);
        console.log(index);

        let htmlElement = `<h3> Holiday Date : ${holiday.date} </h3>
        <h3> Holiday Name : ${holiday.localName} </h3>
        <h3> Holiday Type : ${holiday.type} </h3>`;

        //html = html + htmlElement;
        html += htmlElement;
    });

    let container = document.getElementById("container");
    container.innerHTML =  html; 
}

displayEmployeeData();









