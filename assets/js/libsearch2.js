function libSearch() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById("libInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("bibliography")[0];
    li = ul.getElementsByTagName("li");

    //if(filter.indexOf("=") < 0){ // basic query
        for(i = 0; i < li.length; i++){
            visible_span = li[i].getElementsByTagName("span")[0];
            others = li[i].getElementsByTagName("span")[1];
            textValue = visible_span.textContent || visible_span.innerText;
            if(others != undefined){
                tags = others.getElementsByTagName("tags")[0];
                if(tags != undefined)       textValue = textValue + " " + (tags.textContent || tags.innerText)
                readstatus = others.getElementsByTagName("readstatus")[0];
                if(readstatus != undefined) textValue = textValue + " " + (readstatus.textContent || readstatus.innerText)
            }
            if(textValue.toUpperCase().indexOf(filter) > -1) li[i].style.display = "";
            else                                             li[i].style.display = "none";
        }
    // }
    // else{ // advanced query
    //     qAuthor = "";
    //     qTitle = "";
    //     qStatus = "";
    //     qTags = "";
    //     author = "";
    //     title = "";
    //     status = "";
    //     tags = "";
    //     for(i = 0; i < li.length; i++){
    //         visible_span = li[i].getElementsByTagName("span")[0].innerText;
    //         split = visible_span.split(" - ", 2);
    //         if(split.length == 1) title = split[0];
    //         else{
    //             author = split[0];
    //             title = split[1];
    //         }
    //         others = li[i].getElementsByTagName("span")[1];
    //         if(others != undefined){
    //             tags = others.getElementsByTagName("tags")[0];
    //             if(tags != undefined) tags = tags.innerText;
    //             readstatus = others.getElementsByTagName("readstatus")[0];
    //             if(readstatus != undefined) readstatus = readstatus.innerText;
    //         }
    //     }
    //}
}