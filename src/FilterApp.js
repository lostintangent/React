import FilterFooter from "./FilterFooter";
import FilterInput from "./FilterInput";
import FilterList from "./FilterList";
import MovieStore from "./MovieStore";
import Profiler from "./Profiler";
import PureComponent from "./utils/PureComponent";
import React from "react";
import Reflux from "reflux";

class FilterApp extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: MovieStore.currentState,
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
        var exclusionCount = this.state.data.get("exclusions").size;
        
        return (
            <div>
                <h1>Movie recommendations</h1>
                <FilterInput
                    onChange={this.handleChange}
                    onRateChange={this.handleRateChange} />
                <FilterList
                    data={this.state.data}
                    query={this.state.query}
                    rateLimit={this.state.rateLimit} />
                <FilterFooter
                    excluded={exclusionCount} />
                <Profiler />
            </div>
        );
    }
};

// This hooks up the FilterApp component to the MovieStore,
// which forces a re-render of the app whenever state is change
Object.assign(FilterApp.prototype,
              Reflux.connect(MovieStore, "data"));

export default FilterApp;