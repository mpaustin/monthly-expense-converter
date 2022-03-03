import { mintCategories } from "./mintCategories";

export default function ProcessRows(text) {
    const delimiter = ',';
    const processed = [];

    const rows = text.slice(text.indexOf('\n') + 1).split('\n');

    // set array of matched values
    // iterate through that array, for each value filter and assign to a tuples of [category, summedAmount]
    for (let i = 0; i < mintCategories.length; i++) {
        let catTotal = 0.00;
        rows.forEach(row => {
            const rowArr = row.split(delimiter);
            let rowCat = 'No category found';
            if (rowArr[5]) {
                rowCat = rowArr[5].replaceAll('"','');
            }
            if (rowCat === mintCategories[i]) {
                catTotal += Number(rowArr[3].replaceAll('"', ''));
            }
        });
        processed.push([mintCategories[i], catTotal.toFixed(2)]);
    };

    console.log('processed', processed);
    return processed;
};