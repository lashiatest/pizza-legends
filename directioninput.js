class DirectionInput {
  constructor() {
    this.heldDirection = []

    this.keys = {
      "KeyW": "up",
      "ArrowUp": "up",
      "KeyS": "down",
      "ArrowDown": "down",
      "KeyA": "left",
      "ArrowLeft": "left",
      "KeyD": "right",
      "ArrowRight": "right",
    }
  }

  get direction() {
    return this.heldDirection[0]
  }

  init() {
    document.addEventListener("keydown", event => {
      const direction = this.keys[event.code]
      if(direction && this.heldDirection.indexOf(direction) === -1) {
        this.heldDirection.unshift(direction)
      }
    })
    document.addEventListener("keyup", e => {
      const direction = this.keys[event.code]
      const index = this.heldDirection.indexOf(direction)
      if(index > -1) {
        this.heldDirection.splice(index, 1)
      }
    })
  }
}