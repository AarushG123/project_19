var boy, boyImg
var zombie, zombieImg
var bg, bgImg
var rocks, rocksImg
var ground





function preload(){
    boyImg = loadAnimation("boyRunning1.png", "boyRunning2.png", "boyRunning3.png", "boyRunning4.png")
    zombie = loadAnimation("zombie1.jpg", "zombie2.jpg", "zombie3.jpg", "zombie4.jpg")
    bgImg = loadImage("backgroundG.jpg")
    rocksImg = loadImage("rock.png")
    



}

function setup() {


    createCanvas(400, 400)
    bg = createSprite(325,height/2)
    bg.addImage(bgImg)
    bg.scale = 2.4
    bg.velocityX = -2
    

    boy = createSprite(width/2,290)
    boy.addAnimation("boy",boyImg)
    boy.scale = 0.3

    ground = createSprite(width/2, 320, width, 5)
    ground.visible = false

    rocks = new Group
    


 
}

function draw() {
    background(180)
    boy.collide(ground)
    boy.velocityY += 0.2
    

    if(bg.x < 70){
        bg.x = 325
    }
    if(frameCount % 120 == 0 && frameCount > 1){
        createRocks()
    }
    if(keyDown("space")){
        boy.velocityY = -5
    }
    if(boy.isTouching(rocks)){
        boy.velocityX = 0
        rocks.velocityX = 0
        bg.velocityX = 0
        textSize(20)
        text("GAME OVER", width/2, height/2)
        rocks.velocityX = 0


    }
     

    drawSprites()
 
}

function createRocks(){
    rock = createSprite(width, 300)
    rock.addImage(rocksImg)
    rock.scale = 0.2
    rock.velocityX = -4
    rocks.add(rock)



}