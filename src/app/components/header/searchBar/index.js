import BaseComponent from "../../baseComponent";
import { autobind } from "core-decorators";

const _opts = [
    {label: "Users", value: "users"},
    {label: "Visible Campaigns", value: "campaigns"},
];

export default class SearchBarComponent extends BaseComponent {

    state = {
        filter: _opts[0],
    }

    opts = _opts;

    @autobind
    handleFilterChange(filter) {
        this.setState({filter})
    }


    constructor(...args) {
        super(require, ...args);
    }
}