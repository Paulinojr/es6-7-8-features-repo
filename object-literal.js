function fighterRegistering(name, fightingType){

    /*
     * you don't need to pass the argument on the object like "name: name"
     * or "fightingType: fightingType", 
     * it does the assumption by itself.
     */
    const newFighter = { name, fightingType };

    /*
     * Returns: Object {name: "Athena Asamiya", fightingType: "Psychic powers"}
     */

     console.log(newFighter);
};

fighterRegistering('Athena Asamiya', 'Psychic powers');