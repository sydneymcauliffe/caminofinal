// An Array of Bubble objects
var bubbles;
// A Table object
var table;
var map;
var cnv;

function preload() {
  table = loadTable("data/data.csv", "header");
  console.log(table);
map = loadImage("images/map.png")

}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('myCanvas')
  loadData();
}

function draw() {
  background(255);
  image(map, 0, 0, width, height);
  // Display all bubbles
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var country =row.get("country")
    var x = row.get("x");
    var y = row.get("y");
    

    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(x, y, country);
  }
}

class Bubble {
  constructor(x, y, s) {
    this.x = Number(x);
    this.y = Number(y);
    this.diameter = 20;
    this.name = String(s);
    this.over = false;
  }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.diameter/2) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  // Display the Bubble
  display() {
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.name, this.x, this.y + this.diameter/2 + 20);
    }
  }
}