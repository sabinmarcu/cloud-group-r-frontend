import React from "react";
import SearchBar from "./searchBar";
import UserMenu from "./userMenu";

export default class HeaderViews {
    static get searchBar() {
        return <SearchBar />;
    }
    static get userControlls() {
        return <UserMenu />;
    }
    static render() {
        return <span className={this.styles.wrapper}>
            <span className={this.styles.left}>Logo Placeholder</span>
            {this.isLoggedIn && [
                <span className={this.styles.center}>{this.views.searchBar}</span>,
                <span className={this.styles.right}>{this.views.userControlls}</span>,
            ]}
        </span>
    }
}