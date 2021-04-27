class EndPointFilmes{


    consultaFilmes(){

        $.ajax({

            url: "https://swapi.dev/api/films/?format=json",
            type: "GET",
            success : function(response){

               $("table").append($(`
                                        <thead>
                                            <tr>
                                                <td>Título</td><td>Episódio</td><td>Abertura</td><td>Diretor</td>
                                                <td >Produtor</td><td>Data Lançamento</td>
                                            </tr>                                     
                                        </thead>                                                   
                                    `));               

                response.results.forEach(element => {                                

                    $("table").append($(`
                                        <tr>
                                            <td id="titulo">${element.title}</td><td id="episodio">${element.episode_id}</td><td id="abertura">${element.opening_crawl}</td>
                                            <td id="diretor">${element.director}</td><td id="produtor">${element.producer}</td><td id="dtLan">${element.release_date}</td>
                                        </tr>  
                                        `));
                    
                    $("table").css("position","absolute").css("left","420px").css("text-align","center");
                });
            }
        });
    }
}