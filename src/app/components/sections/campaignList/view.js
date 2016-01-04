import React from "react";
import Campaign from "../campaign";

export default class CampaignListViews {
    static render() {
        return <section className={this.styles.list}>
            {this.state.campaigns && this.state.campaigns.length > 0 && this.state.campaigns.filter(it => new Date(it.endDate) - (new Date()) >= 0 && (this.props.filter === "" || it.name.indexOf(this.props.filter) >= 0 || this.state.itemsMap[it.id] && (this.state.itemsMap[it.id].name.indexOf(this.props.filter) >= 0 || this.state.itemsMap[it.id].description.indexOf(this.props.filter) >= 0))
            ).map(it => 
                <Campaign campaign={it} isMe={this.props.isMe} item={this.state.itemsMap[it.id]} />
            ) || <h1> No Campaigns </h1>}
        </section>
    }
}