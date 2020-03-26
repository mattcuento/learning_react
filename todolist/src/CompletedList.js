import React, { Component } from 'react';

class CompletedList extends Component {
    constructor(props) {
        super(props);
    
        state = { 
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){}


    render() { 
        return (  );
    }
}
 
export default CompletedList;