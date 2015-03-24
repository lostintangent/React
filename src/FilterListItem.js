import { excludeItem } from "./Actions";
import PureComponent from "./utils/PureComponent";
import React from "react";

class FilterListItem extends PureComponent {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            rating: React.PropTypes.number.isRequired,
            style: React.PropTypes.any.isRequired
        }
    }

    render() {
        let { name, rating, style } = this.props;

        return (
            <li style={style}>
                <span>{name} ({rating}/10)</span>
                <a onClick={excludeItem.bind(null, name)} href="#">Exclude</a>
            </li>
        );
    }
}

export default FilterListItem;