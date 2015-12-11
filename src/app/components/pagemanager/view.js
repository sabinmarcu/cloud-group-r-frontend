import React from "react";
import LoginForm from "../sections/loginform";
import CampaignList from "../sections/campaignList";

export default class PageManagerViews {
    static render() {
        return this.isLoggedIn && <CampaignList /> || <LoginForm loginHook={this.login} />;
    }
}