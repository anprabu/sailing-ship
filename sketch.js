var s1, s2, s3, s4;
var sprites = [];

function setup() 

{
  createCanvas(400,400);
  s1 = createSprite(200,200,10,10);
  s2 = createSprite(100,200,10,10);
  s3 = createSprite(58,100,10,10);
  s4 = createSprite(300,200,10,10);

sprites = [s1, s2, s3, s4];
console.log(sprites[0].position.x);
console.log(sprites[1].position.x);
console.log(sprites[2].position.y);
console.log(sprites[3].position.y);
}

function draw() 
{
background(51);

}

