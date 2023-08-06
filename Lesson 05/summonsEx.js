function summonCreature(creatureName, powerLevel) {
    let message = "Summoning " + creatureName + " with power level " + powerLevel;
    return message;
}

let enemy1 = "Odin";
let enemy2 = "Bahamut";
let summon1 = summonCreature("Ifrit", 1000);
let summon2 = summonCreature("Phoenix", 900);
console.log("Prepare for battle against " + enemy1 + " and " + enemy2);
console.log(summon1);
console.log(summon2);

