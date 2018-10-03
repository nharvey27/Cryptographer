import 'whatwg-fetch';

export function setCoinsList(data) {
  return {
    type: 'SET_COIN_LIST',
    data,
  };
}

export function coinListIsLoading(bool) {
  return {
    type: 'COIN_LIST_IS_LOADING',
    bool,
  };
}

export function coinListHasErrored(bool) {
  return {
    type: 'COIN_LIST_HAS_ERRORED',
    bool,
  };
}

export function setSingleHistory(data) {
  return {
    type: 'SET_SINGLE_HISTORY',
    data,
  };
}

export function singleHistoryIsLoading(bool) {
  return {
    type: 'SINGLE_HISTORY_IS_LOADING',
    bool,
  };
}

export function singleHistoryHasErrored(bool) {
  return {
    type: 'SINGLE_HISTORY_HAS_ERRORED',
    bool,
  };
}

function formatSingleData(data) {
  return data.map(obj => ({
    x: new Date(obj[0]),
    y: obj[1],
    label: obj[1],
  }));
}

export function fetchCoinList() {
  return async (dispatch) => {
    dispatch(coinListIsLoading(true));
    try {
      const data = await (await fetch('https://coincap.io/front')).json();
      dispatch(setCoinsList(data.slice(0, 50)));
      dispatch(coinListIsLoading(false));
    } catch (error) {
      dispatch(coinListHasErrored(true));
      dispatch(coinListIsLoading(false));
    }
  };
}

export function fetchCoinHistory(coinSlug, days) {
  return async (dispatch) => {
    dispatch(singleHistoryIsLoading(true));
    try {
      const data = await (await fetch(`https://coincap.io/history/${days}day/${coinSlug}`)).json();
      const formattedData = formatSingleData(data.price);
      dispatch(setSingleHistory(formattedData));
      dispatch(singleHistoryIsLoading(false));
    } catch (error) {
      dispatch(singleHistoryHasErrored(true));
      dispatch(singleHistoryIsLoading(false));
    }
  };
}
