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
        let listItemStyle = Object.assign(style, styles.listItem);

        return (
            <li style={listItemStyle}>
                <span>{name} ({rating}/10)</span>
                <a style={styles.excludeLink} onClick={excludeItem.bind(null, name)} href="#">Exclude</a>
            </li>
        );
    }
}

let styles = {
    excludeLink: {
        marginLeft: 5
    },
    listItem: {
        marginTop: 3
    }
}

export default FilterListItem;