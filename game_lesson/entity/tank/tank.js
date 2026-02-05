const TANK_WIDTH = 30
const TANK_HEIGHT = 30

class Tank extends GameObject {
  color = 'green'
  gunAngle = 0
  width = TANK_WIDTH
  height = TANK_HEIGHT
  gun = new Gun({x: this.posX + this.width / 2, y: this.posY + this.height / 2})
  controller = new TankController()

  gunWidth = GUN_WIDTH
  gunLength = GUN_LENGTH

  constructor({
    posX,
    posY,
    angle = 0
  }) {
    super({posX, posY, angle})
    this.name = 'tank'
  }

  setColor (color) {
    this.color = color
  }

  draw(ctx) {
    console.log('Drawing tank at', this.posX, this.posY)
    ctx.fillStyle = this.color
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.beginPath()
    
    ctx.fillRect(this.posX, this.posY, this.width, this.height)
    
    
  }

  getShootPos() {
    return {
      x: this.width / 2 + this.posX + this.gunLength * Math.cos(this.gunAngle),
      y: this.height / 2 + this.posY + this.gunLength * Math.sin(this.gunAngle)
    }
  }

  update(dt, world) {
    this.controller.update(dt, world, this)
  }
}

class Player extends Tank {
      poseAngle = 0
      constructor(posX, posY) {
        super({posX, posY, angle: Math.PI * 1 / 4} )
        this.color = 'blue'
      }

      

      draw(ctx) {
        super.draw(ctx)
      }
    }


    class Enemy extends Tank {
      constructor(posX, posY) {
        super({posX, posY} )
        this.color = 'red'
      }

      draw = (ctx) => {
        super.draw(ctx)
      }
    }

    

    