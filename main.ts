function Comete () {
    a = randint(0, 4)
    b = 0
    led.plot(a, b)
    while (b < 4) {
        basic.pause(500)
        led.unplot(a, b)
        b += 1
        led.plot(a, b)
    }
}
input.onButtonPressed(Button.A, function () {
    if (joueur > 0) {
        joueur += -1
        led.plot(joueur, 4)
        led.unplot(joueur + 1, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (joueur < 4) {
        joueur += 1
        led.plot(joueur, 4)
        led.unplot(joueur - 1, 4)
    }
})
let b = 0
let a = 0
let joueur = 0
joueur = 2
led.plot(joueur, 4)
let score = 0
basic.forever(function () {
    Comete()
    if (joueur == a) {
        score += 1
    } else if (joueur != a) {
        basic.showString("Score:")
        basic.showString("" + (score))
        basic.clearScreen()
        score = 0
        basic.pause(1000)
        led.plot(a, b)
    }
})
