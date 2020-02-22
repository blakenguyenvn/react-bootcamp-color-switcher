const uuidv1 = require('uuid/v1');

/*
 *  Palette: red, orange, yellow, yellow-green, green, blue-green, sky-blue, blue.
 */
const coloursPalette = [
  ['#ffcccc', '#ffe6cc', '#ffffcc', '#e6ffcc', '#ccffcc', '#ccffe6', '#ccffff', '#cce5ff'],
  ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff'],
  ['#ff6666', '#ffb366', '#ffff66', '#b3ff66', '#66ff66', '#66ffb3', '#66ffff', '#66b2ff'],
  ['#ff3333', '#ff9933', '#ffff33', '#99ff33', '#33ff33', '#33ff99', '#33ffff', '#3399ff'],
  ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#007fff'],
  ['#cc0000', '#cc6600', '#cccc00', '#66cc00', '#00cc00', '#00cc66', '#00cccc', '#0066cc'],
  ['#990000', '#994c00', '#999900', '#4d9900', '#009900', '#00994d', '#009999', '#004c99'],
  ['#660000', '#663300', '#666600', '#336600', '#006600', '#006633', '#006666', '#003366'],
];

export default function BoxsGenerator(size: number) {
  const data: any = [];

  for (let positionX = 0; positionX < size; positionX++) {
    for (let positionY = 0; positionY < size; positionY++) {
      data.push({
        id:    uuidv1(),
        color: coloursPalette[positionX][positionY]
      });
    }
  }

  return data;
}
