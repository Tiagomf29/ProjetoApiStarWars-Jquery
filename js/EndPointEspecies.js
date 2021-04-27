class EndPointEspecies{

    consultaEspecies(){

        $.ajax({

            url : "https://swapi.dev/api/species/?format=json",
            type : "GET",
            success : function(response){

                $("table").append($(`   
                                    <thead>
                                        <tr>
                                            <td>Nome</td><td>Classificação</td><td>Designação</td><td>Altura média</td>
                                            <td>Cor de pele</td><td>Cor de cabelo</td><td>Cor de olhos</td>
                                            <td>Média de vida</td><td>Planeta natal</td><td>Lingua</td>
                                        </tr>                   
                                    </thead>
                                    `));
               
                $("table").css("position","absolute").css("left","440px");

                response.results.forEach(element => {
                     
                    $("table").append($(`
                                        <tbody>
                                            <tr>
                                                <td>${element.name}</td><td>${element.classification}</td><td>${element.designation}</td><td>${element.average_height}</td>
                                                <td>${element.skin_colors}</td><td>${element.hair_colors}</td><td>${element.eye_colors}</td>
                                                <td>${element.average_lifespan}</td><td>${element.homeworld}</td><td>${element.language}</td>
                                            </tr>   
                                        </tbody>
                                        `))                  
                });

            }

        });



    }


}