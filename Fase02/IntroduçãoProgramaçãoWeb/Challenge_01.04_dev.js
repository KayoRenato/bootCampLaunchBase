const dev = {
  name: 'Kayo',
  age: 32,
  technologies: [
    {
      name: 'Python',
      specialty: 'Data Science'
    },
    {
      name: 'JavaScript',
      specialty: 'Back-end'
    },
    {
      name: 'HTML5',
      specialty: 'Web'
    },
    {
      name: 'CSS',
      specialty: 'Web'
    },
    {
      name: 'NodeJS',
      specialty: 'Back-end'
    },
  ]
}

console.log(`The dev ${dev.name} has ${dev.age} ages and using the technology ${dev.technologies[0].name} as specialty in ${dev.technologies[0].specialty}.`)