/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("背景1", "./Stage/costumes/背景1.svg", {
        x: 246.24624624624607,
        y: 186.936926936937
      })
    ];

    this.sounds = [
      new Sound(
        "c418-sweden-minecraft-volume-alpha",
        "./Stage/sounds/c418-sweden-minecraft-volume-alpha.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars._ = 1;
    this.vars._2 = 6;
    this.vars.score = 122;
    this.vars.WorldRecord = 2794;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("c418-sweden-minecraft-volume-alpha");
      yield;
    }
  }
}
