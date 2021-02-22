import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, CounterActions } from '../actions';

export type CounterState = number;

const initialState: CounterState = 0;

export default function(state = initialState, action: CounterActions): CounterState {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case RESET_COUNTER:
            return initialState;
        default:
            return state;
    }
}
