import ProcessRows from './ProcessRows';

export default function ReadFromFile(file, setDownload) {
    let text = '';

    const reader = new FileReader();
    reader.onload = (e) => {
        text = e.target.result;
        ProcessRows(text, setDownload);
    }
    reader.readAsText(file);
};