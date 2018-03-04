import {
    BaseElement
}
from './base-element.js';

export class DataTable extends BaseElement {

    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }

    getElementString() {

        let headers = this.headers.reduce((acc, curr) => acc + `<th class="mdl-data-table__cell--non-numeric">${curr}</th>`, '');

        const col = (item, key) => {
            return `<td class="mdl-data-table__cell--non-numeric">${item[key]}</td>`
        }

        const row = (item, keys) => {
            return keys.reduce((acc, curr) => acc + col(item, curr), '');
        }

        const rows = (items, keys) => {
            return items.reduce((acc, curr) => acc + `<tr>${row(curr, keys)}</tr>`, '');
        }

        let body = rows(this.data, this.headers);

        return `
                <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                  <thead>
                    <tr>
                      ${headers}
                    </tr>
                  </thead>
                  <tbody>
                    ${body}
                  </tbody>
                </table>

        `;

    }

}