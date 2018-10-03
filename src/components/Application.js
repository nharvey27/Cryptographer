import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCoinList } from '../actions';
import { fetchCoinHistory } from '../actions';
import Main from './Main';

function mapStateToProps(state) {
  return {
    coins: state.coins.coins,
    singleHistory: state.coins.singleHistory,
    singleIsLoading: state.coins.singleIsLoading,
    singleHasErrored: state.coins.singleHasErrored,
    coinListIsLoading: state.coins.coinListIsLoading,
    coinListHasErrored: state.coins.coinListHasErrored,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoinList, fetchCoinHistory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
