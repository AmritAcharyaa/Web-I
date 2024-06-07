let assignmentTopic = document.getElementById("assignmentTopic");
let listItem =document.getElementsByTagName("li");

window.addEventListener("load",()=>{
    alert(`Load Event Triggered 
Now to Trigger Unload go back to previous page

        `)
})

assignmentTopic.addEventListener("click",()=>{
   
        
   window.history.back();
   
})
listItem[1].addEventListener("click",()=>{
    alert("Unload Event is Deprecated Many browser Dont Support This")
})

listItem[2].addEventListener("click",()=>{
    alert("Resize The Browser")
    window.addEventListener("resize",()=>{
        alert("Resizing the Form")
    })                                               
                                                    
})
