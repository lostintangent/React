import FilterFooter from "./FilterFooter";
import FilterInput from "./FilterInput";
import FilterList from "./FilterList";
import MovieStore from "./MovieStore";
import Profiler from "./Profiler";
import PureComponent from "./utils/PureComponent";
import React from "react";
import Reflux from "reflux";

class FilterApp extends PureComponent {
    state = {
        data: MovieStore.currentState,
        query: "",
        rateLimit: false
    };

    onHandleChange = ({ target: { value }}) => {
        this.setState({ query: value });
    }

    onHandleRateChange = ({ target: { checked }}) => {
        this.setState({ rateLimit: checked })
    }

    render() {
        var exclusionCount = this.state.data.get("exclusions").size;
        
        return (
            <div>
                <h1>Movie recommendatio</h1>
                <FilterInput
                    onChange={this.onHandleChange}
                    onRateChange={this.onHandleRateChange} />
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