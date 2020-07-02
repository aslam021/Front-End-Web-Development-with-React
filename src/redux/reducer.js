import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

//reducer function. this will take current state and action to be performed. then this will return a 
// new state but prvs(crnt) state will NOT be modified. 
export const Reducer = (state = initialState, action) => {
    return state;
};