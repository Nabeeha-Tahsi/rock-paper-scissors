function play(userChoice){
   let userResult = document.querySelector('#userResult')
   let computerResult = document.querySelector('#computerResult')
   let result = document.querySelector('#result')

    let choices = ['rock', 'paper', 'sccisors']

    let computerChoice = choices[Math.floor(Math.random() * 3)]


    if (userChoice == computerChoice){
       userResult.innerHTML = `user choice is: ${userChoice}`
       computerResult.innerHTML = `computer choice is: ${computerChoice}`
       result.innerHTML = 'its a tie!'
       
    }
    else if(
        (userChoice == 'rock' &&  computerChoice == 'sccisors') ||
        (userChoice == 'paper' &&  computerChoice == 'rock') ||
        (userChoice == 'sccisor' &&  computerChoice == 'paper')
    ){
       userResult.innerHTML = `user choice is: ${userChoice}`
       computerResult.innerHTML = `computer choice is: ${computerChoice}`
       result.innerHTML = 'User won!'
    }
    else {
       userResult.innerHTML = `user choice is: ${userChoice}`
       computerResult.innerHTML = `computer choice is: ${computerChoice}`
       result.innerHTML = 'Computer won!'
    }   

}