function rps(yc){

    var hc,cc;
    hc=yc.id;
    cc=random();
    console.log(cc);
    var resmes=decidewinner(hc,cc);
    rpsfrontend(hc,cc,resmes);                                                                              //resilts and message are objects
    console.log('resmes');

}

function random(){
    return ['rock','paper','scissors'][Math.floor(Math.random()*3)];
}


function decidewinner(h,c)
{
   var k;
    if(h==c)
    k=0.5;
    else if(h=="rock"&&c=="paper")
    k=0;
    else if(h=="rock"&&c=="scissors")
    k=1;
     else if(h=="paper"&&c=="rock")
    k=1;
    else if(h=="paper"&&c=="scissors")
    k=0;
     else if(h=="scissors"&&c=="rock")
     k=0;
    else if(h=="scissors"&&c=="paper")
    k=1;
    if(k==1)
    return {'message':'you won!','color':'green'};
    else if(k==0)
    return  {'message':'you lose!','color':'red'};
    else
    return {'message':'you tied!','color':'yellow'};
}
function rpsfrontend(hi,ci,fm){
    var database={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src

    }
        document.getElementById('scissors').remove();
        document.getElementById('paper').remove();
        document.getElementById('rock').remove();

       var  hdiv=document.createElement('div');
       var  cdiv=document.createElement('div');
       var  msg=document.createElement('div');

       hdiv.innerHTML=" <img src= '" + database[hi] + "'height=150 width=150 style='box-shadow:0px 10px 50px blue'/> ; "
       document.getElementById("pic").appendChild(hdiv);
       msg.innerHTML="<h1 style='color: " + fm['color'] + " '> " + fm['message'] + "  </h1> ;"                     
       document.getElementById("pic").appendChild(msg);
      
       
}
