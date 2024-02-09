import { externalCategories } from "./externalCategories";
import { categoryMappings, fireCategories } from "./categoryMappings";

export default function ProcessRows(text, setDownload) {
    const delimiter = ',';
    const mintSummed = [];
    const fireSummed = {};
    const final = [['Category', 'Amount']];

    const rows = text.slice(text.indexOf('\n') + 1).split('\n');

    // before importing expenses csv, need to replaceAll commas with null

    // set array of matched values
    // iterate through that array, for each category sum up the total and assign to a tuples of [category, summedAmount]
    for (let i = 0; i < externalCategories.length; i++) {
        let catTotal = 0.00;
        rows.forEach(row => {
            const rowArr = row.split(delimiter);
            console.log(rowArr);
            let rowCat = 'No category found';
            if (rowArr[5]) {
                rowCat = rowArr[3].replaceAll('\"','');
            }
            if (rowCat === externalCategories[i]) {
                catTotal += Number(rowArr[5].replaceAll('"', ''));
            }
        });
        mintSummed.push([externalCategories[i], catTotal.toFixed(2)]);
    };

    // for each FIRE category, sum up total of external categories and assign to tuples of [category, total]
    categoryMappings.forEach(category => {
        let total = 0.00;
        mintSummed.forEach(extCategory => {
            if (extCategory[0] === category[0]) {
                total += Number(extCategory[1]);
            }
        });
        
        if (fireSummed[category[1]]) {
            fireSummed[category[1]] += total;
        } else {
            fireSummed[category[1]] = total;
        }
    });

    // create csv export array in correct order
    fireCategories.forEach(fireCategory => {
        const value = Math.abs(fireSummed[fireCategory]?.toFixed(2) ?? 0.00);
        final.push([fireCategory, value]);
    });
    
    setDownload(final);
};