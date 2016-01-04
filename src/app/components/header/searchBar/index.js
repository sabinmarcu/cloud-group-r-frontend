import BaseComponent from "../../baseComponent";
import { autobind } from "core-decorators";
import { connect } from "react-redux";
import { actions } from "../../../helpers/util";

@connect(state => true && {filter: state.main.filter})
export default class SearchBarComponent extends BaseComponent {

    @autobind
    handleFilterChange(filter) {
        this.props.dispatch(actions.main.setFilter(filter.target.value));
    }


    constructor(...args) {
        super(require, ...args);
    }
}