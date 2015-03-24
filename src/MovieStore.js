import Actions from "./Actions";
import Immutable from "immutable";
import Reflux from "reflux";

let MovieStore = Reflux.createStore({
    listenables: Actions,

    previousState: null,

    initialState: Immutable.fromJS({
        exclusions: [],

        movies: [
            { name: "Big Fish", rating: 7 },
            { name: "Lawrence Anyways", rating: 8 },
            { name: "Memento", rating: 6 },
            { name: "Pan's Labyrinth", rating: 6 },
            { name: "Solaris", rating: 10 },
            { name: "The Fountain", rating: 8 },
            { name: "Wristcutters: A Love Story", rating: 9 }
        ]
    }),

    onUndo: function () {
        this.initialState = this.previousState;

        this.trigger(this.initialState);
    },

    onClearExclusions: function () {
        this.previousState = this.initialState;
        this.initialState = this.initialState
                            .updateIn(["exclusions"], e => e.clear());

        this.trigger(this.initialState);
    },

    onExcludeItem: function (name) {
        this.previousState = this.initialState;
        this.initialState = this.initialState
                            .updateIn(["exclusions"], e => e.push(name));

        this.trigger(this.initialState);
    }
});

export default MovieStore;