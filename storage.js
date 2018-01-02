/// <reference path="phaser.min.js"/>
/*the above line is just to help intellisense to detect auto completes. it has no meaning outside of MS visual studios*/

/**
Utility class for accessing global variables more easily in game.js. It would be
better to make this into several classes, but this is easier.
*/
var storage = function (treasureGroup) {
    this.wave = 0;
    this.treasures = treasureGroup;
    this.treasures.enableBody = true;

    this.nextWave = function(){
      this.wave = this.wave + 1;
    }

    this.getWave = function(){
      return this.wave;
    }

    this.addTreasure = function(treasure){
      this.treasures.add(treasure);
    }

    this.getTreasures = function(){
      return this.treasures;
    }

}
