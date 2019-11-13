/*
 * With ES6, it was introduced the concept of classes,
 * which allowed JavasCript to act in a more object-oriented way
 */
export class Fighter {
    constructor(name, fightingType) {
        this.name = name;
        this.fightingType = fightingType;
    }

    //you can add methods to your class
    attack(type = 'Light Punch') { //default parameter
        console.log(type);
    }


    //and also static functions that don't require instantiation
    static finisher(){
        return "launch finisher attack";
    }
}