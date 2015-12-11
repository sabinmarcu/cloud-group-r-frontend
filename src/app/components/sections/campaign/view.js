import React from "react";
import Card from "../../card";
import moment from "moment";

export default class CampaignView {
    static user(user) {
        let u = this.props.getters.user(user);
        return <a onClick={() => alert("Stub for user navigation")}>{u.name}</a>;
    }

    static date(date) {
        let m = moment(date);
        return <a title={m.format()} href="#">
            {m.fromNow()}
        </a>
    }

    static render() {
        const c = this.props.campaign, pper = c.amountCollected / c.target * 100;
        return <Card style={this.props.style} className={this.styles.container}>
            <header className={this.styles.header}>{c.title}</header>
            <h4>Started for {this.views.user(c.targetUser)} by {this.views.user(c.startingUser)}</h4>
            <h4>Campain will end {this.views.date(c.endDate)} (started {this.views.date(c.startDate)})</h4> 
            {c.description && <span className={this.styles.description}>{c.description}</span>}
            <div className={this.styles.progress}>
                <div className={[
                    this.styles.complete, 
                    (pper > 70 && this.styles.green) || (pper > 40 && this.styles.yellow) || this.styles.red,
                ].join(" ")} style={{width: `${pper}%`}}>
                    {parseInt(pper)}%
                </div>
            </div>
            <footer>
                <h4>
                    <span style={{verticalAlign: "middle"}}>Contributors: </span>
                    {c.contributors.map(it => 
                        <span className={this.styles.bullet}>
                            {this.views.user(it.user)}
                        </span>
                    )}
                </h4>
            </footer>
        </Card>;
    }
}