controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(drawSierpinskiTriangleAutomatically)) {
        DrawSierpinskiTriangle()
    }
})
function DrawSierpinskiTriangle () {
    x = [0]
    y = [0]
    for (let index = 0; index <= 999; index++) {
        z = randint(1, 3)
        if (z == 1) {
            x.push(1 / 2 * x[index])
            y.push(1 / 2 * y[index])
        }
        if (z == 2) {
            x.push(1 / 2 * x[index] + 1 / 2)
            y.push(1 / 2 * y[index])
        }
        if (z == 3) {
            x.push(1 / 2 * x[index] + 1 / 4)
            y.push(1 / 2 * y[index] + Math.sqrt(3) / 4)
        }
        // map (x,y) to pixel coordinates
        ix = x[index] * width
        iy = y[index] * height
        sierpinskiTriangle.setPixel(ix, iy, 7)
    }
}
let iy = 0
let ix = 0
let z = 0
let y: number[] = []
let x: number[] = []
let drawInterval = 0
let drawSierpinskiTriangleAutomatically = false
let sierpinskiTriangle: Image = null
let height = 0
let width = 0
width = 120
height = 120
sierpinskiTriangle = image.create(width, height)
let showSierpinskiTriangle = sprites.create(sierpinskiTriangle, SpriteKind.Player)
let defaultDrawInterval = 250
drawSierpinskiTriangleAutomatically = game.ask("Auto draw triangle?")
if (!(drawSierpinskiTriangleAutomatically)) {
    game.splash("Press A to draw Sierpinski triangle.")
} else {
    drawInterval = game.askForNumber("Draw how often (ms)?")
    if (drawInterval <= 0) {
        drawInterval = defaultDrawInterval
    }
}
game.onUpdateInterval(drawInterval, function () {
    if (drawSierpinskiTriangleAutomatically) {
        DrawSierpinskiTriangle()
    }
})
