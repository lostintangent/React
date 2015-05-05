import { clearExclusions, redo, undo } from "./Actions";
import PureComponent from "./utils/PureComponent";
import React from "react";

class FilterFooter extends PureComponent {
    static get propTypes() {
        return {
            excluded: React.PropTypes.number.isRequired
        };
    }

    render() {
        var exclusionElement;

        if (this.props.excluded) {
            exclusionElement = <a href="#" onClick={clearExclusions}>
                               Clear exclusions ({this.props.excluded})
                               </a>;
        } else {
            exclusionElement = <div>No exclusions! Exclude movies that you aren't interested in</div>;
        }

        return (
            <div>
                {exclusionElement}
                <div style={{ marginTop: 10 }}>
                    <a href="#" onClick={undo}>Undo</a>
                    <a href="#" onClick={redo} style={{ marginLeft: 5 }} >Redo</a>
                </div>
            </div>
        );
    }
}

export default FilterFooter;