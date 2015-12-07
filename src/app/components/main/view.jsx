import React from "react";
import PageManager from "../pagemanager"

export default class MainViews {
    static get titleText() {
        return this.state.title;
    }
    static getTitle() {
        return <span><h1> {this.views.titleText} </h1><h2> {this.props.subtitle || "NO SUBTITLE"} </h2></span>;
    }
    static render() { 
        return <div className={this.styles.appwrapper}>
            <header className={this.styles.header}>
                <h4>Logo Placeholder</h4>
            </header>
            <section className={this.styles.content}>
                <PageManager />
            </section> 
        </div>
    }
}