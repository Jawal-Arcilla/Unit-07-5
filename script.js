document.getElementById('button').addEventListener('click', check)

let userInput = 0
let day = 'Monday'

function check () {
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)
  day = document.getElementById('day').value
  day = parseInt(day)

  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' | (userInput >5 & userInput <18))) {
    document.getElementById('answer').innerHTML = 'Time to go to school'
  } else if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' | (userInput >18)) {
    document.getElementById('answer').innerHTML = 'Time to go to work'
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend'
  }
}