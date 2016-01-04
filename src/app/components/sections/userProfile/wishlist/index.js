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
            data: ["name", "eventName", "description", "price"].reduce((prev, it) => (prev[it] = this.refs[it].value) && prev || prev, {}),
        });
        req.done((...args) => this.props.refreshFunc && this.props.refreshFunc())
        req.fail((...arsg) => console.log("FAIL", ...args))
    }

    @autobind
    newCampaign(id) {
        let obj = ["name-" + id, "endDate-" + id].reduce((prev, it) => (prev[it.replace("-" + id, "")] = this.refs[it].value) && prev || prev, {});
        obj.itemId = id;
        let req = $.ajax({
            url: `${this.__website__url}campaigns/`, 
            type: "POST",
            crossDomain: true,
            data: obj,
        });
        req.done((...args) => this.props.refreshHook && this.props.refreshHook())
        req.fail((...arsg) => console.log("FAIL", ...args))
    }
 }