import React from "react";
import LoginForm from "../sections/loginform";
import CampaignList from "../sections/campaignList";
import UserList from "../sections/userList";
import UserProfile from "../sections/userProfile";

export default class PageManagerViews {
    static render() {
        console.log("VIEW", this.props.view);
        return (this.isLoggedIn && 
            ((
                this.props.view === "campaigns" || 
                this.props.view === "default") 
            && <CampaignList />) || 
            this.props.view === "users" && <UserList /> ||
            this.props.view === "userprofile" && <UserProfile user={this.props.subview} /> 
        ) || <LoginForm loginHook={this.login} id={this.props.id} ownDataHook={this.registerOwnData} />;
    }
}