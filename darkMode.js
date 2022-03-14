let lightMode = "light"

if(localStorage.getItem('lightMode')){
    darkMode = localStorage.getItem('lightMode')
}else {
    darkMode = "dark"
}

localStorage.setItem('lightMode', lightMode)

$(() => {
    if(localStorage.getItem('lightMode') == "light"){
        $('body').addClass('lightMode')
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()
    }else{
        $('#btnLightMode').show()
    }
    

    $('#btnDarkMode').click(() => {
        $('#btnDarkMode').hide()
        $('#btnLightMode').show()

        $('body').css({
            "background-color": "#110F05",

        })
        
        $('header').css({
            "background-color": "#1B6463"
        })

        $('#btnClima').css({
            "background-color": "#110F05"
        })

        $('h1').css({
            "color": "#F8E3EE"
        })
    
        $('#colorJS').css({
            "color": "#F8E3EE"
        })
        
        $('#colorJS2').css({
            "color": "#F8E3EE"
        })

        $('#colorJS3').css({
            "color": "#F8E3EE"
        })
      
        $('#colorJS4').css({
            "color": "#F8E3EE"
        })

        $('footer').css({
            "background-color": "#1B6463",
            "color": "white"
        })

        $('h2').css({
            "color": "#F8E3EE"
        })

        $('a').css({
            "color": "#F8E3EE"
        })

        $('.contacto').css({
            "color": "#F8E3EE"
        })

      // HOME HOME HOME
        $('#tiempo').css({
            "background-color": "#1B6463"
        })

        $('.ver').css({
            "color": "white",
            "background-color": "darkgoldenrod"
        })

        $('.ver').hover(function(){
            $(this).css({
            "color": "darkgoldenrod",
            "background-color": "lightgoldenrodyellow",
            "transition": "all 200ms",
            "box-shadow":"1px 1px 30px -5px #20202049"
            })
        })

      // CONTACTO CONTACTO CONTACTO 

      $('label').css({
        "color": "#ECEEEE"
        })

      $('.form-control, textarea').css({
        "background-color": "lightgrey"
        })
    
      // ASTILLERO ASTILLERO ASTILLERO

      $('.form-label').css({
        "color": "#7A7A7A"
    })

    $('#semana').css({
        "color": "#AAF7E5"
    })
    
    $('#validox').css({
        "color" : "white"
    })
    $('#valido').css({
        "color" : "white"
    })
    $('#valido1').css({
        "color" : "white"
    })
    $('#valido2').css({
        "color" : "white"
    })
    $('#valido3').css({
        "color" : "white"
    })
    $('#valido4').css({
        "color" : "white"
    })
    $('#valido5').css({
        "color" : "white"
    })
    $('#valido6').css({
        "color" : "white"
    })
    $('#valido7').css({
        "color" : "white"
    })
    $('#valido8').css({
        "color" : "white"
    })
    $('#valido9').css({
        "color" : "white"
    })
    $('#valido10').css({
        "color" : "white"
    })
    $('#valido11').css({
        "color" : "white"
    })
    
    $('.antMes, .sigMes').css({
        "opacity": "0.1"
    })


    // TIENDA TIENDA

    $('.card').css({
        "background-color": "grey"
    })
    
    $('#tablaCarrito').css({
        "color": "white"
    })

    $('.nav-link').css({
        "color": "#7A7A7A"
    })
    
    $('.btnTrash').css({
        "background-color": "black"
    })



    // GUARDERIA GUARDERIA GUARDERIA

    $('#flecha').css({
        "color": "white"
    })

    $('.card2').css({
        "background-color": "#2A0F2E",
        "border-radius": "3%"
    })

    $('.labelGuarderia').css({
        "color": "white"
    })

    $('.form-select').css({
        "background-color": "lightgrey"
    })
    
    $('#card3').css({
        "background-color": "#2A0F2E",
        "border-radius": "5%"
    })
 

     
        
        localStorage.setItem('darkMode', "dark")
    })




    $('#btnLightMode').click(() => {
        $('#btnDarkMode').show()
        $('#btnLightMode').hide()

        $('body').css({
            "background-color": "#ECEEEE",
            "color": "black"
        })

        $('#btnClima').css({
            "background-color": "#ECEEEE"
        })
        
        $('header').css({
            "background-color": "#AAF7E5"
        })

        $('h1').css({
            "color": "#7a7a7a"
        })

        $('nav').css({
            "color": "#7a7a7a"
        })
        
        $('#colorJS').css({
            "color": "#7A7A7A"
        })
        
        $('#colorJS1').css({
            "color": "#F8E3EE"
        })

        $('#colorJS2').css({
            "color": "#7A7A7A"
        })
        
        $('#colorJS3').css({
        "color": "#7A7A7A"
        })

        $('#colorJS4').css({
        "color": "#7A7A7A"
        })
        
        $('footer').css({
            "background-color": "#AAF7E5",
            "color": "#7a7a7a"
        })

        $('h2').css({
            "color": "#7A7A7A"
        })

        $('a').css({
            "color": "#7A7A7A"
        })

        $('.contacto').css({
            "color": "#7A7A7A"
        })

        // HOME HOME HOME
        $('#tiempo').css({
            "background-color": "#ECEEEE"
        })

        $('.ver').css({
            "color": "white",
            "background-color": "darkgoldenrod"
        })

        $('.ver').hover(function(){
            $(this).css({
            "color": "darkgoldenrod",
            "background-color": "lightgoldenrodyellow",
            "transition": "all 200ms",
            "box-shadow":"1px 1px 30px -5px #20202049"
            })
        })

        // CONTACTO CONTACTO CONTACTO
        
        $('label').css({
            "color": "black"
        })

        $('.form-control, textarea').css({
            "background-color": "white"
        })


        // ASTILLERO ASTILLERO ASTILLERO

        $('.form-label').css({
            "color": "black"
        })
        
        $('#semana').css({
            "color": "black"
        })

        $('#validox').css({
            "color" : "black"
        })
        $('#valido').css({
            "color" : "black"
        })
        $('#valido1').css({
            "color" : "black"
        })
        $('#valido2').css({
            "color" : "black"
        })
        $('#valido3').css({
            "color" : "black"
        })
        $('#valido4').css({
            "color" : "black"
        })
        $('#valido5').css({
            "color" : "black"
        })
        $('#valido6').css({
            "color" : "black"
        })
        $('#valido7').css({
            "color" : "black"
        })
        $('#valido8').css({
            "color" : "black"
        })
        $('#valido9').css({
            "color" : "black"
        })
        $('#valido10').css({
            "color" : "black"
        })
        $('#valido11').css({
            "color" : "black"
        })
        $('.antMes, .sigMes').css({
            "opacity": "1"
        })

        // TIENDA TIENDA TIENDA

        $('.card').css({
            "background-color": "white"
        })

        $('#tablaCarrito').css({
            "color": "black"
        })
        
        $('.btnTrash').css({
            "background-color": "#ECEEEE"
        })

        // GUARDERIA GUARDERIA GUARDERIA

        $('#flecha').css({
            "color": "black"
        })

        $('.card2').css({
            "background-color": "white",
            "border-radius": "3%"
        })

        $('.form-select').css({
            "background-color": "white"
        })

        $('#card3').css({
            "background-color": "white",
            "border-radius": "5%"
        })

        localStorage.setItem('darkMode', "light")
    })
})
