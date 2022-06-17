var xml = new XMLHttpRequest();
xml.open("GET", "https://api.ipify.org");
xml.send();
xml.addEventListener("loadend", loaded);

function loaded(e){
    WriteDb(xml.responseText);
}

function WriteDb(ip){
    alert(ip);
}