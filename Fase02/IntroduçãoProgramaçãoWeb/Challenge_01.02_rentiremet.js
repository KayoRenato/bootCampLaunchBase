const name = 'Kayo', sex =  'M';
const age = 32, tribute = 12;

if(sex === 'M') {
  if(tribute >= 35 || (age+tribute) >= 95){
    console.log(`${name}, você pode se aposentar!`)
  } else {
    console.log(`${name}, você ainda não pode se aposentar!`)
  }
} else if (sex === 'F') {
  if(tribute >= 30 || (age+tribute) >= 85){
    console.log(`${name}, você pode se aposentar!`)
  } else {
    console.log(`${name}, você ainda não pode se aposentar!`)
  }
}
