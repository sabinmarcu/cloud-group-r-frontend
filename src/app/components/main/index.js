import React from "react";
import EnhancedComponent from "../baseComponent";
import _ from "lodash";
import { autobind } from "core-decorators";
import { connect } from "react-redux";

import { actions } from "../../helpers/util";

// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

@connect(state => {
    return {
        subtitle: state.main.subtitle,
    }
})
export default class Main extends EnhancedComponent {

    // childContextTypes = {
    //     muiTheme: React.PropTypes.object,
    // }

    // childContext = {
    //     muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    // }

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