const personalInformation = {
    firstName: 'Mai',
    lastName: 'Shiranui',
    birthplace: 'Japan',
    age: '23'
};

//you can destructure objects and get only the info you want to
const { lastName: ln, firstName: fn } = personalInformation;

/*
* Returns: Shiranui Mai
*/
console.log(`${ln} ${fn}`);