var music;

function buildScreen1()
{
  screen1 = new createjs.Container();

  var shape = new createjs.Shape();
  shape.graphics.beginFill("#000000").drawRect(0, 0, cw, ch);
  screen1.addChild(shape);

  screen1.addEventListener("click", function()
  {
    addAudio();

    stage.removeChild(screen1);
    stage.addChild(screen2);
  
  });
}

function addAudio()
{
    music = createjs.Sound.play("descending", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
    music.volume = 0.1;
}
