/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_9/costumes/コスチューム1.svg", {
        x: 464.967305,
        y: 218.01400999999998
      }),
      new Costume("コスチューム2", "./_9/costumes/コスチューム2.svg", {
        x: 250.38970221101505,
        y: 188.69990683616965
      })
    ];

    this.sounds = [new Sound("ポップ", "./_9/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
