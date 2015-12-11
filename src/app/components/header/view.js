import React from "react";
import SearchBar from "./searchBar";
export default class HeaderViews {
    static get searchBar() {
        return <SearchBar />;
    }
    static get userControlls() {
        return <h1> User Stuff </h1>
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