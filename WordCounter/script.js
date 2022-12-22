      let textArea = document.querySelector('.textArea');
       let word=document.querySelector('#word');
       let char=document.querySelector('#char');
      

       textArea.addEventListener('input',function(){
           let text=this.value;
           let Char=text.length;
           char.innerHTML=Char;

          text=text.trim();
          let words=text.split(" ");
          let space=words.filter(function(elm){
              return elm!="";
          });
          word.innerHTML=words.length;
       })
