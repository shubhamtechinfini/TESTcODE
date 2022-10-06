import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _1 from "./_1/_1.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";
import _6 from "./_6/_6.js";
import _7 from "./_7/_7.js";
import Time from "./Time/Time.js";
import _8 from "./_8/_8.js";
import _9 from "./_9/_9.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _1: new _1({
    x: -150,
    y: -40,
    direction: 85,
    costumeNumber: 2,
    size: 2000,
    visible: true,
    layerOrder: 9
  }),
  _3: new _3({
    x: -100,
    y: -70,
    direction: 90,
    costumeNumber: 1,
    size: 9.804794289473326,
    visible: false,
    layerOrder: 7
  }),
  _4: new _4({
    x: 250,
    y: -8,
    direction: -90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  _5: new _5({
    x: 247,
    y: -8,
    direction: 45.19404898650797,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  _6: new _6({
    x: -414,
    y: -113,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  _7: new _7({
    x: 286.5882352941177,
    y: 138.58823529411762,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Time: new Time({
    x: 120,
    y: -30,
    direction: 90,
    costumeNumber: 3,
    size: 19.818894329118663,
    visible: false,
    layerOrder: 5
  }),
  _8: new _8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  _9: new _9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
