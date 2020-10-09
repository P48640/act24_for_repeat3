input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . #
            . # . . #
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    basic.pause(500)
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 5; x++) {
        let y = 0
        led.plot(x, y)
        basic.pause(200)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showNumber(counter)
        basic.showIcon(IconNames.Surprised)
        basic.clearScreen()
    }
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
