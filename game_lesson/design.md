    classDiagram
    %% GameApp.tick → world.tick
    class GameApp {
        world: World
        state: State
        canvas: HTMLCanvasElement
        inputComponent: InputComponent
        gameLoopComponent: GameLoopComponent
        renderComponent: RenderComponent
        +constructor(canvas)
        +init()
        +tick()
        +changeState(state)
    }


    class InputComponent {
        isMouseDown: boolean
        mousePos: Position
        keys: Set<string>
        +constructor(gameApp)
        -handleKeyDown(e)
        -handleMouseDown(e)
        -handleMouseMove(e)
    }

    class GameLoopComponent {
        -gameApp: GameApp
        +constructor(gameApp)
        +tick()
    }

    class RenderComponent {
        -gameApp: GameApp
        +constructor(gameApp)
        +init()
        +tick()
    }


    class State {
        -gameApp: GameApp
        +constructor(gameApp)
        +init()
        +tick()
    }


    class StartState {
        +init()
        +tick()
    }


    class PlayState {
        +init()
        %% gameApp.gameLoopComponent.tick(dt) → gameApp.renderComponent.tick()
        +tick()
    }


    class GameOverState {
        +init()
        +tick()
    }

    %% GameObjectの管理、衝突判定を行う
    class World {
        -detector: CollisionDetector
        -children: GameObject[]
        constructor()
        +addChild(child)
        +removeChild(child)
        +getChildren(): GameObject[]
        +update(dt)
        +getCollitionResults(): CollisionResult[]
    }


    class CollisionDetector {
        results: CollisionResult[]
        +constructor()
        +calcCollisions(objects)
        +getResults(): CollisionResult[]
    }


    class GameObject {
        posX: number
        posY: number
        posZ: number
        velX: number
        velY: number
        angle: number
        width: number
        heigit: number
        +constructor(config)
        +update(dt, world)
        +render(ctx)
        +getShape(): BBox
    }


    class Bullet {
        shooterId: string
        -color: string
        boundCount: number
        +constructor(config)
        +update(dt, world)
        +render(ctx)
    }


    class Tank {
        id: string
        color: string
        gun: Gun
        controller: Controller
        +constructor(config)
        +setColor(color)
        +aimAt(pos)
        +shoot()
        +moveAt(pos)
        +update(dt, world)
        +render(ctx)
    }


    class Gun {
        +width: number
        +length: number
        +basePos: Position
        +constuctor()
        +aimAt(targetPos)
        +shoot(): Bullet
        +render(ctx)
    }


    class Player {
        +constructor(config)
    }


    class Enemy {
        +constructor(config)
    }

    class Controller {
        <<interface>>
        +update(dt, worldr, tank)
    }

    class PlayerController {
        input: InputComponent
        +constructor(input)
        +update(dt, world, tank)
    }

    class AIController {
        +update(dt, world, tank)
    }


    class Wall {
        +render(ctx)
    }


    class Obstacle {
        +render(ctx)
    }

    %% 初期配置ロジック
    class Stage {
        +generate(): GameObject[]
    }


    %% 継承関係
    GameObject <|-- Bullet
    GameObject <|-- Tank
    GameObject <|-- Wall
    GameObject <|-- Obstacle
    Tank <|-- Player
    Tank <|-- Enemy
    State <|-- StartState
    State <|-- PlayState
    State <|-- GameOverState
    Controller <|.. PlayerController
    Controller <|.. AIController
    


    %% 依存・保持関係
    World "1" o-- "many" GameObject : 管理(children)
    GameApp ..> World: 参照・操作
    GameApp ..> State: 参照・操作
    GameApp ..> InputComponent: 参照・操作
    GameApp ..> GameLoopComponent: 参照・操作
    GameApp ..> RenderComponent: 参照・操作
    World ..> CollisionDetector: 生成・参照・操作
    World ..> Stage: 生成・参照・操作
    Tank ..> Gun : 生成・参照・操作
    Tank ..> Controller: 生成・参照・操作
    PlayerController ..> InputComponent: 参照
    Gun ..> Bullet : 生成