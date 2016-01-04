import BaseComponent from "../../baseComponent";
import { connect } from "react-redux";
import { actions } from "../../../helpers/util"
import { autobind } from "core-decorators";

@connect(state => true && {})
export default class UserComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    @autobind
    userProfileSubView(sv) {
        this.props.dispatch(actions.main.changeActiveView("userprofile", { id: this.props.user.id, subview: sv }))
    }
}