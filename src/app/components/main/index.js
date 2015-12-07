import React from "react";
import EnhancedComponent from "../baseComponent";
import _ from "lodash";
import { autobind } from "core-decorators";
import { connect } from "react-redux";

import { actions } from "../../helpers/util";

@connect(state => {
    return {
        subtitle: state.main.subtitle,
    }
})
export default class Main extends EnhancedComponent {

    state = {
        title: "Coi",
    }

    constructor(...args) {
        super(require, ...args);
    }

    dragStart(e) {
        console.log("START", e);
    }

    dragEnd(e) {
        console.log("END", e);
    }

    @autobind
    setTitle() {
        this.setState({ title: this.refs.title.value })
    }

    @autobind
    setSubtitle() {
        this.props.dispatch(actions.main.setSubtitle(this.refs.subtitle.value))
    }
}