var mgr;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );

    mgr.showNextScene();
}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
    mgr.mousePressed();
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================

function Animation1()
{
    var textX;
    var textY;

    this.enter = function()
    {
        textX = 10;
        textY = 0;

        background("black");
        textAlign(CENTER);
        textFont('Mukta Mahee');
        fill("white");
        textSize(62);
        text("MY GREAT DATA VISUALIZATION", width / 2, height / 2 - 80);
        textSize(30);
        text("This is the title page. Set the scene and let people know what the story is about\n", width / 2, height / 2);
        textSize(14);
        text("... click to continue.\n\n", width/2, height/2+60);
    }

    this.keyPressed = function()
    {
        text(keyCode, textX, textY += 10);
        if ( textY > height )
        {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}


function Animation2()
{
    
    this.draw = function()
    {
        background("white");

        fill("red");
        noStroke();

        var r = frameCount;

        ellipse(r+300, height/2-100, 80, 80);

        if(r>600){
          this.sceneManager.showNextScene();  
        }


        textSize(30);
        textAlign(CENTER);
        fill("black");
        
        text("This is the hook, this is were we give some futher information and make them feel something", width/2, height/2);
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}


// When defining scenes, you can also 
// put the setup, draw, etc. methods on prototype
function Animation3()
{
    this.draw = function()
    {
        background("red");
                
        var r = sin( frameCount * 0.01 );
                
        fill("white");
        noStroke();
        ellipse( width / 2, height / 2, map(r, 0, 1, 100, 200) );
    }
}