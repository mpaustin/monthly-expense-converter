import { mintCategories } from "./mintCategories";
import { categoryMappings } from "./categoryMappings";

export default function ProcessRows(text) {
    const delimiter = ',';
    const mintSummed = [];
    const fireSummed = {};

    const rows = text.slice(text.indexOf('\n') + 1).split('\n');

    // set array of matched values
    // iterate through that array, for each category sum up the total and assign to a tuples of [category, summedAmount]
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
        mintSummed.push([mintCategories[i], catTotal.toFixed(2)]);
    };

    // for each FIRE category, sum up total of mint categories and assign to tuples of [category, total]
    categoryMappings.forEach(cat => {
        let total = 0.00;
        mintSummed.forEach(mintCat => {
            if (mintCat[0] === cat[0]) {
                total += Number(mintCat[1]);
            }
        });
        if (fireSummed[cat[1]]) {
            fireSummed[cat[1]] += total;
        } else {
            fireSummed[cat[1]] = total;
        }
    });

    // truncate each amount to two decimal places
    const categories = Object.keys(fireSummed);
    categories.forEach(cat => {
        fireSummed[cat] = fireSummed[cat].toFixed(2);
    })

    console.log('fireSummed', fireSummed);
    return fireSummed;
};