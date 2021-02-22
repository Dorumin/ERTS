export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

type IncrementCounterAction = {
    type: typeof INCREMENT_COUNTER
};

type DecrementCounterAction = {
    type: typeof DECREMENT_COUNTER
};

type ResetCounterAction = {
    type: typeof RESET_COUNTER
};

export const incrementCounter = (): IncrementCounterAction => {
    return {
        type: INCREMENT_COUNTER
    };
};

export const decrementCounter = (): DecrementCounterAction => {
    return {
        type: DECREMENT_COUNTER
    };
};

export const resetCounter = (): ResetCounterAction => {
    return {
        type: RESET_COUNTER
    };
};

export type CounterActions = IncrementCounterAction | DecrementCounterAction | ResetCounterAction;
