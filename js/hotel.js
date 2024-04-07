// ...Navbar Open and Close...
        let Navbar_tag = document.querySelector(".menu-btn").addEventListener("click", abc);
        
        function abc() {
        document.querySelector(".main-menu").classList.toggle("show");
        }

// ...Images Slider... 
        let slider = document.querySelectorAll(".slide-container");

        let index = 0;

        function next(){
            slider[index].classList.remove('active')
            index = (index + 1) % slider.length;
            slider[index].classList.add('active'); 
            }   
            next()

        function prev(){
            slider[index].classList.remove('active')
            index = (index - 1 + slider.length) % slider.length;
            slider[index].classList.add('active');
            }
        prev()

        setInterval(next, 7000);

//...Scroll About and Room...
        window.addEventListener('scroll', reveal);
        
        function reveal()
        {
            const reveals = document.querySelectorAll('.box');

            console.log(reveals);
            
            for(i=0; i<reveals.length; i++)
            {
                var revealTop = reveals[i].getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var revealpoint = 150;

                if(revealTop < windowHeight - revealpoint)
                {
                    reveals[i].classList.add('active');
                }
                else
                {
                    reveals[i].classList.remove('active');
                }
            }
        }

//...Slilder Left - Right Move...
let products = document.querySelectorAll(".slilder .product");

            let counter = 0
            console.log(products);

            function left()
            {
                if(counter == 0)
                {
                    counter = products.length
                    products.style.filter = "blur(2px)";
                }
                else
                {
                    counter--
                }
               
                scroll()
            }
            function right(){
                if(counter >= slider.length)
                {   
                    counter = 0
                    products.style.filter = "blur(2px)";
                }
                else
                {
                    counter++
                }
               
                scroll()
            }
            function scroll()
            {
                products.forEach(function(item){
                    item.style.transform = `translateX(-${counter * 390}px)`    
                })
            }

//...Slider Show Client's...
            let slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {

              let l;

              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");

              if (n > slides.length) 
              {
                slideIndex = 1
              }    
              if (n < 1) 
              {
                slideIndex = slides.length
              }
              for (l = 0; l < slides.length; l++) 
              {
                slides[l].style.display = "none";  
              }
              for (l = 0; l < dots.length; l++) 
              {
                dots[l].className = dots[l].className.replace(" activ", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " activ";
            }
  
//...Scroll Div Left Side...

        window.addEventListener('scroll', reveal2);
        
        function reveal2()
        {
            var reveals1 = document.querySelectorAll('.content-left');
               
            for(p=0; p<reveals1.length; p++)
            {
                var revealTop = reveals1[p].getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var revealpoint = 80;

                if(revealTop < windowHeight - revealpoint)
                {
                    reveals1[p].classList.add('late');
                }
                else
                {
                    reveals1[p].classList.remove('late');
                }
            }
        }

//...Scroll Div Right Side...
        window.addEventListener('scroll', reveal1);
        
        function reveal1()
        {
            var reveals2 = document.querySelectorAll('.content-right');
           
            for(j=0; j<reveals2.length; j++)
            {
                var revealTop = reveals2[j].getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var revealpoint = 80;

                if(revealTop < windowHeight - revealpoint)
                {
                    reveals2[j].classList.add('aavo');
                }
                else
                {
                    reveals2[j].classList.remove('aavo');
                }
            }
        }

//...Hotel Booking Form...
        let  currentDateTime = new Date();
        let year = currentDateTime.getFullYear();
        let month = (currentDateTime.getMonth() + 1);
        let date = (currentDateTime.getDate() + 1);

        if(date < 10) {
        date = '0' + date;
        }
        if(month < 10) {
        month = '0' + month;
        }

        var dateTomorrow = year + "-" + month + "-" + date;
        var checkinElem = document.querySelector("#checkin-date");
        var checkoutElem = document.querySelector("#checkout-date");

        checkinElem.setAttribute("min", dateTomorrow);

        checkinElem.onchange = function () {
            checkoutElem.setAttribute("min", this.value);
        }


//...navbar scroll changes script start...
       const navbar = document.querySelector('.menu-list');

        function scrollNavbar()
        {
            if(document.documentElement.scrollTop > 50)
            {
                navbar.style.background = '#222';
            }
            else
            {
                navbar.style.background = '';
            }
        }


