//class


class player{
    score=0;
    pause(){
        console.log("PAUSED");}
        exit()
        {
            console.log("EXIT");
        }
}
const p1=new player();
p1.score=10;
console.log("SCORE",p1.score);
p1.pause();
p1.exit();