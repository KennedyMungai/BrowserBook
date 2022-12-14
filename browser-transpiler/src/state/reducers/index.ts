import { combineReducers } from 'redux';
import reducer from './bundlesReducer';
import cellsReducer from './cellsReducer';


const reducers = combineReducers({
    cells: cellsReducer,
    bundles: reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;