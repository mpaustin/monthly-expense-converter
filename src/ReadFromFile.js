import ProcessRows from './ProcessRows';

export default function ReadFromFile(file) {
    let text = '';
    let processed = [];

    const reader = new FileReader();
    reader.onload = (e) => {
        text = e.target.result;
        processed = ProcessRows(text);
    }
    reader.readAsText(file);

    return processed;
};