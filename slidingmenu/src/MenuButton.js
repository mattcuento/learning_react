import React, { PureComponent } from "react";
import "./MenuButton.css";

class MenuButton extends PureComponent {
//class MenuButton extends Component {
    /*shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.handleMouseDown == this.props.handleMouseDown) {
            return false;
        } else {
            return true;
        }
    }*/

    render() {
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;