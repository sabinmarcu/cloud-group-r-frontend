import React from "react";

export default class UserMenuViews {
    static render() {
        return <span className={this.styles.navMenu}>
            <li>
                <span className={"mdi mdi-settings"}></span>
                <ul>
                    <li>DEBUG: campaigns</li>
                    <li>DEBUG: users</li>
                    <li>Logout</li>
                </ul>
            </li>
            <li><span className={"mdi mdi-account"}></span></li>
        </span>
    }
}