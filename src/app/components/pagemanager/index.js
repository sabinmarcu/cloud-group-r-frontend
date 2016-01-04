import BaseComponent from "../baseComponent";
import { connect } from "react-redux";
import { actions } from "../../helpers/util";
import { autobind } from "core-decorators";
import $ from "jquery";

@connect((state) => true && { id: state.main.id, view: state.main.activeView, subview: state.main.activeSubView })
export default class PageManagerComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    @autobind
    login(id) {
        this.props.dispatch(actions.main.registerLogin(id));
        this.props.dispatch(actions.main.changeActiveView("default", id));
    }

    @autobind
    registerOwnData(data) {
        this.props.dispatch(actions.main.registerOwnData(data));
        this.props.dispatch(actions.main.changeActiveView("default"));
    }

    get isLoggedIn() {
        return this.props.id !== "";
    }
}