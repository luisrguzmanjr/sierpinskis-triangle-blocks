def on_a_pressed():
    if not (drawSierpinskiTriangleAutomatically):
        DrawSierpinskiTriangle()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def DrawSierpinskiTriangle():
    global x, y, z, ix, iy
    x = [0]
    y = [0]
    for index in range(1000):
        z = randint(1, 3)
        if z == 1:
            x.append(1 / 2 * x[index])
            y.append(1 / 2 * y[index])
        if z == 2:
            x.append(1 / 2 * x[index] + 1 / 2)
            y.append(1 / 2 * y[index])
        if z == 3:
            x.append(1 / 2 * x[index] + 1 / 4)
            y.append(1 / 2 * y[index] + Math.sqrt(3) / 4)
        # map (x,y) to pixel coordinates
        ix = x[index] * width
        iy = y[index] * height
        sierpinskiTriangle.set_pixel(ix, iy, 7)
iy = 0
ix = 0
z = 0
y: List[number] = []
x: List[number] = []
drawInterval = 0
drawSierpinskiTriangleAutomatically = False
sierpinskiTriangle: Image = None
height = 0
width = 0
width = 120
height = 120
sierpinskiTriangle = image.create(width, height)
showSierpinskiTriangle = sprites.create(sierpinskiTriangle, SpriteKind.player)
defaultDrawInterval = 250
drawSierpinskiTriangleAutomatically = game.ask("Auto draw triangle?")
if not (drawSierpinskiTriangleAutomatically):
    game.splash("Press A to draw Sierpinski triangle.")
else:
    drawInterval = game.ask_for_number("Draw how often (ms)?")
    if drawInterval <= 0:
        drawInterval = defaultDrawInterval

def on_update_interval():
    if drawSierpinskiTriangleAutomatically:
        DrawSierpinskiTriangle()
game.on_update_interval(drawInterval, on_update_interval)
