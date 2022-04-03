class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector(".game-canvas")
    this.context = this.canvas.getContext("2d")
    this.map = null
  }

  startGameLoop() {
    const step = () => {

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.map.drawLowerImage(this.context)

      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          key: this.directionInput.direction
        })
        object.sprite.draw(this.context)
      })
      
      this.map.drawUpperImage(this.context)
      
      requestAnimationFrame(() => {
        step()
      }) 
    }
    step()
  }
  
  init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom)

    this.directionInput = new DirectionInput()
    this.directionInput.init()
    
    this.startGameLoop()
    
  }
}