var cliqueImagem = 1;

    window.onload = function(){
        endpointRecurso      = new EndpointConsultaRecurso();
        endpointPersonagem   = new EndpointPersonagem();
        endpointFilme        = new EndPointFilmes();
        endpointPlaneta      = new EndPointPlanetas();
        endpointVeiculo      = new EndPointVeiculos();
        endPointEspecie      = new EndPointEspecies();
        endPointNaveEstrelar = new EndPointNavesEstrelares();
        eventoProximaImagem();
        eventoLinks();        
    }

    function eventoLinks(){
        $("a").click(function(){
            limparBackgroundCorpoPagina();
            chamaEndpoint(this.id);
        });
    }

    function chamaEndpoint(link){
        IncluirNomeNaves(""); 
        switch (link) {            
            case "consultaTodos": 
                 endpointRecurso.consultaRecurso();
                 break;
            case "consultaPersonagens": 
                 endpointPersonagem.consultaPersonagens();
                 break; 
            case "consultaFilmes": 
                 endpointFilme.consultaFilmes();
                 break; 
            case "consultaPlanetas": 
                  endpointPlaneta.consultaPlanetas();
                 break;     
            case "consultaveiculos": 
                 endpointVeiculo.consultaVeiculos();
                 break;   
            case "consultaEspecies": 
                 endPointEspecie.consultaEspecies();
                 break;      
            case "consultaNaves": 
                 endPointNaveEstrelar.consultaNavesEstrelares();
                 break;                                                                                              
        
            default:
                break;
        }

    }

    function limparBackgroundCorpoPagina(){
        $("#corpo").css("backgroundImage","none");
        $("table").empty().css("display","table");        
    }

    function eventoProximaImagem(){
        $("#imgProxima").click(function(){
            mudaImagem();
        });
    }


    function mudaImagem(){
        $("table").empty().css("display","none");        
        switch (cliqueImagem) {
            case 1:
                $("#corpo").css("backgroundImage","url('img/cr90.png')");                
                IncluirNomeNaves("CR90 corvette");                
                cliqueImagem++;                                  
                break;
            case 2:
                $("#corpo").css("backgroundImage","url('img/Star Destroyer.png')");
                IncluirNomeNaves("Star Destroyer"); 
                cliqueImagem++;                                  
                break;
            case 3:
                $("#corpo").css("backgroundImage","url('img/Y-wing.png')");
                IncluirNomeNaves("Y-wing"); 
                cliqueImagem++;                                  
                break;
            case 4:
                $("#corpo").css("backgroundImage","url('img/nave.png')");
                IncluirNomeNaves("Millennium Falcon");
                cliqueImagem = 1;                                  
                break;                                            
        }
    }

    function IncluirNomeNaves(texto){
        $("span").empty();
        $("#corpo").append($("<span></span>").text(texto)).css("color","white");        
        $("span").css("font-size","60px").css("position","relative").css("top","460px").css("font-family","Calibri");
    }
