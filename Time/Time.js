/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Time extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Time/costumes/0.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("1", "./Time/costumes/1.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("2", "./Time/costumes/2.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("3", "./Time/costumes/3.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("4", "./Time/costumes/4.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("5", "./Time/costumes/5.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("6", "./Time/costumes/6.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("7", "./Time/costumes/7.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("8", "./Time/costumes/8.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      }),
      new Costume("9", "./Time/costumes/9.svg", {
        x: 12.172965233573905,
        y: 29.253539999999987
      })
    ];

    this.sounds = [new Sound("ポップ", "./Time/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScore() {
    yield* this.wait(0.5);
    if (this.stage.vars.score.length == 1) {
      this.goto(0, 70);
      this.costume = String(this.stage.vars.score)[1 - 1];
      this.createClone();
    }
    if (this.stage.vars.score.length == 2) {
      this.goto(0, 70);
      this.costume = String(this.stage.vars.score)[1 - 1];
      this.createClone();
      this.goto(40, 70);
      this.costume = String(this.stage.vars.score)[2 - 1];
      this.createClone();
    }
    if (this.stage.vars.score.length == 3) {
      this.goto(120, 70);
      this.costume = String(this.stage.vars.score)[3 - 1];
      this.createClone();
      this.goto(40, 70);
      this.costume = String(this.stage.vars.score)[1 - 1];
      this.createClone();
      this.goto(80, 70);
      this.costume = String(this.stage.vars.score)[2 - 1];
      this.createClone();
    }
    if (this.stage.vars.score.length == 4) {
      this.goto(0, 70);
      this.costume = String(this.stage.vars.score)[1 - 1];
      this.createClone();
      this.goto(40, 70);
      this.costume = String(this.stage.vars.score)[2 - 1];
      this.createClone();
      this.goto(80, 70);
      this.costume = String(this.stage.vars.score)[3 - 1];
      this.createClone();
      this.goto(120, 70);
      this.costume = String(this.stage.vars.score)[3 - 1];
      this.createClone();
    }
    if (this.stage.vars.score.length == 5) {
      this.goto(0, 70);
      this.costume = 9;
      this.createClone();
      this.goto(40, 70);
      this.costume = 9;
      this.createClone();
      this.goto(80, 70);
      this.costume = 9;
      this.createClone();
      this.goto(120, 70);
      this.costume = 9;
      this.createClone();
    }
  }

  *startAsClone() {
    this.size = 150;
    this.visible = true;
    this.moveAhead();
  }

  *whenIReceiveStart() {
    for (let i = 0; i < 3; i++) {
      this.size += 10;
      yield;
    }
    for (let i = 0; i < 14; i++) {
      this.size += -10;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveScore2() {
    yield* this.wait(1.25);
    if (this.stage.vars.WorldRecord.length == 1) {
      this.goto(0, -30);
      this.costume = String(this.stage.vars.WorldRecord)[1 - 1];
      this.createClone();
    }
    if (this.stage.vars.WorldRecord.length == 2) {
      this.goto(0, -30);
      this.costume = String(this.stage.vars.WorldRecord)[1 - 1];
      this.createClone();
      this.goto(40, -30);
      this.costume = String(this.stage.vars.WorldRecord)[2 - 1];
      this.createClone();
    }
    if (this.stage.vars.WorldRecord.length == 3) {
      this.goto(120, -30);
      this.costume = String(this.stage.vars.WorldRecord)[3 - 1];
      this.createClone();
      this.goto(40, -30);
      this.costume = String(this.stage.vars.WorldRecord)[1 - 1];
      this.createClone();
      this.goto(80, -30);
      this.costume = String(this.stage.vars.WorldRecord)[2 - 1];
      this.createClone();
    }
    if (this.stage.vars.WorldRecord.length == 4) {
      this.goto(0, -30);
      this.costume = String(this.stage.vars.WorldRecord)[1 - 1];
      this.createClone();
      this.goto(40, -30);
      this.costume = String(this.stage.vars.WorldRecord)[2 - 1];
      this.createClone();
      this.goto(80, -30);
      this.costume = String(this.stage.vars.WorldRecord)[3 - 1];
      this.createClone();
      this.goto(120, -30);
      this.costume = String(this.stage.vars.WorldRecord)[3 - 1];
      this.createClone();
    }
    if (this.stage.vars.WorldRecord.length == 5) {
      this.goto(0, -30);
      this.costume = 9;
      this.createClone();
      this.goto(40, -30);
      this.costume = 9;
      this.createClone();
      this.goto(80, -30);
      this.costume = 9;
      this.createClone();
      this.goto(120, 30);
      this.costume = 9;
      this.createClone();
    }
  }
}
