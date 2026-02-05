class Stage extends GameObject {
      width = 0
      height = 0

      constructor({
        x,
        y,
        width,
        height
      }) {
        super({x, y})
        this.width = width
        this.height = height
      }

      draw(ctx) {
        ctx.fillStyle = 'grey'
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
      }
    }