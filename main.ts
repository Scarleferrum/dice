let dice1 = 0
let dice2 = 0
let dice3 = 0
let dice4 = 0
input.onGesture(Gesture.Shake, function () {
    dice1 = randint(1, 6)
    dice2 = randint(1, 6)
    dice3 = randint(1, 6)
    dice4 = dice1 + dice2
    basic.showNumber(dice3 + dice4)
})
input.onGesture(Gesture.SixG, function () {
    dice3 = randint(1, 6)
    if (dice3 == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (dice3 == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (dice3 == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (dice3 == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (dice3 == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
