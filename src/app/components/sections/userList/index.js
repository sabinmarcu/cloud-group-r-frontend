import BaseComponent from "../../baseComponent";
import fakedata from "../../fakedata.json";
import { autobind } from "core-decorators";

export default class UserList extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    get users() {
        return this.props.data || fakedata.users || [];
    }

    get items() {
        return this.props.items || fakedata.items || [];
    }

    @autobind
    getItem(id) {
        const filt = this.items.filter(it => it.id === id)
        return filt && filt[0];
    }
}