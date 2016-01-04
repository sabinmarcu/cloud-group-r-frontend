import BaseComponent from "../../baseComponent";
import { connect } from "react-redux";
import { autobind } from "core-decorators";
import { actions } from "../../../helpers/util";
import $ from "jquery";

@connect(state => true && { id: state.main.id })
export default class UserProfile extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }
    componentDidMount() {
        this.refresh(this.props);
    }
    componentWillReceiveProps(props) {
        this.refresh(props);
    }
    refresh(props) {
        let req = $.get(`${this.__website__url}users/${props.user.id}`);
        req.done(user => {
            this.setState({user})
            console.log("GOT USER", user)
            user.itemList.map(item => {
                console.log("GRABBING", item)
                let req = $.get(`${this.__website__url}items/?id=${item}`)
                req.done(it => this.setState({wishlist: {...this.state.wishlist, [item]: it}}))
            })
        })
    }
    @autobind
    selectSubview(sv) {
        this.props.dispatch(actions.main.changeActiveView("userprofile", { id: this.props.user.id, subview: sv }))
    }

    state = {
        wishlist: {},
        user: null,
    }
}