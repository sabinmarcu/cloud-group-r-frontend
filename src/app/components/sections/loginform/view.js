import React from "react";
import Card from "../../card";
export default class LoginFormViews {
    static render() {
        return <Card className={["small", this.styles.form].join(" ")}>
            <button className={this.styles.loginButton} onClick={this.doLogin}>
                <span className="mdi mdi-facebook"></span>
                Login
            </button>
        </Card>
    }
}