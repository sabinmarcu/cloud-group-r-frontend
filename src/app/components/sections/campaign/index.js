import BaseComponent from "../../baseComponent";
import $ from "jquery";
import { actions } from "../../../helpers/util";
import { connect } from "react-redux";
import { autobind } from "core-decorators";

@connect(state => true && {})
export default class CampaignComponent extends BaseComponent {
    componentDidMount() {
        this.getUser(this.props.campaign.initiator);
        this.getUser(this.props.campaign.targetUser);
        this.props.campaign.contributorMap.map(it => this.getUser(it.contributor_id))
    }

    constructor(...args) {
        super(require, ...args);
    }

    getUser(id) {
        if (!this.state.users[id]) {
            $.get(`${this.__website__url}users/${id}`, data => {
                if (!this.__unmounted) {
                    this.setState({users: {...this.state.users, [id]: data}})
                }
            })     
        }
    }

    loadUserProfile(id) {
        this.props.dispatch(actions.main.changeActiveView("userprofile", {id}));
    }

    @autobind
    sendPaymentData(e) {
        $.ajax({
            url: `${this.__website__url}campaigns/?id=${this.props.campaign.id}`,
            method: "PUT",
            data: this.refs.amount.value,
        })
        e.preventDefault()
    }

    state = {
        users: {},
    }
}