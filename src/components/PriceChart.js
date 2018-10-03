import {
  VictoryContainer,
  VictoryTooltip,
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryVoronoiTooltip,
} from 'victory';
import React from 'react';
import Spinner from './Spinner';

class PriceChart extends React.Component {
  render() {
    const { data, singleIsLoading } = this.props;
    return (
      <React.Fragment>
        {singleIsLoading ? (
          <Spinner />
        ) : (
          <VictoryChart
            width={900}
            containerComponent={<VictoryContainer />}
            scale={{ x: 'time', y: 'linear' }}
          >
            <VictoryLine
              data={data}
              labels={datum => datum.y}
              labelComponent={<VictoryTooltip />}
              style={{ data: { stroke: '#7B1FA2', strokeWidth: 3 }, labels: { fontSize: 15 } }}
            />
          </VictoryChart>
        )}
      </React.Fragment>
    );
  }
}

export default PriceChart;
