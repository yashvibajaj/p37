class Contestant{
    constructor(){
        this.index=null;
        this.answer=null;
        this.name=null;
      
    }

      getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestantCount:count
        });
      }
    
      update(){
         console.log("update");
         var contestantIndex = "contestant/contestant" + this.index;
         database.ref(contestantIndex).set({
          name:this.name,
          answer:this.answer
        });
      }
    
      static getContestantInfo(){
       
        var contestantInfoRef=database.ref('contestant');
        contestantInfoRef.on('value',(data)=>{
         allcontestant=data.val();
        });

      }
    
}
      
      
    

