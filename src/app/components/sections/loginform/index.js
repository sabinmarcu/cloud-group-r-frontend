import BaseCompoennt from "../../baseComponent";
import { autobind } from "core-decorators";
import $ from "jquery";

export default class LoginComponent extends BaseCompoennt {
    constructor(...args) {
        super(require, ...args)
    }

    componentDidMount() {
        FB.getLoginStatus(this.checkLogin)
        // this.checkLogin();
    }

    @autobind 
    doLogin() {
        FB.login(this.checkLogin, { scope: 'public_profile,email,user_friends' });
        // this.checkLogin();

    }

    @autobind
    async checkLogin(res) {

        
        if (res && res.status && res.status === "connected") {
            const token = res.authResponse.accessToken;
            let req = $.get(`${this.__website__url}users/login/?accessToken=${token}`); // must be tested online
            req.done(async (res) => {
                const ud = await this.getUserData(true);
                if (ud) {
                    this.props.ownDataHook && this.props.ownDataHook(ud);
                }
            })
            req.fail(() => console.log("FAIL"))
        }

        // let req = $.get(`${this.__website__url}users/login/?accessToken=CAAYee32kIf0BALFhiM41n7wZA4dqOhnKyecNI8uKe44ZBZAs1GWfe6ZB7ZCbAGDKenfoIRkgXlxFQICiwnvevV1Nq739HNJVpEuHqF1oZCZCnuaMxjXVeKQqLGlf54BEo8T0RduQSb3Q9ahZCRLf5WFuO5geTZBBdx1ly0et3NvyRtLb3J5TsbuD5UVODChnYUKy8OZAZBbND6WblApWrfZCUTk8`)
        // req.done(async (res) => {
        //     const ud = await this.getUserData(true);
        //     if (ud) {
        //         this.props.ownDataHook && this.props.ownDataHook(ud);
        //     }
        // })
        // req.fail(() => console.log("FAIL"))
    }

    async getUserData(force) {
        return new Promise((accept, reject) => {
            if (this.props.id && this.props.id !== "" || force) {
                $.get(`${this.__website__url}users/me/`, (content) => {
                    if (content) {
                        if (content && content.id && content.user) {
                            return accept(content);
                        }
                        try {
                            content = JSON.parse(content);
                        } catch (e) {
                            console.log("FAKE", content)
                            content = require("../../fakedata.json").user;
                        }
                        accept(content);
                    } else {
                        reject();
                    }
                });
            } else {
                reject();
            }
        })
    }
}