$(document).ready(function(){
	$('#mySelect').change(function(){ 
		var selectedOption = $('#mySelect option:selected');
		$("#row").addClass("border colorblanco padding");  
		creacionEsqueleto();
		/*$("lima").on('change',function(e){
			//alert("hola");
		});*/
	});
	//funcionCreacion de elementos
	function creacionEsqueleto(){
  		//
		$("#divDos").append('<p class"text-left">Ingresa su nombre</p>');
		$("#divDos").append('<input type="text" class="margin" id="input" placeholder="Ingresa su nombre"></input>');
		$("#divDos").append('<button id="btnComprobar" class="btn btn-primary margin block">COMPROBAR</button>');
		$("#divUno").append('<img class="img-responsive" name="imagen" id="imagen" alt="Imagen_Alumna"></img>');
  		fotos();
  		//btnComprobar
		$("#btnComprobar").on('click',function(e){ 
			if(fotos() == $("#input").val){
				$("#divDos").append('<p class"text-left">¡Excelente Acertaste ! =D </p>');
			}else if(alumna[i] != $("#input").val){
				$("#divDos").append('<p class="text-center">¡Sigue intentando!</p>');
			}
		});
        $("#input").on("focus click", function(){
            $(this).val("");
        });
	};//cierra funcion de creaelementos
	//array
	function fotos(){
		//array imagenes
		var i = Math.round(Math.random()*6);
		var alumna=["img/naye.jpg","img/ori.jpg","img/mariana.jpg","img/okaydi.jpg","img/vannia.jpg","img/pao.jpg","img/yasury.jpg"]
		var imagen = $("#imagen").attr('src',alumna[i]);
			$("#divUno").append(imagen);
	}
});

