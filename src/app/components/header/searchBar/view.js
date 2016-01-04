import React from "react";

export default class SearchBarViews {
    static get input() {
        return <span className={this.styles.input}> 
            <input className={this.styles.inputElem} placeholder="Search" value={this.props.filter} onChange={this.handleFilterChange} />
        </span>
    }
    static render() {
        return <span className={this.styles.container}>
            {this.views.input}
        </span>
    }
}