import { doc } from '../src/variables';

let test = () => {

    for (let index = 0; index < 5; index++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'asddfgdf';
        newDiv.style = `height: 20px; widht: 300px;`;
        doc.appendChild(newDiv);
    }
    doc.style = `border: 10px solid blue`;
    return doc;
};

export {
    test
}