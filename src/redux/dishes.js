import { DISHES } from '../shared/dishes';

// separate reducers managing parts of the state
export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
          return state;
    }
};