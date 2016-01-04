import React from "react";
import SearchBar from "./searchBar";
import UserMenu from "./userMenu";

export default class HeaderViews {
    static get searchBar() {
        return <SearchBar />;
    }
    static get userControlls() {
        return <UserMenu changeViewTrigger={ this.changeView } userData={this.props.user} />;
    }
    static render() {
        return <span className={this.styles.wrapper}>
            <span className={this.styles.left} onClick={() => this.changeView("default")}><img src="/images/Logo.png" alt="Logo Placeholder"/></span>
            {this.isLoggedIn && [
                <span className={this.styles.center}>{this.views.searchBar}</span>,
                <span className={this.styles.right}>{this.views.userControlls}</span>,
            ]}
        </span>
    }
}