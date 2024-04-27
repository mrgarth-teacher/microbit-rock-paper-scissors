function show_rock () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
}
function intro () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
}
// ROCK
input.onButtonPressed(Button.A, function () {
    show_rock()
    player_choice = 1
})
function show_scissors () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
        `)
}
function work_out_winner () {
    // PLAYER: 
    // 1 IS ROCK
    // 2 IS SCISSORS
    // ELSE IS SCISSORS
    if (player_choice == 1) {
        if (computer_choice == 1) {
            basic.showString("DRAW!")
        } else if (computer_choice == 2) {
            basic.showString("You LOSE")
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showString("You WIN!")
            basic.showIcon(IconNames.Happy)
        }
    } else if (player_choice == 2) {
        if (computer_choice == 1) {
            basic.showString("You WIN!")
            basic.showIcon(IconNames.Happy)
        } else if (computer_choice == 2) {
            basic.showString("DRAW!")
        } else {
            basic.showString("You LOSE")
            basic.showIcon(IconNames.Sad)
        }
    } else {
        if (computer_choice == 1) {
            basic.showString("You LOSE")
            basic.showIcon(IconNames.Sad)
        } else if (computer_choice == 2) {
            basic.showString("You WIN!")
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showString("DRAW!")
        }
    }
    basic.pause(2000)
    basic.clearScreen()
}
// PAPER
input.onButtonPressed(Button.B, function () {
    show_paper()
    player_choice = 2
})
function show_paper () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onGesture(Gesture.Shake, function () {
    intro()
    computer_choose()
    show_battle()
    work_out_winner()
})
// SCISSORS
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    show_scissors()
    player_choice = 3
})
function computer_choose () {
    // 1 = ROCK
    // 2 = PAPER
    // 3 = SCISSORS
    // 
    computer_choice = randint(1, 3)
}
function show_battle () {
    // SHOW PLAYER
    if (player_choice == 1) {
        show_rock()
    } else if (player_choice == 2) {
        show_paper()
    } else {
        show_scissors()
    }
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    // COMPUTER
    if (computer_choice == 1) {
        show_rock()
    } else if (computer_choice == 2) {
        show_paper()
    } else {
        show_scissors()
    }
    basic.pause(1000)
    basic.clearScreen()
}
let computer_choice = 0
let player_choice = 0
// 1 = ROCK
// 2 = PAPER
// 3 = SCISSORS
player_choice = randint(1, 3)
