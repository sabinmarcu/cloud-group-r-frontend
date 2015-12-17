import React from "react";
import LoginForm from "../sections/loginform";
import CampaignList from "../sections/campaignList";
import UserList from "../sections/userList";

export default class PageManagerViews {
    static render() {
        return this.isLoggedIn && <div style={{marginTop: 55}}>
            <CampaignList />
            <UserList />
        </div> || <LoginForm loginHook={this.login} />;
    }
}