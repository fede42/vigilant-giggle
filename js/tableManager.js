$('#search-input').on('keyup', function() {
    var value = $(this).val()
    console.log('Value:', value)
    var filteredData = searchTable(value, myArray)
    buildTable(filteredData)
})

$('th').on('click', function() {
    var column = $(this).data('colname')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1);

    if (order == 'desc') {
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order", "asc");
        text += '&#9660'
    } else {
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order", "desc");
        text += '&#9650'
    }

    $(this).html(text)
    buildTable(myArray)
})

buildTable(myArray)

function searchTable(value, data) {
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()

        if (name.includes(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData
}

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
        var colname = `name-${i}`
        var colage = `year-${i}`
        var colbirth = `director-${i}`

        var row = `<tr>
            <td> <a href="video-player.html?index=${data[i].id}" id="movieId"> ${data[i].name}</td>
            <td class="text-light">${data[i].year}</td>
            <td class="text-light">${data[i].director}</td>
            <td> <a href="${data[i].imdb}">IMDb</td>
            </tr>`
        table.innerHTML += row
    }
}