const roratePosition = (pos, angle) => {
  return {
    x: Math.cos(angle) * pos.x - Math.sin(angle) * pos.y,
    y: Math.sin(angle) * pos.x + Math.cos(angle) * pos.y,
  }
}

class GameObject {
  id = ""
  name = ""
  posX = 0
  posY = 0
  posZ = 0
  velX = 0
  velY = 0
  angle = 0
  width = 0
  height = 0

  constructor({ posX, posY, velX, velY, angle }) {
    this.id = Math.random()
    this.posX = posX
    this.posY = posY
    this.velX = velX || 0
    this.velY = velY || 0
    this.angle = angle || 0
  }

  update(dt, world) {}

  render(ctx) {}

  getShape() {
    // 左上の座標
    const p0 = { x: -this.width / 2, y: -this.height / 2 }
    const { x: diffXMin, y: diffYMin } = roratePosition(p0, this.angle)
    // 右下の座標
    const p1 = { x: this.width / 2, y: this.height / 2 }
    const { x: diffXMax, y: diffYMax } = roratePosition(p1, this.angle)

    return {
      xMin: this.posX + diffXMin,
      xMax: this.posX + diffXMax,
      yMin: this.posY + diffYMin,
      yMax: this.posY + diffYMax,
    }
  }
}
