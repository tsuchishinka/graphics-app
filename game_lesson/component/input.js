class InputComponent {
  constructor(gameApp) {
    this.isMouseDown = false
    this.mousePos = {
      x: 0,
      y: 0,
    }
    this.prevMousePos = {
      x: 0,
      y: 0,
    }
    this.prevWheel = 0
    this.wheel = 0
    this.keyCodes = new Set()
    const canvas = gameApp.getCanvas()
    canvas.addEventListener("keydown", this.handleKeyDown)
    canvas.addEventListener("mousedown", this.handleMouseDown)
    canvas.addEventListener("mousemove", this.handleMouseMove)
    canvas.addEventListener("mouseup", this.handleMouseUp)
    canvas.addEventListener("keyup", this.handleKeyUp)
    canvas.addEventListener("wheel", this.handleWheel)
  }

  handleWheel = (e) => {
    this.prevWheel = this.wheel
    this.wheel += e.deltaY
  }

  handleKeyDown = (e) => {
    this.keyCodes.add(e.code)
  }

  handleMouseDown = (e) => {
    this.isMouseDown = true
  }

  handleMouseMove = (e) => {
    this.prevMousePos = { ...this.mousePos }
    this.mousePos = {
      x: e.offsetX,
      y: e.offsetY,
    }

  }

  handleMouseUp = (e) => {
    this.isMouseDown = false
  }

  handleKeyUp = (e) => {
    this.keyCodes.delete(e.code)
  }
}
