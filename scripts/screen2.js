var background;

function buildScreen2()
{
  screen2 = new createjs.Container();

  var ss = new createjs.SpriteSheet(
  {

    "animations": {
        wind: [0, 224, "wind", .1]
    },

    "images": [preload.getResult("cloud")],

    "frames": {
      "height": 113,
      "width": 200,
      "regX": 0,
      "regY": 0
    }
  });

  var cloudSprite = new createjs.Sprite(ss);
  cloudSprite.x = 0;
  cloudSprite.y = 0;

  cloudSprite.scaleX = cw/100;
  cloudSprite.scaleY = ch/100;



  cloudSprite.gotoAndPlay("wind");
  screen2.addChild(cloudSprite);

  var triangle = new createjs.Shape();

  triangle.graphics
    .beginFill("black")
    .moveTo(cw * 0.2, ch)
    .lineTo(cw*0.8, ch)
    .lineTo(cw*0.5, Math.tan(50.5) * 0.3 * cw)
    .lineTo(cw * 0.2, ch);



     background = new createjs.Shape();
    background.graphics

      .beginLinearGradientFill(["rgba(255,255,255,0.3)","rgba(255,255,255,0.5)"], [0, 1], 0, 0, 0, cw)
      .drawRect(0, 0, cw, ch)

      background.alpha = 0;
    //  screen2.addChild(background);





  createjs.Tween.get(background, {delay:1000}) // get a tween targeting txt

      .to({alpha: 0, x:0}, 10, createjs.Ease.linear)


		  .to({alpha: 1, x:0}, 10, createjs.Ease.linear)

  screen2.addChild(triangle);








}
