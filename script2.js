function goToPage(){
    var newUrl = "index1.html";
    window.location.replace(newUrl);
}

function clearContent(){
    document.body.innerHTML = '';
    load_layout();
}

function load_layout(){
    var newContainer = document.createElement("p");
    newContainer.setAttribute("id", "content");
    document.body.appendChild(newContainer);
    document.getElementById("content").innerHTML = '<div class="flex-container">'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
    '<div>'+
        '<img src="/resources/Oakham-waterproof-jacket-navy.jpg">'+
        '<p>men jacket</p>'+
    '</div>'+
'</div>';
}