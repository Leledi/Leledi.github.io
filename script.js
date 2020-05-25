
      function visto(id) {
        var x=document.getElementById(id);
        x.setAttribute("onclick", "nonVisto()");
        if (x.id=="views"){
          x.innerHTML="Visto!";
          x.setAttribute("class", "btn btn-sm btn-warning");
        }
        else {
          x.setAttribute("class", "btn btn-sm btn-danger");
        }
        x.setAttribute("onclick", "nonVisto(id)");
      }

      function nonVisto(id) {
        var x=document.getElementById(id);
        if (x.id=="views"){
          x.innerHTML="Visto";
          x.setAttribute("class", "btn btn-sm btn-outline-warning");
        }
        else {
          x.setAttribute("class", "btn btn-sm btn-outline-danger");
        }
        x.setAttribute("onclick", "visto(id)");
      }
