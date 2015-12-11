import BaseComponent from "../baseComponent";
import { connect } from "react-redux";

@connect((state) => true && { id: state.main.id })
export default class HeaderComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args
            );
    }
    get isLoggedIn() {
        return this.props.id !== "";
    }
}