var  nav = document.getElementById('back');
      
      window.onscroll = function(){

      	if (window.pageYOffset >0) {

            back.style.filter = "drop-shadow(0 0 0.75rem #37D1F3)";   
            back.style.display = "flex";
            back.style.justifyContent = "center";
            back.style.alignItems = "center";
            back.style.position =  "fixed";
            back.style.right = "20px";
            back.style.bottom = "20px";
            back.style.zIndex = "10";
            
      	}
      	else{
            
            back.style.display = "none";
        
        }
      }

function menuOnClick() {
      document.getElementById("menu-bar").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
      }