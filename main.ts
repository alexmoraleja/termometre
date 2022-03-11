input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("Celsius")
    basic.showString("" + (input.temperature()))
    basic.showString("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("Jaqueta fora!")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        serial.writeLine("Agafa jaqueta o et congeles!")
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Happy)
    } else {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Sad)
    }
})
