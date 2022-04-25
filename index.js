//VARIABLE
const newJokeBtn = document.querySelector(".new-joke-btn");
const jokeText = document.querySelector(".joke-text");
let jokeCount = 0;
// let punchLineCount = 0;

//FORM VARIABLE
const form = document.querySelector(".comment-form");
const newComment = document.createElement("p");
const commentsList = document.getElementById("comments-list");
const li = document.createElement("li.comment-style");





fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10")
.then(response => response.json())
.then(data => jokePop(data))

function jokePop(data){

    newJokeBtn.addEventListener('click', (e) => {
   
        // for(let i = 0; i < data.jokes.length; i++){        
        //     jokeText.innerText = data.jokes[i].setup
            
        //     console.log(data.jokes[i].setup)
        // } 
        if (jokeCount < data.jokes.length){
            //jokeCount = jokeCount + 1
            jokeCount = jokeCount + 1
            jokeText.innerText = data.jokes[jokeCount].setup
            console.log(jokeText)
            console.log(jokeCount)
        }

        jokeText.addEventListener('mouseover', (e) => {

            if (jokeCount < data.jokes.length){
                jokeText.innerText = data.jokes[jokeCount].delivery
            }
        })

        jokeText.addEventListener('mouseout', (e) => {

            if (jokeCount < data.jokes.length){ 
                jokeText.innerText = data.jokes[jokeCount].setup
                // jokeCount = jokeCount + 1
            }
        })
    })
}

form.addEventListener('submit', (e) => {
        
    e.preventDefault();
    newComment.innerText = e.target[0].value
    console.log(newComment)
    // const li = document.createTextNode(newComment.innerText)
    li.append(document.createTextNode(newComment.innerText))
    console.log(li)
    commentsList.appendChild(li)
    console.log(commentsList)
    form.reset()
})