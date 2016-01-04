import React from "react";
import Card from "../../card";
import moment from "moment";

export default class CampaignView {
    static user(user) {
        return <a onClick={() => this.loadUserProfile(user)}>{this.state.users[user] && `${this.state.users[user].user.first_name} ${this.state.users[user].user.last_name}` || "Unknown"}</a>;
    }

    static date(date) {
        let m = moment(date);
        return <a title={m.format()} href="#">
            {m.fromNow()}
        </a>
    }

    static render() {
        const c = this.props.campaign, i = this.props.item, pper = c.amountCollected / (i && i.price || 1) * 100;
        return <Card style={this.props.style} className={this.styles.container}>
            <header className={this.styles.header}>{i && i.name || c.name}</header>
            <h4>Started for {this.views.user(c.targetUser)} by {this.views.user(c.initiator)}</h4>
            {i && i.description && <span className={this.styles.description}>{i.description}</span>}
            <h4>Campaign will end {this.views.date(c.endDate)} (started {this.views.date(c.startDate)})</h4> 
            <div className={this.styles.progress}>
                <div className={[
                    this.styles.complete, 
                    (pper > 70 && this.styles.green) || (pper > 40 && this.styles.yellow) || this.styles.red,
                ].join(" ")} style={{width: `${pper >= 100 && 100 || pper}%`}}>
                    {parseInt(pper)}%
                </div>
            </div>
            <footer>
                <h4>
                    <span style={{verticalAlign: "middle"}}>Contributors: </span>
                    {this.props.campaign.contributorMap.map(it => 
                        <span className={this.styles.bullet}>
                            {this.views.user(it.contributor_id)}
                        </span>
                    )}
                </h4>
            </footer>
        </Card>;
    }
}