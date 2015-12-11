import BaseComponent from "../baseComponent";
import { connect } from "react-redux";
import { actions } from "../../helpers/util";
import { autobind } from "core-decorators";

@connect((state) => true && { id: state.main.id })
export default class PageManagerComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    @autobind
    login(id) {
        this.props.dispatch(actions.main.registerLogin(id));
        this.props.dispatch(actions.main.changeActiveView("default", id));
    }

    get isLoggedIn() {
        return this.props.id !== "";
    }
}