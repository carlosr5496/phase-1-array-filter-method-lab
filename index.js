// Code your solution here

// function filter(collection,cb){
//     const newDrivers = [];
//     for(const user of collection) {
//         if(cb(user)) {
//             newDrivers.push(user);
//         }
//     }
// }

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

function findMatching(array, string) {
    const result = array.filter(match => match.toLowerCase() === string.toLowerCase());
    return result
}

function fuzzyMatch(array,string) {
    const result = array.filter(match => match.charAt(0) === string.charAt(0));
    return result
}

function matchName(array,string) {
    const result = array.filter(match => match.name === string)
    return result
}
