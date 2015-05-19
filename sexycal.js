'use strict';

/**
 * Default sexycal config values.
 */
var sexycalDefaults  = {

};


window.onload = function() {
    var sexycalInputs = document.getElementsByClassName('sexycal-input');

    for (var i = 0; i < sexycalInputs.length; i++) {
        sexycalInputs[i].onclick = sexycalDisplay;
    }
};

function sexycalDisplay() {
    var sexyCal = buildSexycal();

    document.body.appendChild(sexyCal);
}

function buildSexycal() {
    // Create wrapping div.
    var wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'sexycal-wrapper';

    // Create styles.
    var style = buildSexycalStyle();
    wrapperDiv.appendChild(style);

    // Create header.
    var header = document.createElement('span');
    header.className = 'sexycal-header';
    header.appendChild(document.createTextNode('January'));
    wrapperDiv.appendChild(header);

    // Create subheader.
    var subheader = document.createElement('span');
    subheader.className = 'sexycal-subheader';
    subheader.appendChild(document.createTextNode('2015'));
    wrapperDiv.appendChild(subheader);

    // Create hr.
    wrapperDiv.appendChild(document.createElement('hr'));

    // Create dates table.
    var datesTable = document.createElement('table');
    datesTable.className = 'sexycal-table';
    var datesTbody = document.createElement('tbody');

    var currentTr = document.createElement('tr');
    var k = 0;
    for (var i = 1; i <= 31; i++) {
        if (k >= 8) {
            datesTbody.appendChild(currentTr);
            currentTr = document.createElement('tr');
            k = 0;
        }
        var td = document.createElement('td');
        var tdContents = document.createTextNode(i);
        td.appendChild(tdContents);
        currentTr.appendChild(td);
        k++;
    }
    datesTbody.appendChild(currentTr);
    datesTable.appendChild(datesTbody);
    wrapperDiv.appendChild(datesTable);

    return wrapperDiv;
}

function buildSexycalStyle() {
    // Create styles.
    var style = document.createElement('style');
    var styles = document.createTextNode(
        '.sexycal-wrapper td:hover {' +
            'background-color: #E0E0E0' +
        '}' +
        '' +
        '.sexycal-wrapper td {' +
            'text-align: center' +
        '}' +
        '' +
        '.sexycal-wrapper * {' +
            'box-sizing: border-box;' +
            'font-family: sans-serif;' +
        '}' +
        '' +
        '.sexycal-header {' +
            'font-size: 3em;' +
            'height: 50px;' +
        '}' +
        '' +
        '.sexycal-subheader {' +
            'font-size: 1.5em;' +
        '}' +
        '' +
        '.sexycal-table {' +
            'height: 250px;' +
            'padding: 10px;' +
            'width: 300px;' +
        '}' +
        '' +
        '.sexycal-wrapper {' +
            'background-color: #F0F0F0;' +
            'border-radius: 20px;' +
            'width: 300px;' +
            'height: 300px;' +
        '}');
    style.appendChild(styles);
    return style
}
