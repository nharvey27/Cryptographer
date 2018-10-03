import React, { Component } from 'react';
import Coinlist from './Coinlist';
import Grid from 'material-ui/Grid';
import Nav from './Nav';
import Reboot from 'material-ui/Reboot';
import Spinner from './Spinner';

class Main extends Component {
  componentDidMount() {
    this.props.fetchCoinList();
  }
  render() {
    return (
      <div>
        <Reboot />
        {
          <div>
            <Nav />
            <Grid container justify="center" spacing={24}>
              <Grid item xs={8}>
                {this.props.coinListIsLoading ? <Spinner /> : <Coinlist {...this.props} />}
              </Grid>
            </Grid>
          </div>
        }
      </div>
    );
  }
}

export default Main;
