import React from "react";
import Dropdown from "react-dropdown";



export default class SearchBarViews {
    static get input() {
        return <span className={this.styles.input}> 
            <input className={this.styles.inputElem} placeholder="Search" />
        </span>
    }
    static get filterBox() {
        return <span className={this.styles.filter}> 
            <Dropdown options={this.opts} value={this.state.filter} onChange={this.handleFilterChange} />
        </span>
    }
    static render() {
        return <span className={this.styles.container}>
            {this.views.input}
            {this.views.filterBox}
        </span>
    }
}