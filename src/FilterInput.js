import React from "react";
import PureComponent from "./utils/PureComponent";

class FilterInput extends PureComponent {
    static get propTypes() {
        return {
            onChange: React.PropTypes.func.isRequired,
            onRateChange: React.PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    onChange={this.props.onChange}
                    placeholder="Type to search..." />
                <label>
                    <span>Show only high-rated films?</span>
                    <input
                        type="checkbox"
                        onChange={this.props.onRateChange} />
                </label>
            </form>
        );
    }
}

export default FilterInput;