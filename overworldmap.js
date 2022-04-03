class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc

    this.upperImage = new Image();
    this.upperSrc = config.upperSrc
  }

  drawLowerImage(context) {
    context.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(context) {
    context.drawImage(this.upperImage, 0, 0)
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