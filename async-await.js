/*
 * Sorry I won't be able to apply a 
 * King of fighters example on this one 
 */

 const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

 async function getTop100Campers(){
     const response = await fetch(apiUrl);
     const json = await response.json();

     console.log(json[0]);
 }

 getTop100Campers();