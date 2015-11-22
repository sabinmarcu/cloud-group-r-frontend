import React from "react";

export default class TestViews {
    static render() {
        return <span>
            <input type={"text"} placeholder={"First Name"} ref="firstname" />
            <input type={"text"} placeholder={"Second Name"} ref="secondname" />
            <button onClick={this.send}>Send</button>
        </span>
    }
}