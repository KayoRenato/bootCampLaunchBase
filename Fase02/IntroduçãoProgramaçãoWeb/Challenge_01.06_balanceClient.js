const users = [
  {
    name: 'Salvio',
    revenue: [115.3, 48.7, 98.3, 14.5],
    cost: [85.3, 13.5, 19.9]
  },
  {
    name: 'Marcio',
    revenue: [24.6, 214.3, 45.3],
    cost: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lucia',
    revenue: [9.8, 120.3, 340.2, 45.3],
    cost: [450.2, 29.9]
  }
]


function calcBalance(rev, cos){
  let pos = rev.reduce((accum, curValue) => accum + curValue)
  let neg = cos.reduce((accum, curValue) => accum + curValue)
  return (pos-neg)
}


function statusAcc (customer){
  customer.map(item => {
    let bal = calcBalance(item.revenue,item.cost)
    if (bal > 0){
      console.log(`The customer ${item.name} has POSITVE balance of R$ ${bal.toFixed(2)}.`)
    } else {
      console.log(`The customer ${item.name} has NEGATIVE balance of R$ ${bal.toFixed(2)}.`)
    }
  })
  
}

statusAcc(users)