import React from "react";
import Card from "../../../card";

export default class WishListViews {
    static render() {
        return <span>
            <section className={this.styles.list}>
                {Object.keys(this.props.list).map(item => 
                    <Card className={this.styles.container}>
                        <header className={this.styles.header}>{this.props.list[item].name} (Price: {this.props.list[item].price})</header>
                        {this.props.list[item] && this.props.list[item].description && <span className={this.styles.description}>{this.props.list[item].description}</span>}
                    </Card>
                )}
            </section>
        </span>
    }
}