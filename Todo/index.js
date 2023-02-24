document.getElementsByClassName('addButton')[0].addEventListener('click',addList);



function addList(){

    var childContent;
    var content;
    var buttonContainer;
    var contentContainer;
    
    
    content = document.getElementsByClassName('input')[0].value;
    if(document.getElementsByClassName('input')[0].value == ''){
        return;
    }

    childContent = document.createElement('input');
    childContent.id = "input"
    childContent.onblur = function(){
        childContent.style.pointerEvents = "none";   
    }
    buttonContainer = document.createElement('div');
    contentContainer = document.createElement('div');
    contentContainer.style.width = "480px";
    contentContainer.style.display = "flex";
    contentContainer.style.alignItems = "center";
    contentContainer.style.borderBottom = "5px solid white";
    contentContainer.style.justifyContent = "space-between";
    contentContainer.style.margin = "1rem";
    contentContainer.style.paddingBottom = "0.6rem";
    
    contentContainer.appendChild(childContent)
    contentContainer.appendChild(buttonContainer);
    
    buttonContainer.style.marginLeft = "1rem";
    buttonContainer.style.alignSelf = "start";


    buttonContainer.innerHTML =  ` <input style="   margin-left: 1rem; color: blue; background-color: transparent; border: none; font-weight: 700;" type="button"
     name="edit" class="edit" id="edit" value="EDIT">
<input style=" color: red; background-color: transparent; margin-left: 1rem; border: none; font-weight: 700;" type="button" 
    name="delete" class="delete" id="delete" value="DELETE">`

    
    
    childContent.style.width = "70%";
    childContent.style.outline = "none";
    childContent.style.pointerEvents = "NONE";
    childContent.style.backgroundColor = "transparent";
    childContent.style.border = "none";
    childContent.style.overflow = "hidden";
    childContent.style.fontSize = "1rem";
    childContent.style.color = "white";
    childContent.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    
    
    childContent.value = content;
    document.getElementsByClassName('input')[0].value = "";
    document.getElementsByClassName('container')[0].appendChild(contentContainer);
    buttonContainer.childNodes[1].addEventListener('click', function(){
        childContent.style.pointerEvents = "all";
        childContent.select();
    });
    buttonContainer.childNodes[3].addEventListener('click',function(){
       ( this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode));
    });


   
}

