import Reflux from "reflux";

let Actions = Reflux.createActions([
    "clearExclusions",
    "excludeItem",
    "redo",
    "undo"
]);

export default Actions;