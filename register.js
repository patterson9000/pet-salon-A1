let petsalon ={
  name:"the fashion pet",
  address:"ave university 768",
  hours:{
      open:"9:00am",
      close:"6:00pm"

function displayInfo(){
    document.getElementById("info").innerHTML=`welcome to the ${petSalon.name} family. it is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
    
},
  pets:[
    {
      name:"scooby",
      age:50,
      breed:"Dane",
      gender:"male",
      service:"grooming",
      ownerName:"shaggy,
      contactPhone:xxxxxxxxxx
    },
    {
       name:"scrappy",
      age:40,
      breed:"mix",
      gender:"male",
      service:"vaccine",
      ownerName:"shaggy",
      contactPhone:xxxxxxxxx
    },
    {
       name:"speedy",
      age:80
      breed:"mix",
      gender:"male"
      service:"nails cut",
      ownerName:"bugs",
      contactPhone:xxxxxxxxx
      
       }
    ]
} 

console.log(petSalon.pets);
function displayInfo(){
    document.getElementById("info").innerHTML=`welcome to the ${petSalon.name} family. it is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
    
}
 
displayInfo();

