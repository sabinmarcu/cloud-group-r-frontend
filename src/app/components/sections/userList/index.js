import BaseComponent from "../../baseComponent";
import fakedata from "../../fakedata.json";
import { autobind } from "core-decorators";
import { connect } from "react-redux";
import $ from "jquery";

@connect(state => true && { filter: state.main.filter } )
export default class UserList extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    componentDidMount() {
        let req = $.get(`${this.__website__url}users/friends`);
        req.done(data => this.setState({users: data}))
    }
    state = {
        users: [],
    }
}