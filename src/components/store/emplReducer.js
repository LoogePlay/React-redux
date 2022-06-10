const defState = [
    {id: 1, name: 'Велосипед', count: 5},
    {id: 2, name: 'Самокат', count: 3},
    {id: 3, name: 'Ролики', count: 7},
]

const ADD_EMPL = "ADD_EMPL";
const DELL_EMPL = "DELL_EMPL";

const INCR_EMPL = "INCR_EMPL";
const DECR_EMPL = "DECR_EMPL";

const RETURN_DEFAULT_EMPL = "RETURN_DEFAULT_EMPL";
const CLEAR_EMPL = "CLEAR_EMPL";

const editEmplCount = (state, action, value) => {
    return state.filter( (empl) => empl.id === action.payload.id ? empl.count += value : empl);
}

export const emplReducer = (state=defState, action) => {
    switch (action.type) {
        case ADD_EMPL: return [...state, action.payload];
        case DELL_EMPL: return state.filter((empl) => empl.id !== action.payload);

        case INCR_EMPL: return editEmplCount(state, action, 1);
        case DECR_EMPL: return editEmplCount(state, action, -1);

        case RETURN_DEFAULT_EMPL: return state=defState;
        case CLEAR_EMPL: return state=[];
        default: return state;
    }
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload: payload});
export const dellEmplAction = (payload) => ({type: DELL_EMPL, payload: payload});

export const incrEmplAction = (payload) => ({type: INCR_EMPL, payload: payload});
export const decrEmplAction = (payload) => ({type: DECR_EMPL, payload: payload});

export const returnDefaultEmplAction = () => ({type: RETURN_DEFAULT_EMPL});
export const clearEmplAction = () => ({type: CLEAR_EMPL});