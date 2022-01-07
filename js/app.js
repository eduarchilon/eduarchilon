const URLJSON = "../js/proyectos.json";

$(document).ready(function(){
    console.log("Pagina lista")


   $('.modale').css('display', 'none')
    //menu
    let ocultado = false;
	$("#btn-menu").click(function(){
		if(!ocultado){
			$('#menu').show("slow");
            $('#menu').css("display", 'flex');
			ocultado=true;
		}else{
			$('#menu').hide("slow");
			ocultado=false;
		}
	})

    $('#btn-close').click(function(){
        $('#menu').hide("slow");
		ocultado=false;
    })

    $('#menu').hover(function(){ 
        ocultado=true; 
    }, function(){ 
        ocultado=false; 
    });

    ocultado=false
    $("body").click(function(){  
        if(!ocultado) {
            $('.menu').hide("slow"); 
            ocultado=false
        }
    });

    //obtengo datos del json
    $.getJSON(URLJSON, function(respuesta, estado){
        if(estado==="success"){
            let proyectos = respuesta;
            for(const proyecto of proyectos){
                $('#proyecto-item').append(`
                    <div class="p-item-c p-item-c-margin" id="${proyecto.id}" value="${proyecto.id}">
                        <img src="${proyecto.informacion.imagen}" alt="">
                    </div>
                `)

                $('#' + proyecto.id).click(function(){
                    $('body').append(`
                    <div class="modale">
                    <div class="fondoa">
                        <div class="contenta">
                            <h2>${proyecto.informacion.nombre}</h2>
                            <h4>${proyecto.informacion.referencia}</h4>
                            <p>${proyecto.informacion.descripcion}</p>
                            <h3>Tenologias</h3>
                            <div class="tecnologias">
                                <span>${proyecto.tecnologias.t1}</span>
                            </div>
                            <div class="links">
                                <a href="${proyecto.informacion.link}"><img src="assets/img/enlace.png" alt="" width="25">Visitar</a>
                                <a href="${proyecto.informacion.repositorio}"><img src="assets/img/github-b.png" alt="" width="25">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div class="close-modal">
                        <button class="btn toggleModal">Cerrar</button>
                    </div>
                </div>
        
                    `)

                    /*Aca va el codigo de modal */
                    // $('.toggleModal').hide()
                    $('.modale').toggle('slow')
                    $('.fondoa').css('background-image', 'url(' + proyecto.informacion.imagen + ')')
                    $('header').hide()


                    $('.toggleModal').click(function(){
                        $('.modale').hide('slow')
                        $('header').show()
                    })
                })


            }
        }
    })

    $('#irCv').click(function(){
        location.href = "https://drive.google.com/file/d/1WWr9UrLmmaAhLZBz7XF95ffwmO6g4PC_/view?usp=sharing"
    })

    $('#irRepositorio').click(function(){
        location.href = "https://github.com/eduarchilon"
    })

    $('#irLinkedin').click(function(){
        location.href = "https://www.linkedin.com/in/eduarchilon"
    })
})