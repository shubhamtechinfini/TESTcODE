/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_3/costumes/コスチューム1.svg", {
        x: 67.0000228881836,
        y: 25.497730255126953
      }),
      new Costume("コスチューム2", "./_3/costumes/コスチューム2.svg", {
        x: 67.00002288818357,
        y: 38.30812499999993
      })
    ];

    this.sounds = [new Sound("ポップ", "./_3/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome)
    ];
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        yield* this.sayAndWait(
          "" + "world record : " + this.stage.vars.WorldRecord,
          2
        );
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    for (let i = 0; i < 3; i++) {
      this.size += 10;
      yield;
    }
    for (let i = 0; i < 13; i++) {
      this.size += -10;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveHome() {
    this.moveAhead();
    this.size = 100;
    this.costume = "コスチューム2";
    this.goto(100, -70);
    this.createClone();
    this.costume = "コスチューム1";
    this.goto(-100, -70);
    this.visible = true;
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        this.broadcast("start");
      }
      while (!!(this.mouse.down && this.touching("mouse"))) {
        yield;
      }
      yield;
    }
  }
}
