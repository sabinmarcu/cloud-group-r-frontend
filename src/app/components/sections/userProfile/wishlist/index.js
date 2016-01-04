import BaseComponent from "../../../baseComponent";
import $ from "jquery";
import { autobind } from "core-decorators";

export default class WishListComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    @autobind
    newItem() {
        let req = $.ajax({
            url: `${this.__website__url}items/`, 
            type: "POST",
            crossDomain: true,
            data: Object.keys(this.refs).reduce((prev, it) => (prev[it] = this.refs[it].value) && prev || prev, {}),
        });
        req.done((...args) => console.log("SUCCESS", ...args))
        req.fail((...arsg) => console.log("FAIL", ...args))
    }
 }