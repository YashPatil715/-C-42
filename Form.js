class Form{
    constructor(){
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement('h1');
    }
    

    hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();   
    }

    display(){
    var title=createElement('h1');
    title.html("Car Racing Game");
    title.position(displayWidth/2+250,100);

    

    this.input.position(displayWidth/2+280,displayHeight/2-180);
    this.button.position(displayWidth/2+340,displayHeight/2-130);
    
        



    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        //var greeting=createElement("h3");
        this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2+280,displayHeight/4); 

    });


}

}