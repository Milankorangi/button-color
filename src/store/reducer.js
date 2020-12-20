export const initialState = {
    color: ['red']
}

export const actionTypes = {
    SET_COLOR: 'SET_COLOR',
}

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_COLOR:
            return {
                ...state,
                color: [...state.color, action.color]
            }
        default:
            return state;
    }
}

export default reducer;
