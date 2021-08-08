function arrayToCSV(dataSources, delimiter) {
    let csv = '';
    for (let i = 0; i < dataSources.length; i++) {
        let rows = dataSources[i];
        for (let j = 0; j < rows.length; j++) {
            let row = rows[j];
            csv += row;
            if (j < rows.length - 1) {
                csv += delimiter;
            } else {
                csv += '\n';
            }
        }
    }
    return csv;
}