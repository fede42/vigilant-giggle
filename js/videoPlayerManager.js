fillData(myArray)

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function fillData(data) {
    var index = getParameterByName('index');
    console.log(index);

    document.getElementById("txtTitle").innerHTML = `${data[index].name} - ${data[index].director} (${data[index].year})`
    document.getElementById("ifSource").src = `${data[index].source}`
    document.getElementById("btnImdb").href = `${data[index].imdb}`
}