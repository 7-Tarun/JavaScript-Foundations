const pulls = [
    {name: "Cool Steel", rarity:3},
    {name: "Deluc", rarity:5},
    {name: "Black Teaser", rarity:3},
    {name: "Zhongli", rarity:4},
    {name: "Debate", rarity:6},
];

const legendaryItems = pulls.filter(char => char.rarity === 5);

console.log(legendaryItems);

const [first] = legendaryItems;
const {name} = first;

console.log(`Congratulations you got ${name}`);