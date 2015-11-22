import React from "react";
import EnhancedComponent from "../baseComponent";
import _ from "lodash";

export default class Main extends EnhancedComponent {

    constructor(...args) {
        super(require, ...args);
    }

    dragStart(e) {
        console.log("START", e);
    }

    dragEnd(e) {
        console.log("END", e);
    }
}
