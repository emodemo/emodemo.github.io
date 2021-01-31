function libSearch() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById("libInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("bibliography");
    
    for(j = 0; j < ul.length; j++){      
        li = ul[j].getElementsByTagName("li");
        for(i = 0; i < li.length; i++){
            visible_span = li[i].getElementsByTagName("span")[0];
            others = li[i].getElementsByTagName("span")[1];
            textValue = visible_span.textContent || visible_span.innerText;
            if(others != undefined){
                tags = others.getElementsByTagName("tags")[0];
                if(tags != undefined)       textValue = textValue + " " + (tags.textContent || tags.innerText)
                read = others.getElementsByTagName("readstatus")[0];
                if(read != undefined) textValue = textValue + " " + (read.textContent || read.innerText)
            }
            if(textValue.toUpperCase().indexOf(filter) > -1) li[i].style.display = "";
            else                                             li[i].style.display = "none";
        }
    }
}