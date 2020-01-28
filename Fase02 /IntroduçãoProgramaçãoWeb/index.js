const classA = [
  {
    name: 'Mayk',
    grade: 9.7
  },
  {
    name: 'Kayo',
    grade: 6.2
  },
  {
    name: 'Kassio',
    grade: 7.8
  }
]

const classB = [
  {
    name: 'Joao',
    grade: 4.7
  },
  {
    name: 'Zezinho',
    grade: 5.2
  },
  {
    name: 'Julia',
    grade: 3.8
  }
]

function calcAverage(classColege) {
  let sum = 0
  classColege.forEach(item => sum += item.grade)
  return (sum / classColege.length)
}

function checkAprov(choiceClasse) {
  choiceClasse.map(item => {
    if (item.grade <= 5) {
      item.status = 'disapproved'
      console.log(`${item.name} has ${item.status}!`)
    } else if (item.grade >= 7) {
      item.status = 'approved'
    } else {
      item.status = 'recovery'
    }
  });
}

function sendMsgStudDisapp(choiceClasse) {
  choiceClasse.map(item => {
    if (item.status === 'disapproved')
      return console.log(`The student ${item.name} was disapproved as grade: ${item.grade}!`)
  })
}

function sendMsg(choiceClasse, nameClass) {
  console.table(choiceClasse)
  checkAprov(choiceClasse)
  console.table(choiceClasse)
  average = calcAverage(choiceClasse)
  average > 5 ? console.log(`Congratulation! The Class average: ${average}`, ` - ${nameClass}`) : console.log(`The Class average is lower 5! Average: ${average}`, ` - ${nameClass}`)
  sendMsgStudDisapp(choiceClasse)
}


sendMsg(classA, 'Class A')
sendMsg(classB, 'Class B')
