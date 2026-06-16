import { monarchToFireMappings, MappingOrder, FireCategories } from './categoryMappings';

function parseCsvLine(line) {
    const values = [];
    let currentValue = '';
    let isInsideQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (isInsideQuotes && nextChar === '"') {
                currentValue += '"';
                i += 1;
            } else {
                isInsideQuotes = !isInsideQuotes;
            }
        } else if (char === ',' && !isInsideQuotes) {
            values.push(currentValue.trim());
            currentValue = '';
        } else {
            currentValue += char;
        }
    }

    values.push(currentValue.trim());

    return values;
}

function findHeaderIndex(headers, headerName) {
    return headers.findIndex(header => header.replaceAll('"', '').trim().toLowerCase() === headerName);
}

export default function ProcessRows(text, setDownload) {
    const monarchSummed = [];
    const fireSummed = {};
    const final = [['Category', 'Amount']];
    const rows = text.split(/\r?\n/).filter(row => row.trim());
    const headers = parseCsvLine(rows[0] ?? '');
    const categoryIndex = findHeaderIndex(headers, 'category');
    const ownerIndex = findHeaderIndex(headers, 'owner');
    const amountIndex = findHeaderIndex(headers, 'amount');

    rows.slice(1).forEach(row => {
        const rowArr = parseCsvLine(row);

        if (categoryIndex >= 0 && amountIndex >= 0 && rowArr.length > Math.max(categoryIndex, amountIndex)) {
            const monarchCategory = rowArr[categoryIndex].replaceAll('"', '').trim();
            const owner = ownerIndex >= 0 ? rowArr[ownerIndex].replaceAll('"', '').trim() : '';
            const amount = rowArr[amountIndex].replaceAll('"', '').trim();

            if (monarchCategory && amount && monarchCategory !== 'Category') {
                const parsedAmount = Number(amount);
                const sharedMultiplier = owner === 'Shared' ? 0.5 : 1;
                const numAmount = parsedAmount * sharedMultiplier;

                if (!isNaN(numAmount)) {
                    const existingIndex = monarchSummed.findIndex(item => item[0] === monarchCategory);
                    if (existingIndex >= 0) {
                        monarchSummed[existingIndex][1] = (Number(monarchSummed[existingIndex][1]) + numAmount).toFixed(2);
                    } else {
                        monarchSummed.push([monarchCategory, numAmount.toFixed(2)]);
                    }
                }
            }
        }
    });

    monarchSummed.forEach(monarchCategory => {
        const monarchCatName = monarchCategory[0];
        const amount = Number(monarchCategory[1]);
        const mapping = monarchToFireMappings.find(mappingItem => mappingItem[0] === monarchCatName);

        if (mapping) {
            const fireCategory = mapping[1];
            if (fireSummed[fireCategory]) {
                fireSummed[fireCategory] += amount;
            } else {
                fireSummed[fireCategory] = amount;
            }
        } else if (fireSummed[FireCategories.MISC]) {
            fireSummed[FireCategories.MISC] += amount;
        } else {
            fireSummed[FireCategories.MISC] = amount;
        }
    });

    MappingOrder.forEach(fireCategory => {
        const value = Math.abs(fireSummed[fireCategory]?.toFixed(2) ?? 0.00);
        final.push([fireCategory, value]);
    });

    console.log('Monarch categories found:', monarchSummed);
    console.log('Fire categories mapped:', fireSummed);
    console.log('Final output:', final);

    setDownload(final);
}
