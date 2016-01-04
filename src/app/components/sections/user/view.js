import React from "react";
import Card from "../../card";
import moment from "moment";

export default class CampaignView {
    static render() {
        const u = this.props.user.user;
        return <Card style={this.props.style} className={this.styles.container}>
            <section className={this.styles.avatar}>
                {this.props.user.profilePictureUrl && <img src={this.props.user.profilePictureUrl} /> || <span className={"mdi mdi-account"} />}
            </section>
            <section className={this.styles.name}>
                <h1>{u.first_name} {u.last_name}</h1>
                <span>
                    <a href="#" onClick={() => this.userProfileSubView("wishlist")}>Wish List</a>
                    <a href="#" onClick={() => this.userProfileSubView("campaigns")}>Campaigns started for {u.name}</a>
                </span>
            </section>
        </Card>;
    }
}