function arrayToHtmlList(array, id) {
    let element = document.querySelector('#' + id);
    let list = '';
    for (let i = 0; i < array.length; i++) {
        list += '<li>' + array[i] + '</li>';
    }
    element.innerHTML = list;
}