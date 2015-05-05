import Actions from "./Actions";
import Immutable from "immutable";
import Reflux from "reflux";

let MovieStore = Reflux.createStore({
    listenables: Actions,

    currentState: Immutable.fromJS({
        exclusions: [],

        movies: [
            { name: "Away From Her", rating: 8 },
            { name: "Big Fish", rating: 7 },
            { name: "Fantastic Mr. Fox", rating: 8 },
            { name: "Lawrence Anyways", rating: 8 },
            { name: "Life of Pi", rating: 6 },
            { name: "Memento", rating: 6 },
            { name: "Pan's Labyrinth", rating: 6 },
            { name: "Solaris", rating: 10 },
            { name: "The Fountain", rating: 8 },
            { name: "Wristcutters: A Love Story", rating: 9 }
        ]
    }),

    nextState: null,
    
    previousState: null,

    onClearExclusions: function () {
        this.previousState = this.currentState;
        this.currentState = this.currentState
                            .updateIn(["exclusions"], e => e.clear());

        this.trigger(this.currentState);
    },

    onExcludeItem: function (name) {
        this.previousState = this.currentState;
        this.currentState = this.currentState
                            .updateIn(["exclusions"], e => e.push(name));

        this.trigger(this.currentState);
    },

    onRedo: function () {
        [this.previousState, this.currentState] =
            [this.currentState, this.nextState];
        
        this.trigger(this.currentState);
    },

    onUndo: function () {
        [this.nextState, this.currentState] =
            [this.currentState, this.previousState];
        
        this.trigger(this.currentState);
    }
});

export default MovieStore;