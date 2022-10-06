/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Idle", "./_1/costumes/Idle.png", { x: 6, y: 8 }),
      new Costume("Walk1", "./_1/costumes/Walk1.png", { x: 8, y: 8 }),
      new Costume("Walk2", "./_1/costumes/Walk2.png", { x: 6, y: 8 }),
      new Costume("Walk3", "./_1/costumes/Walk3.png", { x: 6, y: 8 }),
      new Costume("Walk4", "./_1/costumes/Walk4.png", { x: 6, y: 8 }),
      new Costume("Jump", "./_1/costumes/Jump.png", { x: 9, y: 7 }),
      new Costume("Fall", "./_1/costumes/Fall.png", { x: 8, y: 8 }),
      new Costume("Hurt1", "./_1/costumes/Hurt1.png", { x: 6, y: 8 }),
      new Costume("Hurt2", "./_1/costumes/Hurt2.png", { x: 6, y: 8 })
    ];

    this.sounds = [new Sound("grass", "./_1/sounds/grass.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "ﾀﾋ" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome),
      new Trigger(Trigger.BROADCAST, { name: "home" }, this.whenIReceiveHome2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "メッセージ" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    while (true) {
      yield* this.wait(0.05);
      this.costume = "Walk1";
      yield* this.wait(0.05);
      this.costume = "Walk2";
      yield* this.wait(0.05);
      this.costume = "Walk3";
      yield* this.wait(0.05);
      this.costume = "Walk4";
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.broadcast("home");
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars._ > 0) {
        if (this.mouse.down || this.keyPressed("space")) {
          this.costume = "Jump";
          for (let i = 0; i < 10; i++) {
            this.costume = "Jump";
            this.y += 10;
            yield;
          }
          for (let i = 0; i < 5; i++) {
            this.costume = "Jump";
            this.y += 4;
            yield;
          }
          for (let i = 0; i < 5; i++) {
            this.costume = "Jump";
            this.y += -4;
            yield;
          }
          for (let i = 0; i < 10; i++) {
            this.costume = "Jump";
            this.y += -10;
            yield;
          }
        }
        while (!!this.mouse.down) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    yield* this.wait(0.5);
    yield* this.glide(0.15, -150, 0);
    this.stage.vars._ = 1;
  }

  *whenIReceive() {
    this.stage.vars._2 += 1;
    for (let i = 0; i < 3; i++) {
      this.costume = "Hurt1";
      this.y += 10;
      yield;
    }
    while (!(this.y < -200)) {
      this.y += -10;
      this.costume = "Hurt2";
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveHome() {
    this.stage.vars._2 = 0;
    this.stage.vars._ = 0;
  }

  *whenIReceiveHome2() {
    this.stage.vars._2 = 0;
    this.visible = true;
    this.stage.vars._ = 0;
    this.goto(-150, 80);
    while (true) {
      if (
        this.touching(this.sprites["_4"].andClones()) ||
        this.touching(this.sprites["_5"].andClones())
      ) {
        this.broadcast("ﾀﾋ");
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.score = 0;
    while (true) {
      yield* this.wait(0.1);
      this.stage.vars.score += 1;
      yield;
    }
  }

  *whenIReceiveScore() {
    if (this.stage.vars.score > this.stage.vars.WorldRecord) {
      this.stage.vars.WorldRecord = this.stage.vars.score;
    }
  }

  *whenGreenFlagClicked4() {
    this.size = 900;
    while (true) {
      if (this.touching(this.sprites["_6"].andClones())) {
        yield* this.playSoundUntilDone("grass");
      }
      yield;
    }
  }

  *whenIReceive2() {
    this.costume = "Walk1";
    this.goto(-150, -40);
    this.direction = 90;
    this.moveAhead();
    this.size = 2000;
    this.visible = true;
    this.direction += -5;
    /* TODO: Implement stop all */ null;
  }
}
