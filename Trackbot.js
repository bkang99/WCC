trackRobot(0,0);

function trackRobot(north, east, south, west){
  let x = 0, y = 0;

  if (north) {
    y += north;
  }

  if (east) {
    x += east;
  }

  if (south) {
    y -= south;
  }

  if (west) {
    x -= west;
  }

  console.log('[' + x + ', ' + y + ']');
}