let counter=document.querySelector('.value');
let btns=document.querySelectorAll('.btn');
let count=0;


btns.forEach(function(btn)  {
    btn.addEventListener('click' , function(e){
      console.log(e.currentTarget.classList);
      let styles=e.currentTarget.classList;
     if (styles.contains('inc')) {
         counter.innerHTML=count++;
     }
     else if (styles.contains('dec')) {
        counter.innerHTML=count--;
     }
     else{
        counter.innerHTML= count=0;
     }
    })
});