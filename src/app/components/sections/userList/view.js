import React from "react";
import User from "../user";

export default class FriendsListViews {
    static render() {
        return <section className={this.styles.list}>
            {this.state.users && this.state.users.length > 0 && this.state.users.filter(it => this.props.filter === "" || it.user.first_name.indexOf(this.props.filter) >= 0 || it.user.last_name.indexOf(this.props.filter) >= 0
            ).map(it => 
                <User user={it} />
            ) || <h1> No Users </h1>}
        </section>
    }
}