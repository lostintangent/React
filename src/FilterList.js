import FilterListItem from "./FilterListItem";
import PureComponent from "./utils/PureComponent";
import React from "react";

class FilterList extends PureComponent {
    static get propTypes() {
        return {
            data: React.PropTypes.any.isRequired,
            query: React.PropTypes.string.isRequired,
            rateLimit: React.PropTypes.bool.isRequired
        };
    }

    render() {
        // Filter the list of data based on the current query
        let filteredList = this.props.data.get("movies")
                            .filter(m => m.get("name").toLowerCase().match(this.props.query.toLowerCase()) &&
                                         m.get("rating") > (this.props.rateLimit ? 7 : 0) &&
                                         !this.props.data.get("exclusions").contains(m.get("name")));

        // Determine the highest rating amongst the list
        let highestRating = filteredList
                            .map(i => i.get("rating"))
                            .max();

        let styleBuilder = (r) => {
            return { fontWeight: r === highestRating ? "bold" : "normal" };
        };

        var element;

        if (filteredList.size > 0) {
            // Map each filtered item to its component equivalent
            let listItems = filteredList.map(i => (
                <FilterListItem
                    key={i.get("name")}
                    name={i.get("name")}
                    rating={i.get("rating")}
                    style={styleBuilder(i.get("rating"))} />
            ));

            element = <ol>{listItems}</ol>;
        }
        else {
            element = <div style={{ marginBottom: 5 }}>No recommendations match your criteria!</div>;
        }
        
        return element;
    }
}

export default FilterList;