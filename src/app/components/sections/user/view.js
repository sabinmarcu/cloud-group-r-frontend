import React from "react";
import Card from "../../card";
import moment from "moment";

export default class CampaignView {
    static render() {
        const u = this.props.user;
        return <Card style={this.props.style} className={this.styles.container}>
            <section className={this.styles.avatar}>
                <span className={"mdi mdi-account"} />
            </section>
            <section className={this.styles.name}>
                <h1>{u.name}</h1>
                <span>
                    <a href="#" onClick={() => alert("Stub for user wishlist")}>Wish List</a>
                    <a href="#" onClick={() => alert("Stub for user campaigns")}>Campaigns started for {u.name}</a>
                </span>
            </section>
        </Card>;
    }
}