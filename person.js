class Person extends GameObject {
  constructor(config) {
    super(config)

    this.movingProgressRemaining = 0

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      "up": ["y", -1],
      "down": ["y", 1],
      "left": ["x", -1],
      "right": ["x", 1]
    }
  }

  update(state) {
    this.updatePosition()

    if(this.isPlayerControlled && this.movingProgressRemaining === 0 && state.key) {
      this.direction = state.key
      this.movingProgressRemaining = 16
    }
  }

  updatePosition() {
    if(this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction]
      this[property] += change;
      this.movingProgressRemaining -= 1
    }
  }
}