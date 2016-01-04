import React from "react";
import CampaignList from "../campaignList";
import WishList from "./wishlist";

export default class UserProfileViews {
    static get content() {
        return this.props.user.subview === "wishlist" && <WishList list={this.state.wishlist} isMe={this.isMe} refreshFunc={this.refresh} user={this.props.user} /> || this.isMe && <CampaignList from={this.props.id} /> || <CampaignList isMe={this.isMe} for={this.state.user.id} />
    }
    static render() {
        return this.state.user && <div className={this.styles.container}>
            <h1 className={[this.styles.name, this.styles.cap].join(" ")}>{this.state.user.user.first_name} {this.state.user.user.last_name}</h1>
            <nav className={[this.styles.nav, this.styles.cap].join(" ")}>
                <li className={this.styles.listItem} onClick={() => this.selectSubview("campaigns")} >Campaigns {this.isMe && "Started by Me" || "List"}</li>
                <li className={this.styles.listItem} onClick={() => this.selectSubview("wishlist")} >Wish List</li>
            </nav>
            {this.views.content}
        </div>
    }
}