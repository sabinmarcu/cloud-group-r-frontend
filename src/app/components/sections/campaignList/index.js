import BaseComponent from "../../baseComponent";
import fakedata from "../../fakedata.json";
import { autobind } from "core-decorators";

export default class CampaignList extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    get campaigns() {
        return this.props.data || fakedata.campaigns || [];
    }

    get users() {
        return this.props.users || fakedata.users || [];
    }

    @autobind
    getUser(id) {
        const filt = this.users.filter(it => it.id === id)
        return filt && filt[0];
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