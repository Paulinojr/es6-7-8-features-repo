//you can go index by index creating variables for each value on the array
let [fighter1, fighter2, fighter3] = ['Kyo Kusanagi', 'Goro Daimon', 'King'];

/*
* Returns: Kyo Kusanagi Goro Daimon King 
*/
console.log(fighter1, fighter2, fighter3);

//this creates pointers to the array too, so you can replace variable values like this:
fighter1 = 'Iori Yagami';

/*
* Returns: Iori Yagami
*/
console.log(fighter1);
