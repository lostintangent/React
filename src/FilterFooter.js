import { clearExclusions, undo } from "./Actions";
import PureComponent from "./utils/PureComponent";
import React from "react";

class FilterFooter extends PureComponent {
    static get propTypes() {
        return {
            excluded: React.PropTypes.number.isRequired
        };
    }

    render() {
        var element;

        if (this.props.excluded) {
            element = <a href="javascript:void(0)" onClick={clearExclusions}>Clear exclusions ({this.props.excluded})</a>
        } else {
            element = <div>No exclusions!</div>;
        }

        return (
            <div>
                {element}
                <br />
                <a href="javascript:void(0)" onClick={undo}>Undo</a>
            </div>
        );
    }
}

export default FilterFooter;