// global variables 全局变量
var stage;
var preload;
var loadingScreen;
var screen1;
var screen2;
var finalScreen;
var cw;
var ch;

function init()
{
  canvas = document.getElementById("slide");
  if (canvas.width  < window.innerWidth)
  {
      canvas.width  = window.innerWidth;
  }

  if (canvas.height < window.innerHeight)
  {
      canvas.height = window.innerHeight;
  }
  ch = canvas.height;
  cw = canvas.width;

  stage = new createjs.Stage(canvas);

  createjs.Ticker.setFPS(80);

  createjs.Ticker.addEventListener("tick", stage);
  preloadAssets();
}

function preloadAssets()
{
  loadingScreen = new createjs.Container();

  var shape = new createjs.Shape();
  shape.graphics.beginFill("#000000").drawRect(0, 0, cw, ch);
  loadingScreen.addChild(shape);

  stage.addChild(loadingScreen);


  preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);

  preload.loadFile({id:"cloud", src:"images/cloud2.png"});
  preload.loadFile({id:"descending",src:"audio/descending.mp3"});
  preload.on("complete", preloadComplete, this);  
}

function preloadComplete(event)
{
  stage.removeChild(loadingScreen);

  buildScreen1();
  

  stage.addChild(screen1);
}
