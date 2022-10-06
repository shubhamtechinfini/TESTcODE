/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ステージ1", "./_6/costumes/ステージ1.svg", {
        x: 241.05713,
        y: 77.31873
      })
    ];

    this.sounds = [new Sound("ポップ", "./_6/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "next" }, this.whenIReceiveNext),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome)
    ];
  }

  *startAsClone() {
    this.goto(450, this.y);
    this.visible = true;
    for (let i = 0; i < 75; i++) {
      this.x += -6;
      yield;
    }
    this.broadcast("next");
    for (let i = 0; i < 75; i++) {
      this.x += -6;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveNext() {
    this.createClone();
  }

  *whenIReceiveStart() {
    yield* this.wait(0.5);
    yield* this.glide(0.2, this.x, -113);
  }

  *whenIReceiveHome() {
    this.goto(-450, -33);
    this.createClone();
    this.visible = true;
    this.goto(0, -33);
    this.createClone();
    for (let i = 0; i < 75; i++) {
      this.x += -6;
      yield;
    }
    this.visible = false;
  }
}
