
      function visto(id) {
        var x=document.getElementById(id);
        x.setAttribute("onclick", "nonVisto()");
        if (x.id=="views"){
          x.innerHTML="Visto!";
          x.setAttribute("class", "btn btn-sm btn-warning");
        }

        else if (x.id=="read"){
          x.innerHTML="Letto!";
          x.setAttribute("class", "btn btn-sm btn-success");
        }

        else if (x.id=="red"){
          x.setAttribute("class", "btn btn-sm btn-danger");
        }

        else if (x.id=="blue"){
          x.setAttribute("class", "btn btn-sm btn-primary");
        }

        x.setAttribute("onclick", "nonVisto(id)");
      }

      function nonVisto(id) {
        var x=document.getElementById(id);
        if (x.id=="views"){
          x.innerHTML="Visto";
          x.setAttribute("class", "btn btn-sm btn-outline-warning");
        }
        else if (x.id=="read"){
          x.innerHTML="Letto";
          x.setAttribute("class", "btn btn-sm btn-outline-success");
        }

        else if (x.id=="red"){
          x.setAttribute("class", "btn btn-sm btn-outline-danger");
        }

        else if (x.id=="blue"){
          x.setAttribute("class", "btn btn-sm btn-outline-primary");
        }

        x.setAttribute("onclick", "visto(id)");
      }

      function log(nome, paragrafo) {
        var un = document.getElementById(nome).value;
        par=document.getElementById(paragrafo);
        par.innerHTML="Ciao "+un+". Log in effettuato con successo!";
      }
        