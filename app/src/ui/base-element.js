export class BaseElement {

    constructor() {
        this.$element = null; // jQuery object
    }

    appendToElement($el) {
        this.createElement();
        $el.append(this.$element);
        this.enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.$element = $(s);
    }

    getElementString() {
        throw 'Please overrride getElementString() in BaseElement';
    }

    // notify MDL that the element has been added dynamically so that any js gets attached to it.
    enableJS() {
        componentHandler.upgradeElement(this.$element[0]);
    }

}