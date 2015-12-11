import BaseCompoennt from "../../baseComponent";
import { autobind } from "core-decorators";

export default class LoginComponent extends BaseCompoennt {
    constructor(...args) {
        super(require, ...args)
    }

    componentWillMount() {
        window.addEventListener("message", this.msgHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.msgHandler);
    }

    @autobind
    msgHandler(e) {
        console.log("MESSAGE");
        if (e.data) {
            console.log("DATA", e.data);
        } else {
            console.log("NO DATA");
        }
    }

    @autobind
    doLogin() {
        // FOR LOGGING IN ON BACKEND (COMMENTED FOR TESTING WITHOUT POPUP)
        // let win = window.open("login", "Login", "location=no,width=600,height=600,scrollbars=yes,top=100,left=700"), int = setInterval(() => {
        //     if (win.closed) {
        //         clearInterval(int);

        //         const id = parseInt(Math.random() * 8);
        //         this.props.loginHook && this.props.loginHook(id);
        //     }
        // }, 100)
        const id = parseInt(Math.random() * 8);
        this.props.loginHook && this.props.loginHook(id);
    }
}