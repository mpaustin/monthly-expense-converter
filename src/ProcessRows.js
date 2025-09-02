import { monarchToFireMappings, MappingOrder, FireCategories } from './categoryMappings';

export default function ProcessRows(text, setDownload) {
    const delimiter = ',';
    const monarchSummed = [];
    const fireSummed = {};
    const final = [['Category', 'Amount']];

    const rows = text.slice(text.indexOf('\n') + 1).split('\n');

    // Process Monarch-exported CSV format
    // Column 2: Merchant, Column 3: Category, Column 7: Amount
    rows.forEach(row => {
        if (row.trim()) {  // Skip empty rows
            const rowArr = row.split(delimiter);
            console.log(rowArr);
            
            if (rowArr.length >= 8) {  // Ensure we have enough columns
                const monarchCategory = rowArr[2].replaceAll('"', '').trim();  // Category is column 3 (index 2)
                const amount = rowArr[6].replaceAll('"', '').trim();  // Amount is column 7 (index 6)
                
                if (monarchCategory && amount && monarchCategory !== 'Category') {  // Skip header row
                    const numAmount = Number(amount);
                    if (!isNaN(numAmount)) {
                        // Find if this category already exists in monarchSummed
                        const existingIndex = monarchSummed.findIndex(item => item[0] === monarchCategory);
                        if (existingIndex >= 0) {
                            // Add to existing category
                            monarchSummed[existingIndex][1] = (Number(monarchSummed[existingIndex][1]) + numAmount).toFixed(2);
                        } else {
                            // Add new category
                            monarchSummed.push([monarchCategory, numAmount.toFixed(2)]);
                        }
                    }
                }
            }
        }
    });

    // Map Monarch categories to Fire categories and sum up totals
    monarchSummed.forEach(monarchCategory => {
        const monarchCatName = monarchCategory[0];
        const amount = Number(monarchCategory[1]);
        
        // Find the corresponding Fire category mapping
        const mapping = monarchToFireMappings.find(mapping => mapping[0] === monarchCatName);
        
        if (mapping) {
            const fireCategory = mapping[1];
            if (fireSummed[fireCategory]) {
                fireSummed[fireCategory] += amount;
            } else {
                fireSummed[fireCategory] = amount;
            }
        } else {
            // If no mapping found, add to Miscellaneous
            if (fireSummed[FireCategories.MISC]) {
                fireSummed[FireCategories.MISC] += amount;
            } else {
                fireSummed[FireCategories.MISC] = amount;
            }
        }
    });

    // create csv export array in correct order
    MappingOrder.forEach(fireCategory => {
        const value = Math.abs(fireSummed[fireCategory]?.toFixed(2) ?? 0.00);
        final.push([fireCategory, value]);
    });
    
    console.log('Monarch categories found:', monarchSummed);
    console.log('Fire categories mapped:', fireSummed);
    console.log('Final output:', final);
    
    setDownload(final);
};