  // let x = 10;
       // console.log(x);
       document.getElementById('testParagraph').style.color = 'green';

       console.log(document.querySelectorAll('p.sampleClass')[0].innerText);
       console.log(document.querySelectorAll('p.sampleClass')[1].innerText);
       let arr = document.querySelectorAll('p');
       for( a of arr){
           console.log(a.innerText)

           document.getElementById('clickThisButton').addEventListener('click', (details) => {
               document.querySelectorAll('p.sampleClass')[0].innerHTML='<i>Mark Badger</i>'
               console.log(details.target)
              //document.getElementById('clickThisButton').style.backgroundColor = 'green'; 
              if(details.target.style.backgroundColor == 'red'){
                  details.target.style.backgroundColor ='green'
              } else {
                  details.target.style.backgroundColor = 'red'
              }
           })
           document.getElementById('clickThisButton').style.backgroundColor = 'green';
       }
       

    //Challenge : Write an if statement. if the value of the input field is blank, set innerText of p tag to 'NOTHING HAS BEEN TYPED.' if it is not blank, set inner text of p tag to 'Everyone, say hello to <value> right now!'

       document.getElementById('nameInput').addEventListener('keyup', (e) => {

        console.log(e.target.value);
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value} right now!`;
        if(e.target.value == ''){
            document.getElementsByTagName('p')[1].innerText = 'NOTHING HAS BEEN TYPED.'
        } else {
            document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value} right now!`
        }


       })