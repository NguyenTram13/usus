window.addEventListener("load", function(){
    function renderSweetAlert(){
        const template= `
        <div class="sweet-alert ">
        
        <p class="sweet-text">Love You</p>
         <i class="fa-solid fa-heart sweet-icon"></i>
    </div>
        `;
        document.body.insertAdjacentHTML("beforeend",template);

        }
        const left =document.querySelector(".button-left");
        // const button =document.querySelector(".button")
        left.addEventListener("click", function(){
            
            renderSweetAlert();
            const sweetItem =  document.querySelector(".sweet-alert");
            // console.log(sweetItem)
            sweetItem.classList.add("tranlate0")
            // if(sweetItem){
            //     setTimeout(function(){
            //         sweetItem.parentElement.removeChild(sweetItem);

            //     },2000)
            // }
        })

        const no = this.document.querySelector('.button-right');
        no.addEventListener("mouseenter",function(){
            let w = window.innerWidth;
            let h = window.innerHeight;
            let indexLeft= no.offsetLeft;
            let indexTop= no.offsetTop;
             console.log(Math.random() * 200);
           
                let scrollleft  = Math.floor(Math.random() * (w-indexLeft-150) );
                let scrolltop  = Math.floor(Math.random() * (h-indexTop-150) );

                let position  = ["scrolltop",'scrollright','scrollleft','scrollbot']
                console.log(scroll);
                no.style.left = `${scrollleft}px`;
                no.style.top = `${scrolltop}px`;

        })
        no.addEventListener("click",function(){
            let w = window.innerWidth;
            let h = window.innerHeight;
            let indexLeft= no.offsetLeft;
            let indexTop= no.offsetTop;
            let scrollleft  = Math.floor(Math.random() * (w-indexLeft-150) );
                let scrolltop  = Math.floor(Math.random() * (h-indexTop-150) );

            let position  = ["scrolltop",'scrollright','scrollleft','scrollbot']
            // console.log(scroll);
            no.style.left = `${scrollleft}px`;
            no.style.top = `${scrolltop}px`;

    })
})