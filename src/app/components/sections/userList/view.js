import React from "react";
import User from "../user";

export default class CampaignListViews {
    static user(id) {
        let user = this.getUser(id);
        return user && user.name || "User Not Found";
    }
    static item(id) {
        let item = this.getItem(id);
        return item && item.name || "Item Not Found";
    }
    static render() {
        return <section className={this.styles.list}>
            {this.users && this.users.length > 0 && this.users.map(it => 
                <User user={it} getters={{item: this.getItem}} />
            ) || <h1> No Users </h1>}
        </section>
    }
}