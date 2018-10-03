import { setCoinsList } from '../actions/index';
import { setCoinHistory } from '../actions/index';

const initialState = {
  coins: [],
  singleHistory: {},
  singleIsLoading: false,
  singleHasErrored: false,
  coinListIsLoading: false,
  coinListHasErrored: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COIN_LIST':
      return setCoinList(state, action);
    case 'SET_SINGLE_HISTORY':
      return setSingleHistory(state, action);
    case 'SINGLE_HISTORY_IS_LOADING':
      return singleIsLoading(state, action);
    case 'SINGLE_HISTORY_HAS_ERRORED':
      return singleHasErrored(state, action);
    case 'COIN_LIST_IS_LOADING':
      return listIsLoading(state, action);
    case 'COIN_LIST_HAS_ERRORED':
      return listHasErrored(state, action);
  }
  return state;
};

function setCoinList(state, action) {
  return { ...state, coins: action.data };
}

function listIsLoading(state, action) {
  return { ...state, coinListIsLoading: action.bool };
}

function listHasErrored(state, action) {
  return { ...state, coinListHasErrored: action.bool };
}

function setSingleHistory(state, action) {
  return { ...state, singleHistory: action.data };
}

function singleIsLoading(state, action) {
  return { ...state, singleIsLoading: action.bool };
}

function singleHasErrored(state, action) {
  return { ...state, singleHasErrored: action.bool };
}
