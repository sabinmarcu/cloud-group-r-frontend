import BaseComponent from "../baseComponent";
import { connect } from "react-redux";
import { actions } from "../../helpers/util";
import { autobind } from "core-decorators";

@connect((state) => true && { id: state.main.id, user: state.main.user })
export default class HeaderComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    get isLoggedIn() {
        return this.props.id !== "";
    }

    @autobind
    changeView(view, args) {
        this.props.dispatch(actions.main.changeActiveView(view, args));
    }
}