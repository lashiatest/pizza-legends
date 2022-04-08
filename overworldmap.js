class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects
    this.walls = config.walls || {};

    this.lowerImage = new Image()
    this.lowerImage.src = config.lowerSrc

    this.upperImage = new Image()
    this.upperImage.src = config.upperSrc
  }

  drawLowerImage(context, cameraPerson) {
    context.drawImage(
      this.lowerImage, 
      utilities.withGrid(10.5) - cameraPerson.x, 
      utilities.withGrid(6) - cameraPerson.y
    )
  }

  drawUpperImage(context, cameraPerson) {
    context.drawImage(
      this.upperImage, 
      utilities.withGrid(10.5) - cameraPerson.x, 
      utilities.withGrid(6) - cameraPerson.y
    )
  }

  isSpaceTaken(currentX, currentY, direction) {
    const {x, y} = utilities.nextPosition(currentX, currentY, direction)
    return this.walls[`${x},${y}`] || false
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach(o => {
      o.mount(this)
    })
  }
  
  addWall(x,y) {
    this.walls[`${x},${y}`] = true
  }

  removeWall(x,y) {
    delete this.walls[`${x},${y}`]
  }

  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY)
    const {x,y} = utilities.nextPosition(wasX, wasY, direction)
    this.addWall(x,y)
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "assets/maps/DemoLower.png",
    upperSrc: "assets/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utilities.withGrid(5),
        y: utilities.withGrid(6)
      }),
      npc1: new Person({
        x: utilities.withGrid(7),
        y: utilities.withGrid(9),
        src: "assets/characters/people/npc1.png"
      })
    },
    walls: {
      [utilities.asGridCoord(7,6)] : true,
      [utilities.asGridCoord(8,6)] : true,
      [utilities.asGridCoord(7,7)] : true,
      [utilities.asGridCoord(8,7)] : true
    }
  },
  Kitchen: {
    lowerSrc: "assets/maps/KitchenLower.png",
    upperSrc: "assets/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5
      }),
      npcA: new GameObject({
        x: 9,
        y: 6,
        src: "assets/characters/people/npc2.png"
      }),
      npcB: new GameObject({
        x: 10,
        y: 8,
        src: "assets/characters/people/npc3.png"
      }),  
    }
  }
}