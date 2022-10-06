/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_8/costumes/コスチューム1.svg", {
        x: 240.8750000000001,
        y: 179.46549773755657
      }),
      new Costume("コスチューム2", "./_8/costumes/コスチューム2.svg", {
        x: 240.875,
        y: 179.46549999999974
      }),
      new Costume("コスチューム3", "./_8/costumes/コスチューム3.svg", {
        x: 240.875,
        y: 179.46549999999993
      }),
      new Costume("コスチューム4", "./_8/costumes/コスチューム4.svg", {
        x: 240.875,
        y: 179.46550000000002
      })
    ];

    this.sounds = [new Sound("ポップ", "./_8/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ﾀﾋ" }, this.whenIReceive)
    ];

    this.vars.B = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.costume = "コスチューム1";
    this.effects.clear();
    yield* this.wait(0.5);
    this.effects.ghost += 50;
    this.visible = true;
    this.goto(0, 340);
    for (let i = 0; i < 17; i++) {
      this.y += -20;
      yield;
    }
    yield* this.wait(0.3);
    for (let i = 0; i < 5; i++) {
      this.effects.ghost += -10;
      yield;
    }
    this.broadcast("score");
    this.costume = "コスチューム2";
    yield* this.wait(1);
    this.costume = "コスチューム3";
    yield* this.wait(1);
    this.costume = "コスチューム4";
  }
}
