/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./_5/costumes/1.png", { x: 32, y: 32 }),
      new Costume("2", "./_5/costumes/2.png", { x: 47, y: 42 }),
      new Costume("3", "./_5/costumes/3.png", { x: 32, y: 32 }),
      new Costume("4", "./_5/costumes/4.svg", {
        x: 15.50000333247317,
        y: 14.999993347879638
      })
    ];

    this.sounds = [
      new Sound("ニャー", "./_5/sounds/ニャー.wav"),
      new Sound("弓矢射撃音", "./_5/sounds/弓矢射撃音.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "attack!" },
        this.whenIReceiveAttack
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveAttack() {
    this.visible = true;
    this.costume = 1;
    this.goto(210, -8);
    for (let i = 0; i < 5; i++) {
      this.x += -10;
      yield;
    }
    for (let i = 0; i < 3; i++) {
      yield* this.wait(0.1);
      this.costumeNumber += 1;
      yield;
    }
    this.createClone();
    this.costume = 1;
    yield* this.wait(0.5);
    for (let i = 0; i < 9; i++) {
      this.x += 10;
      yield;
    }
    this.visible = false;
    for (let i = 0; i < 5; i++) {
      this.x += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    while (!(this.x < -240)) {
      this.x += -15;
      if (this.touching(this.sprites["_1"].andClones())) {
        this.broadcast("ﾀﾋ");
      }
      yield;
    }
    this.deleteThisClone();
  }
}
