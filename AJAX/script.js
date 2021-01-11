function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status === 200){
            
            // document.getElementById('demo').innerHTML = xhttp.responseText;
            
            // for xml
            var list= document.createElement('ul');
            var res = xhttp.responseXML;
            var person = res.getElementsByTagName('person')
            for(var i=0;i<person.length;i++){
                var listName = document.createElement('li');
                listName.innerHTML = person[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
                var listAge  = document.createElement('li');
                listAge.innerHTML = person[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
                list.appendChild(listName);
                list.appendChild(listAge);
            }

            document.getElementById('demo').appendChild(list);
        }
    };

    xhttp.open('GET','person.xml',true);
    // xhttp.open('GET','info.txt',true);
    xhttp.send();
    

}
