import React, { Component } from "react";
import FlipMove from "react-flip-move";

class CompleteItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}<div><strong>&times;</strong></div></li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="completeList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default CompleteItems;