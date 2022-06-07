let appliesToMass = false;
const states = []
for(const s of states) {
    if(s === "MA") {
        appliesToMass = true;
    }
}
appliesToMass = states.includes("MA")