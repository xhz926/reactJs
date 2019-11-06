import {store} from "../../store";

function addCounter() {
    store.dispatch(
        {
            type:"INCREMENT"
        }
    )
}

function getCounter() {
    return store.getState()
}


export {addCounter,getCounter}
