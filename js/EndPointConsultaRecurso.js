class EndpointConsultaRecurso{

    consultaRecurso(){
        $("table").empty();
        $.ajax({
            url : "https://swapi.dev/api/?format=json",
            type: "GET",
            success: function(response){               
               /*Create html do cabeçalho da tabela dinamicamente */                
               $("table").append($(`<thead><tr><td>Descricao</td></tr></thead>`));
               /*Create html do corpo da tabela dinâmicamente*/                
               $("table").append($(`   
                                    <tbody> 
                                        <tr><td>${response.people}</td><tr> 
                                        <tr><td>${response.planets}</td><tr> 
                                        <tr><td>${response.films}</td><tr> 
                                        <tr><td>${response.species}</td><tr> 
                                        <tr><td>${response.vehicles}</td><tr>  
                                        <tr><td>${response.starships}</td><tr>   
                                    </tbody>       
                                    `
                                ));
                $("td").css("font-size","30px");
                $("table").css("position","absolute").css("left","600px");
                                         
            }      
        });
    }    
}