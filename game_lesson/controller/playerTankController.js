class PlayerController extends TankController {
  input = new InputComponent(new GameApp())
  constructor(input) {
    this.input = input
    super()
  }

  update(dt, world, tank1) {
    // TODO: 消す
    const tank = new Tank({})
    this.input.
  }
}