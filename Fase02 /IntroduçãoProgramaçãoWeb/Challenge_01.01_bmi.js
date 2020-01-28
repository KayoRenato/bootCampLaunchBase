const name = 'kayo';
const weight = 58;
const height = 1.71;

IMC = weight / (height * height);

IMC >= 30 ? console.log(`${name} você está acima do peso.`) :  console.log(`${name} você não está acima do peso.`)
