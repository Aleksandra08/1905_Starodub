import './hw14.scss';

class Acc {
    constructor(element) {
        this.element = element;
        this.render();
        this.control.addEventListener('click', () => this.openPanel());
    }

    openPanel() {
        this.element.classList.add('panel_active');
    }


    render() {
        this.control = document.createElement('button');
        this.output = document.createElement('div');

        this.control.classList.add('accordion');
        this.output.classList.add('panel');

        this.control.textContent = 'Section 1';
        this.output.textContent = '<p> Lorem ipsum...</p>';

        this.element.classList.add('accord');

        this.element.appendChild(this.control);
        this.element.appendChild(this.output);

    }
}

let acc = new Acc(document.querySelector('#accord'));




