// console.log("We're learning about objects!")

// const car = {
//     year: 2015,
//     make: "Ford",
//     model: "Mustang",
//     color: "Red",
// }

// const Animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// const mom = {
//     gender: "female",
//     age: "44",
// }

// const dad = {
//     gender: "female",
//     age: "49",
// }

// const sister = {
//     gender: "female",
//     age: "14",
// }

// const brother = {
//     gender: "male",
//     age: "20",
// }

// const familyMembers = [mom, dad, sister, brother,]

// console.log (
//     "familyMembers", familyMembers
// )

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50,
}

console.log("The wardrobe")
console.log("wardrobe height", wardrobe.height)
console.log("wardrobe depth", wardrobe.depth)
console.log("wardrobe width" ,wardrobe.width)
console.log("wardrobe manufacture", wardrobe.manufacturer)
console.log(wardrobe.contents[0], wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4],)


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.



console.log(`The empire state building is ${empireStateBuilding.height} high, stories= ${empireStateBuilding.stories}, squareFeet= ${empireStateBuilding.squareFeet}, eastWestLength= ${empireStateBuilding.eastWestLength}, northSouthLength= ${empireStateBuilding.northSouthLength}`)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.



const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

console.log(`The empire state building is at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[constructionKey]} by ${empireStateBuilding[architectKey]}. It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding[ownerKey]}`)