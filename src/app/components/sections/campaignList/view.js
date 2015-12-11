import React from "react";
import Campaign from "../campaign";

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
            {this.campaigns && this.campaigns.length > 0 && this.campaigns.map(it => 
                <Campaign campaign={it} getters={{user: this.getUser, item: this.getItem}} />
            ) || <h1> No Campaigns </h1>}
        </section>
    }
}