const user = {
  name: 'Kayo Renato',
  transactions: [],
  balance: 0
}

//  cretid or debit 
function createTransaction(op) {
  if (op.type === 'credit') {
    user.transactions.push(op)
    user.balance += op.value;
  } else if (op.type === 'debit') {
    user.transactions.push(op)
    user.balance -= op.value;
  }

}

function getHigherTransactionByType(typeOp) {
  let higherTransaction
  let maxOP = 0;
  user.transactions.filter(item => {
    if (item.type === typeOp) {
      if (item.value > maxOP) {
        maxOP = item.value
        higherTransaction = item
      }
    }
  })
  return console.log(`The maximus value of transaction "${typeOp}" has R$ ${maxOP.toFixed(2)}.`, higherTransaction)
}

function getAveregeTransactionValue() {
  let aver = 0
  user.transactions.map(item => aver += item.value);
  return console.log(aver / user.transactions.length)
}

function getTransactionsCount() {
  const transCount = {
    credit: 0,
    debit: 0
  }
  user.transactions.map(item => {
    if (item.type === 'credit') {
      transCount.credit++
    } else {
      transCount.debit++
    }
  })
  return console.log(transCount)
}

console.log(user)

op1 = {
  type: 'credit',
  value: 50.5
}

createTransaction(op1)
console.log(user)

op2 = {
  type: 'debit',
  value: 30.5
}

createTransaction(op2)
console.log(user)

op3 = {
  type: 'debit',
  value: 20.7
}

createTransaction(op3)
console.log(user)

op4 = {
  type: 'err',
  value: 1020.7
}

createTransaction(op4)
console.log(user)

op5 = {
  type: 'credit',
  value: 100.10
}

createTransaction(op5)
console.log(user)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAveregeTransactionValue()
getTransactionsCount()