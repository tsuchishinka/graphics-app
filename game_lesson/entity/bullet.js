class Bullet extends GameObject {
  color = 'black'
  shooterId = ""
  boundCount = 0

  constructor({
    posX,
    posY,
    angle,
    velX,
    velY,
    shooter
  }) {
    super({
      posX,
      posY,
      velX: 0.02  * Math.cos(angle) + (velX || 0),
      velY: 0.02 * Math.sin(angle) + (velY || 0),
      angle
    })
    this.shooter = shooter
    this.startTime = Date.now()
  }

  updatePosition(currentTime) {
    const elapsed = currentTime - this.startTime
    this.posX += this.velX * elapsed
    this.posY += this.velY * elapsed
  }

  draw(ctx) {
    this.updatePosition(Date.now())
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.posX, this.posY, 5, 0, 2 * Math.PI)
    ctx.fill()
  }
}