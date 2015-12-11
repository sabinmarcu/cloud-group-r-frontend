import React from "react";
export default class CardViews {
    static render() {
        return <div className={[this.props.className, this.styles.card].join(" ")} styles={this.props.styles}>
            {this.props.children}
        </div>
    }
}