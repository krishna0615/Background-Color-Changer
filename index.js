let buttons = (document.querySelectorAll('.button'))
let body = document.querySelector('body')

buttons.forEach( (button) => {

    button.addEventListener('click' , (e) => {
        
        let expr = e.target.id
        switch (expr){
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;

            case 'white':
                body.style.backgroundColor = e.target.id
                break

            case 'blue':
                    body.style.backgroundColor = e.target.id
                    break
                
           case 'yellow':
                   body.style.backgroundColor = e.target.id
                   break
          case 'palevioletred':
                   body.style.backgroundColor = e.target.id
                   break
                        
                        

        }

    })

} )
 




























// let buttons = document.querySelectorAll('.button')

// let body = document.querySelector('body')


// buttons.forEach( (button) => {
//     // console.log(button);
//     button.addEventListener('click', function(e){

//         console.log(e);
//         console.log(e.target);
//         if(e.target.id == 'grey'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id == 'white'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id == 'blue'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id == 'yellow'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id == 'palevioletred'){
//             body.style.backgroundColor = e.target.id
//         }
//     })
    
//     })
























// function div() {
//   let div = document.querySelector(".container");
//   div.style.backgroundColor = "#272727";
// }



// let grey = () => {
//   document.body.style.backgroundColor = "grey";

//   div();
// };



// let white = () => {
//   document.body.style.backgroundColor = "#fff";

//   div();
// };


// let blue = () => {
//     document.body.style.backgroundColor = "rgba(0, 0, 255, 0.500)";
  
//     div();
//   };
  
//   let yellow = () => {
//     document.body.style.backgroundColor = "rgba(124, 124, 11, 0.780)";
  
//     div();
//   };
  
