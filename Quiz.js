class Quiz{
constructor(){
    
}

getState(){
    var gamestateref=database.ref('gameState')
    gamestateref.on("value",function(data){
        gameState=data.val();
    })
}

update(state){
database.ref('/').update({
    gameState:state
})
}

async start(){
    if(gameState=== 0){
        contestant=new Contestant();
        var contestantcountref=await database.ref('contestantCount').once("value");
        if(contestantcountref.exists()){
            contestantCount = contestantcountref.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }
    
      play(){
        question.hide();
        background("Yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 50);
        text("----------------------------",320, 65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
          debugger;
          var display_Answers = 230;
          fill("Blue");
          textSize(20);
          text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    
          for(var plr in allContestants){
            debugger;
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer)
              fill("Green")
            else
              fill("red");
    
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
          }
        

    }
}

}
