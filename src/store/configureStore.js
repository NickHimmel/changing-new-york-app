import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
  photos: [],
  comparison: [],
  isFetching: false
}

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    applyMiddleware(thunk)
  );
}
