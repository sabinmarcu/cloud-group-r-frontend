import BaseComponent from "../../baseComponent";
import { autobind } from "core-decorators";
import $ from "jquery";
import { actions } from "../../../helpers/util";
import { connect } from "react-redux";

@connect(state => true && {id: state.main.id})
export default class UserMenuComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    @autobind
    logout() {
        let req = $.get(`${this.__website__url}users/logout/`);
        req.done(() => window.location = window.location)
    }

    @autobind
    loadUserProfile() {
        this.props.dispatch(actions.main.changeActiveView("userprofile", {id: this.props.id }))
    }
}