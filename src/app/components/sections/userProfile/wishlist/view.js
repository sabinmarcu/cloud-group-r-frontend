import React from "react";
import Card from "../../../card";

export default class WishListViews {
    static render() {
        return <span>
            <section className={this.styles.list}>
                { this.props.isMe && <Card className={this.styles.container}>
                    <header className={this.styles.header}>Add an item to your wishlist</header>
                    <label for="name" className={this.styles.inputGroup}>
                        Name
                        <input type="text" id="name" ref="name"/>
                    </label>
                    <label for="eventname" className={this.styles.inputGroup}>
                        Event Name
                        <input type="text" id="eventname" ref="eventName"/>
                    </label>
                    <label for="description" className={this.styles.inputGroup}>
                        Description
                        <textarea id="description" ref="description" ></textarea>
                    </label>
                    <label for="price" className={this.styles.inputGroup}>
                        Price
                        <input type="number" id="price" ref="price"/>
                    </label>
                    <button className={this.styles.submitButton} onClick={this.newItem}>Submit</button>
                </Card>}
                {Object.keys(this.props.list).map(item => 
                    <Card className={this.styles.container}>
                        <header className={this.styles.header}>
                            {this.props.list[item].name} (Price: {this.props.list[item].price})
                        </header>
                        {this.props.list[item] && this.props.list[item].description && <span className={this.styles.description}>{this.props.list[item].description}</span>}
                        {!this.props.isMe && <span>
                            <h4> Start Campaign </h4>
                            <label for="campaignName" className={this.styles.inputGroup}>
                                Name
                                <input type="text" id="campaignName" ref={"name-" + item}/>
                            </label>
                            <label for="endDate" className={this.styles.inputGroup}>
                                End Date
                                <input type="date" id="endDate" ref={"endDate-" + item}/>
                            </label>
                            <button className={this.styles.submitButton} onClick={() => this.newCampaign(item)}>Submit</button>
                        </span>}
                    </Card>
                )}
            </section>
        </span>
    }
}