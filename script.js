let closeImg= document.getElementById("closeImg");
let ham = document.getElementById("hamImg");
let sideContainer=document.getElementsByClassName("sideContainer");
let mainContainer = document.getElementsByClassName("mainContainer");
let assignmentTopic = document.getElementById("assignmentTopic");
let eventTypesContainer= document.getElementsByClassName("eventTypesContainer");
let eventContainersPara = document.querySelectorAll(".eventContainers p");
let events = document.getElementsByClassName("events");



let listItem =document.getElementsByTagName("li");
let instruction = document.querySelector(".eventsBox p");
let description = document.querySelector(".eventsBox span")
let eventTopic=document.querySelector(".eventClassification p");
let frontText = document.getElementsByClassName("mainTopic");
let lcont = document.getElementsByClassName("logicContainer")
let eventPart =document.getElementsByClassName("firstEvent")



let btnHome = document.getElementsByClassName("btnHome")
let txtArea = document.getElementsByTagName("textarea")
let inputBox= document.getElementsByTagName("input")


let val=1;
let count=1;
let flag =1;
let flag1=1;
let flag2=1;
let flag3=1;

closeImg.addEventListener("click",()=>{
sideContainer[0].style.display="none"
ham.style.display="block"
mainContainer[0].style.width="100%"
})


ham.addEventListener("click",()=>{
    sideContainer[0].style.display="block"
    ham.style.display="none"
    mainContainer[0].style.width="80%"
    })

    assignmentTopic.addEventListener("click",()=>{
        
        if(count==1){
            eventTypesContainer[0].style.display="none"
            count=2;
        }else{
            eventTypesContainer[0].style.display="block"
            count=1;
        }
       
    })

    eventContainersPara[0].addEventListener("click",()=>{

        if(flag==1){

            events[0].style.display="none"
            flag=2;
        }else{
            events[0].style.display="block"
            flag=1;
        }
    })
    eventContainersPara[1].addEventListener("click",()=>{

        if(flag1==1){

            events[1].style.display="none"
            flag1=2;
        }else{
            events[1].style.display="block"
            flag1   =1;
        }
    })

    eventContainersPara[2].addEventListener("click",()=>{

        if(flag2==1){

            events[2].style.display="none"
            flag2=2;
        }else{
            events[2].style.display="block"
            flag2=1;
        }
    })
    eventContainersPara[3].addEventListener("click",()=>{

        if(flag3==1){

            events[3].style.display="none"
            flag3=2;
        }else{
            events[3].style.display="block"
            flag3=1;
        }
    })

    btnHome[0].addEventListener("click",()=>{
        window.location.reload();
    })


    function hideEvent(){
        for(let i=0;i<12;i++){
            eventPart[i].style.display="none"
    }
    }

listItem[0].addEventListener("click",()=>{
    hideEvent()
  
    eventPart[0].style.display="block"
    description.innerText=""
frontText[0].style.display="none"
lcont[0].style.display="block"
eventTopic.innerText="Mouse Event"
instruction.innerText="Click the Area Bellow to see Click Event"

eventPart[0].addEventListener("click",()=>{
    description.innerText="You have Clicked in the Area Above, this demonstrate Click Event"
})

 


})

 
listItem[1].addEventListener("click",()=>{
    hideEvent();
    eventPart[1].style.display="block"
    description.innerText=""
 
frontText[0].style.display="none"
lcont[0].style.display="block"
eventTopic.innerText="Mouse Event"
instruction.innerText="Move the mouse over the Area Bellow to see MouseOver Event"

eventPart[1].addEventListener("mouseover",()=>{
    description.innerText="You have Hover the Area Above, this demonstrate MouseOver Event"
  

  
})




})

listItem[2].addEventListener("click",()=>{
       hideEvent();
    eventPart[2].style.display="block"
     
  description.innerText=""
    frontText[0].style.display="none"
    lcont[0].style.display="block"
    eventTopic.innerText="Mouse Event"
    instruction.innerText="Move the mouse out of the Area Bellow to see MouseOut Event"
    
    eventPart[2].addEventListener("mouseout",()=>{
        description.innerText="You have move mouse out of the Area Above, this demonstrate mouseOut Event"
    })
    
    
    })

    listItem[3].addEventListener("click",()=>{
            hideEvent();
    eventPart[3].style.display="block"
          
        description.innerText=""
          frontText[0].style.display="none"
          lcont[0].style.display="block"
          eventTopic.innerText="Mouse Event"
          instruction.innerText="press the Mouse inside the Area Bellow to see mouse down Event"
          
          eventPart[3].addEventListener("mousedown",()=>{
              description.innerText="You have press the Mouse inside the Area Above, this demonstrate mouse down Event"
          })
          
          
          })

          listItem[4].addEventListener("click",()=>{
                hideEvent();
                eventPart[4].style.display="block"
            
            description.innerText=""
              frontText[0].style.display="none"
              lcont[0].style.display="block"
              eventTopic.innerText="Mouse Event"
              instruction.innerText="Release the Mouse inside the Area Bellow to see mouse up Event"


             
              eventPart[4].addEventListener("mouseup",()=>{
                
                  description.innerText="You have Release the Mouse inside the Area Above, this demonstrate mouse up Event"
              })
              
              
              })

            
              listItem[5].addEventListener("click",()=>{
                hideEvent();
                eventPart[5].style.display="block"
             
               
                description.innerText=""
                  frontText[0].style.display="none"
                  lcont[0].style.display="block"
                  eventTopic.innerText="Mouse Event"
                  instruction.innerText="Move the Mouse inside the Area Bellow to see mouse move Event"
                  
                  eventPart[5].addEventListener("mousemove",()=>{
                      description.innerText=`You Have Move the Mouse for ${val} inside the Area Above, this demonstrate mouse move Event`
                      val++;
                  })
                  
                  
                  })
                  listItem[6].addEventListener("click",()=>{
                    hideEvent();
                eventPart[6].style.display="block"
                  
                  
                  description.innerText=""
                    frontText[0].style.display="none"
                    lcont[0].style.display="block"
                    eventTopic.innerText="Key Event"
                    instruction.innerText="Press the key in the Text Area Bellow to see key Down Event"
                    
                    txtArea[0].addEventListener("keydown",()=>{
                        description.innerText="You have press some key in the text Area, this demonstrate Key down Event"
                        val++;
                    })
                    
                    
                    })

                    listItem[7].addEventListener("click",()=>{
                        hideEvent();
                        eventPart[7].style.display="block"
                          
                      
                      description.innerText=""
                        frontText[0].style.display="none"
                        lcont[0].style.display="block"
                        eventTopic.innerText="Key Event"
                        instruction.innerText="Release the key in the Text Area Bellow to see key up Event"
                        
                        txtArea[1].addEventListener("keyup",()=>{
                            description.innerText="You have Release some key in the text Area, this demonstrate Key up Event"
                            val++;
                        })
                        
                        
                        })

                        listItem[8].addEventListener("click",()=>{
                            hideEvent();
                            eventPart[8].style.display="block"
                              
                          
                          description.innerText=""
                            frontText[0].style.display="none"
                            lcont[0].style.display="block"
                            eventTopic.innerText="Form Event"
                            instruction.innerText="Type In the Input Box"
                            
                            inputBox[0].addEventListener("focus",()=>{

                                description.innerText="Your Input box is now on Focus"
                            })
                            
                            
                            })
                            listItem[9].addEventListener("click",()=>{
                                hideEvent();
                                eventPart[9].style.display="block"
                                  
                              
                              description.innerText=""
                                frontText[0].style.display="none"
                                lcont[0].style.display="block"
                                eventTopic.innerText="Form Event"
                                instruction.innerText="Type In the Input Box"

                               
                                })
                                function submitFnc(e){
                                    e.preventDefault();
                                    description.innerText="You have submit the form"
                                }

                                listItem[10].addEventListener("click",()=>{
                                    hideEvent();
                                    eventPart[10].style.display="block"
                                      
                                  
                                  description.innerText=""
                                    frontText[0].style.display="none"
                                    lcont[0].style.display="block"
                                    eventTopic.innerText="Form Event"
                                    instruction.innerText="first click the input box and Take focus away from input"
                                    inputBox[3].addEventListener("blur",()=>{

                                        description.innerText="Your Input box is now on blur or out of focus"
                                    })
                                   
                                    })
                                    listItem[11].addEventListener("click",()=>{
                                        hideEvent();
                                        eventPart[11].style.display="block"
                                          
                                      
                                      description.innerText=""
                                        frontText[0].style.display="none"
                                        lcont[0].style.display="block"
                                        eventTopic.innerText="Form Event"
                                        instruction.innerText="first click the input box and type something and change the value"
                                        inputBox[4].addEventListener("change",()=>{
    
                                            description.innerText="some change have made"
                                        })
                                       
                                        })
                                        function submitFnc2(e){
                                            e.preventDefault();
                                            
                                        }


                                        listItem[12].addEventListener("click",()=>{
                                            hideEvent();
                                            frontText[0].style.display="block"
                                            lcont[0].style.display="none"
                                            
                                              
                                          
                                          
                                           
                                            })
                                            listItem[13].addEventListener("click",()=>{
                                                hideEvent();
                                                frontText[0].style.display="block"
                                                lcont[0].style.display="none"
                                                
                                                  alert("Unload Event is Deprecated Many browser Dont Support This")
                                              
                                              
                                               
                                                })
                                                listItem[14].addEventListener("click",()=>{
                                                    hideEvent();
                                                    frontText[0].style.display="block"
                                                    lcont[0].style.display="none"
                                                    alert("Resize The Browser")
                                                    
                                                    window.addEventListener("resize",()=>{
                                                        alert("Resizing the Form")
                                                    })
                                                      
                                                  
                                                  
                                                   
                                                    })