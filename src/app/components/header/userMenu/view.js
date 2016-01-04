import React from "react";

export default class UserMenuViews {
    static render() {
        return <span className={this.styles.navMenu}>
            <li>
                <span className={"mdi mdi-settings"}></span>
                <ul>
                    <li onClick={this.props.changeViewTrigger && () => this.props.changeViewTrigger("campaigns")} >DEBUG: campaigns</li>
                    <li onClick={this.props.changeViewTrigger && () => this.props.changeViewTrigger("users")} >DEBUG: users</li>
                    <li onClick={this.logout}>Logout</li>
                </ul>
            </li>
            <li onClick={this.loadUserProfile}>
                {this.props.userData && <img src={this.props.userData.picture} /> || <span className={"mdi mdi-account"}></span>}
            </li>
        </span>
    }
}