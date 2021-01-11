function clicked(){
    console.log('clicked')
    // var request = new XMLHttpRequest;
    // request.open('GET','person.json',true);
    
    // request.onload = function(){
    //     var data = JSON.parse(request.responseText);
    //     data.forEach(element => {
    //         console.log(element.name)  
    //         console.log(element.email)
    //     });
    // }

    // request.send();

    var lists = document.createElement('ul')

    fetch('person.json')
        .then(respose => respose.json())
        .then(data => {
            data.forEach(element => {
                var list = document.createElement('li')
                list.innerHTML = element.name;
                lists.appendChild(list);
            });
        })

        document.getElementById('demo').appendChild(lists)

}