var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<title>ABC</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");
var lists  = document.createElement('ul');


// xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
var arr = xmlDoc.getElementsByTagName("title");
for(var i=0;i<arr.length;i++){
    var list  = document.createElement('li');
    list.innerHTML = arr[i].childNodes[0].nodeValue;
    lists.appendChild(list);
}


document.getElementById('demo').appendChild(lists);

