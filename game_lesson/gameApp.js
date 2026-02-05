class GameApp {

      constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.state = new State()
        this.input = new InputComponent(this)

        window.addEventListener('keydown', this.onKeyDown)
        this.canvas.addEventListener('mousemove', this.onMouseMove)
        this.canvas.addEventListener('mousedown', this.onMouseDown)
      }

      changeState(state) {
        this.state = state
      }

      onKeyDown = (e) => {
        const player = this.objects.find(obj => obj instanceof Player)
        if (e.code === 'Space') {
          const bullet = new Bullet({
            posX: player.getShootPos().x,
            posY: player.getShootPos().y,    
            angle: player.gunAngle,
            shooter: 'player'
          })
          this.addObject(bullet)
        } if (e.code == 'ArrowDown') {
          player.posY += 5
        } if (e.code == 'ArrowUp') {
          player.posY -= 5
        } if (e.code == 'ArrowLeft') {
          player.posX -= 5
        } if (e.code == 'ArrowRight') {
          player.posX += 5
        }
      }

      onMouseDown = (e) => {
        const player = this.objects.find(obj => obj instanceof Player)
        const bullet = new Bullet({
          posX: player.getShootPos().x,
          posY: player.getShootPos().y,    
          angle: player.gunAngle,
          shooter: 'player'
        })
        this.addObject(bullet)
      }

      onMouseMove = (e) => {
        const rect = this.canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const player = this.objects.find(obj => obj instanceof Player)
        player.changeGunAngle(
          {x: player.posX + 13, y: player.posY + 13},
          {x: mouseX, y: mouseY}
        )

      }

      addObject(obj) {
        this.objects.push(obj)
      }

      draw = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.objects.forEach(obj => {
          obj.draw(this.ctx)
        })
        requestAnimationFrame(this.draw)
      }
    }