const input  = document.querySelectorAll(".inputNumber"),
      para = document.querySelectorAll(".para-number"),
      holderInput = document.querySelector("#cardHolder-input"),
      holderParagraph = document.querySelector(".holderName"),
      dateMonth = document.querySelector("#expiry-month-input"),
      dateMonthParagraph = document.querySelector(".month"),
      dateYear = document.querySelector("#expiry-year-input"),
      dateYearParagraph = document.querySelector(".year"),
      cvvInput = document.querySelector("#cvv"),
      cvvParagraph = document.querySelector(".cvv"),
      cvvDiv = document.querySelector(".cardCvv"),
      cardFront = document.querySelector(".cardFront"),
      cardBack = document.querySelector(".cardBack"),
      allCardTypeImg = document.querySelectorAll(".card-type-img")
      let paragraphID;
      let errorMessage = document.querySelector(".error-message") ;
      let cardTypeDeterminat;
      let valueOfcardType;
      
      input.forEach((inputs , i)=>{
          cardTypeDeterminat = input[0]
          
        inputs.addEventListener("input" , (e)=>{
            valueOfcardType = Number (cardTypeDeterminat.value[0])
            allCardTypeImg.forEach((cardTypes , i)=>{
                 const dataCardType = Number(cardTypes.dataset.cardtype)
                 switch(dataCardType){
                    case 5 :
                       if(valueOfcardType === 5){
                        cardTypes.classList.add("active")
                       }
                       else {
                        cardTypes.classList.remove("active")
                       }
                       break
                       case 2 :
                       if(valueOfcardType === 2){
                       
                        cardTypes.classList.add("active")
                       }
                       else {
                        cardTypes.classList.remove("active")
                       }
                       break
                       case 4 :
                       if(valueOfcardType === 4){
                       
                        cardTypes.classList.add("active")
                       }
                       else {
                        cardTypes.classList.remove("active")
                       }
                 }
            }) 
            para.forEach((paragraph , index)=>{
                paragraphID  = index
                if(i === paragraphID){
                    let value = e.target.value;
                    let activeParagraph = paragraph;
                    let parent = inputs.nextElementSibling
                    activeParagraph.innerHTML = value
                    if(/[A-z]/.test(value)){
                        activeParagraph.innerHTML = ""
                        e.target.disabled = true 
                        errorMessage.innerHTML = "Only number is accepted"
                        setTimeout(()=>{
                        errorMessage.innerHTML = " "
                        e.target.disabled = false
                        },1000)

                    }
                    if(value.length > 3){
                        e.target.disabled = true
                        setTimeout(() => {
                            e.target.disabled = false
                            parent.focus()
                        }, 0000);
                  
                      
                    }
                    if(isNaN(value)){
                        activeParagraph.innerHTML.disabled = true
                    }
                }
            })
        })
    })
    holderInput.addEventListener("input" , (e)=>{
     let holderParagraphHtml = holderParagraph
     holderParagraphHtml.innerHTML = e.target.value
    })
    dateMonth.addEventListener("input" , (e)=>{
     let monthParagraphHtml = dateMonthParagraph
     monthParagraphHtml.innerHTML = e.target.value
    })
    dateYear.addEventListener("input" , (e)=>{
     let dateYearParagraphHtml = dateYearParagraph
     dateYearParagraphHtml.innerHTML = "/"+ e.target.value
    })
    cvvInput.addEventListener("input" , (e)=>{
     let cvvParagraphHtml = cvvParagraph
     cvvParagraphHtml.innerHTML =  e.target.value
     if(e.target.value.length > 2){
         cvvInput.disabled = true 
        setTimeout(() => {
            cvvInput.disabled = false 
        }, 1000);
     }
    })
     cvvInput.addEventListener("focus" , ()=>{
        cardFront.classList.add("active")
        setTimeout(() => {
            cardFront.classList.add("active")
            cvvDiv.classList.add("active")
        }, 1000);
     })
