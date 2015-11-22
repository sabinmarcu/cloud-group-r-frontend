import React from "react";
import BaseComponent from "../baseComponent";
import { selfbind } from "../../helpers/decorators";
//import { connect } from "react-api-consumer";

export default class TestComponent extends BaseComponent {
    constructor(...args) {
        super(require, ...args);
    }

    @selfbind
    send() {
        console.log("SENDING", this.refs.firstname.value, this.refs.secondname.value);
    }
}