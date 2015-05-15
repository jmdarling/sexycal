window.onload = function() {
    var sexycalInputs = document.getElementsByClassName('sexycal-input');

    for (var i = 0; i < sexycalInputs.length; i++) {
        sexycalInputs[i].onclick = sexycalDisplay;
    }
}

function sexycalDisplay(event) {
    var sexyCal = buildSexycal();

    document.body.appendChild(sexyCal);
}

function buildSexycal() {
    // Create wrapping div.
    var wrapperDiv = document.createElement("div");
    wrapperDiv.className = "sexycal-wrapper";

    // Create styles.
    var style = document.createElement("style");
    var styles = document.createTextNode(
        '.sexycal-wrapper {' +
        'background-color: #333333;' +
        'width: 30px;' +
        'height: 30px;' +
        '}');
    style.appendChild(styles);
    wrapperDiv.appendChild(style);

    return wrapperDiv;
}
