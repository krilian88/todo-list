import { combineReducers } from 'redux';
import {todos} from './todosReducer'
import {filters} from './filtersReducer'

const rootReducer = combineReducers({todos, filters});

export default rootReducer;