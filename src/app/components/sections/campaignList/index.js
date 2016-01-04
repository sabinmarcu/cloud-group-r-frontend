import BaseComponent from "../../baseComponent";
import fakedata from "../../fakedata.json";
import { autobind } from "core-decorators";
import { connect } from "react-redux";
import $ from "jquery";

@connect(state => true && { filter: state.main.filter })
export default class CampaignList extends BaseComponent {
    componentDidMount() {
        $.get(`${this.__website__url}campaigns/${this.props.for && `for/?id=${this.props.for}`}`, (campaigns) => {
            this.setState({campaigns: campaigns});
            campaigns.map(it => 
                $.get(`${this.__website__url}items/?id=${it.item}`, data => {
                    this.setState({itemsMap: {...this.state.itemsMap, [it.id]: data} })
                })
            )
        })
    }

    constructor(...args) {
        super(require, ...args);
    }

    state = {
        campaigns: [],
        itemsMap: {},
    }
}