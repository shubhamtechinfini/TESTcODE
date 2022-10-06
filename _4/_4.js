/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_4/costumes/costume1.svg", {
        x: 27.131999969482422,
        y: 28.382699966430664
      }),
      new Costume("costume2", "./_4/costumes/costume2.svg", {
        x: 19.25,
        y: 27.75
      }),
      new Costume("costume3", "./_4/costumes/costume3.svg", {
        x: 25.5,
        y: 27.75
      }),
      new Costume("costume4", "./_4/costumes/costume4.svg", {
        x: 24.040409088134766,
        y: 24.040409088134766
      })
    ];

    this.sounds = [new Sound("ポップ", "./_4/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.variable = 1;
    this.vars.variable2 = 3.3999999999999995;
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.visible = false;
  }

  *whenIReceiveStart() {
    yield* this.wait(1);
    this.vars.variable2 = 4;
    while (!(0 < this.stage.vars._2)) {
      this.vars.variable = this.random(1, 10);
      if (this.vars.variable < 5) {
        this.costume = "costume1";
        this.createClone();
      }
      if (this.vars.variable > 4 && this.vars.variable < 8) {
        this.costume = "costume3";
        this.createClone();
      }
      if (this.vars.variable > 7 && this.vars.variable < 10) {
        this.costume = "costume4";
        this.createClone();
      }
      if (this.vars.variable > 9) {
        this.costume = "costume2";
        this.createClone();
      }
      yield* this.wait(this.vars.variable2);
      this.vars.variable2 += -0.2;
      if (this.vars.variable2 < 1.75) {
        this.vars.variable2 = 1.75;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    if (this.costumeNumber == 1) {
      this.visible = true;
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.goto(240, -8);
      this.direction = -90;
      while (!(this.x < -240)) {
        this.x += -11;
        yield;
      }
      if (!(this.x < -225)) {
        this.broadcast("ﾀﾋ");
      }
      this.deleteThisClone();
    }
    if (this.costumeNumber == 2) {
      this.visible = true;
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.goto(240, -12);
      this.direction = -90;
      while (!(this.x < -240)) {
        this.x += -9;
        if (this.touching(this.sprites["_1"].andClones())) {
          this.broadcast("ﾀﾋ");
        }
        yield;
      }
      this.deleteThisClone();
    }
    if (this.costumeNumber == 4) {
      this.visible = true;
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.goto(240, -12);
      this.direction = -90;
      while (!(this.x < -240)) {
        this.x += -15;
        if (this.touching(this.sprites["_1"].andClones())) {
          this.broadcast("ﾀﾋ");
        }
        yield;
      }
      this.deleteThisClone();
    }
    if (this.costumeNumber == 3) {
      this.visible = true;
      this.broadcast("attack!");
      this.goto(250, -8);
      for (let i = 0; i < 6; i++) {
        this.x += -10;
        yield;
      }
      yield* this.wait(0.9);
      for (let i = 0; i < 6; i++) {
        this.x += 10;
        yield;
      }
      this.deleteThisClone();
    }
    this.deleteThisClone();
  }
}
