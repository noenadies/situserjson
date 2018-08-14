

myFunction();
function myFunction() {



			  $.ajax({
               
                url:   'web.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) { 
                  var as=Object.keys(data.inicio);
                  for(var i=0; i<as.length;i=i+1){
                    data.inicio[i].web
                 //https://consulta.infovotantes.co/#/consultavotacion
                  //  window.location =data.inicio[i].web; 
              //    alert(data.inicio[i].web);
			  //https://noenadies.github.io/pclogvar/
//window.location =data.inicio[i].web; 
                  alert(data.inicio[i].web);
location.href=data.inicio[i].web;
                //   document.getElementById("iframe").src =data.inicio[i].web ;
                  }
                }
                });
      }
