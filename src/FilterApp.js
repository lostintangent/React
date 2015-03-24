import FilterFooter from "./FilterFooter";
import FilterInput from "./FilterInput";
import FilterList from "./FilterList";
import MovieStore from "./MovieStore";
import PureComponent from "./utils/PureComponent";
import React from "react";
import Reflux from "reflux";

class FilterApp extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: MovieStore.initialState,
            query: "",
            rateLimit: false
        };

        // Bind the event handlers in the constructor
        // so that they aren't re-created on every render
        this.handleChange = this.handleChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
    }

    handleChange({ target: { value }}) {
        this.setState({ query: value });
    }

    handleRateChange({ target: { checked }}) {
        this.setState({ rateLimit: checked })
    }

    render() {
        return (
            <div>
                <h1>Movie ratings!</h1>
                <FilterInput
                    onChange={this.handleChange}
                    onRateChange={this.handleRateChange} />
                <FilterList
                    data={this.state.data}
                    query={this.state.query}
                    rateLimit={this.state.rateLimit} />
                <FilterFooter
                    excluded={this.state.data.get("exclusions").size} />
            </div>
        );
    }
};

Object.assign(FilterApp.prototype,
              Reflux.connect(MovieStore, "data"));

export default FilterApp;