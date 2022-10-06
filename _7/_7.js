/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./_7/costumes/1.svg", {
        x: 293.793545,
        y: 10.873784999999998
      }),
      new Costume("2", "./_7/costumes/2.svg", {
        x: 322.322072072072,
        y: 6.908080000000012
      }),
      new Costume("3", "./_7/costumes/3.svg", {
        x: 311.8115615615615,
        y: 14.935969999999998
      }),
      new Costume("4", "./_7/costumes/4.svg", {
        x: 299.79955,
        y: 23.01962000000003
      }),
      new Costume("5", "./_7/costumes/5.svg", {
        x: 323.8235735735735,
        y: 14.972994999999997
      }),
      new Costume("6", "./_7/costumes/6.svg", {
        x: 341.8415915915915,
        y: 10.951729999999998
      }),
      new Costume("7", "./_7/costumes/7.svg", {
        x: 325.32507499999997,
        y: 15.03728000000001
      }),
      new Costume("8", "./_7/costumes/8.svg", {
        x: 290.03978660660647,
        y: 10.951729999999998
      }),
      new Costume("9", "./_7/costumes/9.svg", {
        x: 311.06080762762747,
        y: 22.7837089285714
      }),
      new Costume("10", "./_7/costumes/10.svg", {
        x: 317.0668136336335,
        y: 22.851560000000006
      })
    ];

    this.sounds = [new Sound("ポップ", "./_7/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.variable3 = 3;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.moveBehind();
    while (true) {
      this.vars.variable3 = this.random(1, 10);
      this.costume = this.vars.variable3;
      this.createClone();
      yield* this.wait(4);
      yield;
    }
  }

  *startAsClone() {
    this.goto(290, 140);
    this.visible = true;
    while (!(this.x < -287)) {
      this.x += -6;
      yield;
    }
    this.deleteThisClone();
  }
}
