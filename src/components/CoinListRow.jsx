import { TableCell, TableRow } from 'material-ui/Table';
import React from 'react';
import PriceChart from './PriceChart';

class CoinListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: false,
    };
  }

  onClick = () => {
    this.toggleChart();
    this.fetchSingleHistory(7);
  };

  toggleChart = () => {
    this.setState({ chart: !this.state.chart });
  };

  fetchSingleHistory = (days) => {
    this.props.fetchCoinHistory(this.props.coin.short, days);
  };

  render() {
    const buttonStyle = {
      cursor: 'pointer',
    };

    const { coin, singleHistory, singleIsLoading } = this.props;
    const days = [7, 30, 180, 365];

    return (
      <React.Fragment>
        <TableRow onClick={() => this.onClick()} style={{ cursor: 'pointer' }}>
          <TableCell>{coin.long}</TableCell>
          <TableCell>${coin.price.toLocaleString()}</TableCell>
          <TableCell>${coin.mktcap.toLocaleString()}</TableCell>
          <TableCell>{coin.perc}%</TableCell>
        </TableRow>
        {this.state.chart ? (
          <React.Fragment>
            <TableRow>
              <TableCell colspan="4">
                <PriceChart singleIsLoading={singleIsLoading} data={singleHistory} />
              </TableCell>
            </TableRow>
            <TableRow>
              {days.map(day => (
                <TableCell>
                  <button style={buttonStyle} onClick={() => this.fetchSingleHistory(day)}>
                    {day} Days
                  </button>
                </TableCell>
              ))}
            </TableRow>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

export default CoinListRow;
