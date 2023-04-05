// code your solution here
function saturdayFun(name = 'roller-skate') {
    return `This Saturday, I want to ${name}!`
    
}

saturdayFun()

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// function wrapAdjective(value) {
//     if (value === '*'){
//         let emphatic = "a hard worker"
//         console.log(`You are ${value}${emphatic}${value}!`)   // You are *a hard worker*!
//     } else if (value === '||'){
//         let emphatic = "a dedicated programmer"
//         console.log(`You are ${value}${emphatic}${value}!`) // "You are ||a dedicated programmer||!"
//                                                             // You are ||a dedicated programmer||!
//     }
    
// }
// wrapAdjective('||')


function wrapAdjective(symbol = "*") {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`
    }
  }