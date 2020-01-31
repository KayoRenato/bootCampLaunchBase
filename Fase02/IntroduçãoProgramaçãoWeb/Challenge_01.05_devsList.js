const devs = [
  {name: 'Kayo Renato', technologies: ['Python', ' JavaScript', ' NodeJS']},
  {name: 'Carlos', technologies: ['JavaScript', ' CSS']},
  {name: 'Julia', technologies: ['Java', ' HTML5', ' React']}
]

function sendMsg(users){
  users.map(item => console.log(`${item.name} works as ${item.technologies}.`))
}

function searchTech(users){
  users.map(item => {
    if (item.technologies.some(tec => tec.trim() === 'CSS')){
    return console.log(`The dev ${item.name} works com CSS.`) }
  })
}

sendMsg(devs)

searchTech(devs)
