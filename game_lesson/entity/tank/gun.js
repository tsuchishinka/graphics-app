const GUN_WIDTH = 6
const GUN_LENGTH = 20

class Gun {
  constructor(basePos) {
    this.width = GUN_WIDTH
    this.length = GUN_LENGTH
    this.basePos = basePos
  }

  shoot() {}

  render(ctx) {
    const g0 = {
      x: this.width / 2 + this.posX,
      y: this.height / 2 + this.posY,
    }
    const angle = this.gunAngle
    const g1 = {
      x: g0.x - (this.gunWidth / 2) * Math.sin(angle),
      y: g0.y + (this.gunWidth / 2) * Math.cos(angle),
    }
    ctx.moveTo(g1.x, g1.y)
    const g2 = {
      x: g1.x + this.gunLength * Math.cos(angle),
      y: g1.y + this.gunLength * Math.sin(angle),
    }
    ctx.lineTo(g2.x, g2.y)
    const g3 = {
      x: g2.x + this.gunWidth * Math.sin(angle),
      y: g2.y - this.gunWidth * Math.cos(angle),
    }
    ctx.lineTo(g3.x, g3.y)
    const g4 = {
      x: g3.x - this.gunLength * Math.cos(angle),
      y: g3.y - this.gunLength * Math.sin(angle),
    }
    ctx.lineTo(g4.x, g4.y)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
  }

  aimAt(targetPos) {
    const deltaX = targetPos.x - this.basePos.x
    const deltaY = targetPos.y - this.basePoss.y
    this.gunAngle = Math.atan2(deltaY, deltaX)
  }

  update(tank) {
    this.basePos = pos
  }
}
