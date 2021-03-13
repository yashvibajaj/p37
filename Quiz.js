class Quiz{
    constructor(){

    }
    
    getState(){
     var gameStateRef  = database.ref('gameState');
     gameStateRef.on("value",function(data){
     gameState = data.val();
    })

    }
    
    update(state){
        database.ref('/').update({
        gameState: state
        });
      }

  async start(){
      if(gameState===0){
          contestant=new Contestant();
          var contestantCountRef=await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
              contestantCount=contestantCountRef.val();
              contestant.getCount();
          }
          question=new Question();
          question.display();
      }
  }
  
   end(){
       background("yellow");

       question.hide();

       fill(0);
       textSize(30);
       text("Result Of Quiz",350,45);
       text("----------------------------",320,65);

       Contestant.getContestantInfo();

       if(allcontestant!==undefined){
           debugger;
           var display_Answer=230;
           fill("blue");
           textSize(20);
           text("'Note:Contestant who have answer correct are in green color !'",150,210);

           for(var plr in allcontestant){
               debugger;
               var correctAns="2";
               if(correctAns===allcontestant[plr].answer)
				   fill("green");
			   
			   else
				   fill("red");
			   
			   display_Answer+=30;
			   textSize(20);
			   text(allcontestant[plr].name+":"+allcontestant[plr].answer,250,display_Answer);
			   
           }

       }
   }

}