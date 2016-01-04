import BaseComponent from "../../baseComponent";
import $ from "jquery";
import { actions } from "../../../helpers/util";
import { connect } from "react-redux";

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
                this.setState({users: {...this.state.users, [id]: data}})
            })     
        }
    }

    loadUserProfile(id) {
        this.props.dispatch(actions.main.changeActiveView("userprofile", {id}));
    }

    state = {
        users: {},
    }
}