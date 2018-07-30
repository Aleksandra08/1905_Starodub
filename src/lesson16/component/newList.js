import {Ajax} from "../utils/ajax";

export class newList {
    constructor(target) {
        this.target = target;
        this.render();
        Ajax.get(
            'http://localhost:4001/comments',
            (resp) => {
                console.log(resp);
                this.renderList(resp);
            },
            (e) => {
                console.log(e);
            });
    }

    render() {
        this.ul = document.createElement('ul');
        this.target.appendChild(this.ul);
        this.target.addEventListener('click', () => {
        });
    }

    renderList(list) {
        list.forEach((item) => {
            const li = document.createElement('li');
            const author = document.createElement('div');
            const date = document.createElement('span');
            const text = document.createElement('span');

            li.textContent = item.title;
            author.textContent = item.author;
            date.textContent = item.date;
            text.textContent = item.text;

            li.appendChild(author);
            li.appendChild(date);
            li.appendChild(text);
            this.ul.appendChild(li);
        })
    }
}