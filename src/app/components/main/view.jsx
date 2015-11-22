import React from "react";
import Test from "../testform"

export default class MainViews {
    static render() { 
        return <div className={this.styles.appwrapper}>
            <Test/ >
        </div>
    }
}