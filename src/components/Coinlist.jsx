import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CoinListRow from './CoinListRow';

const style = {
  backgroundColor: 'white',
  overflow: 'scroll',
};

const tableWapper = {
  display: 'inherit',
  overflow: 'scroll',
  maxHeight: '90vh',
};

const Coinlist = ({
  coins,
  fetchCoinHistory,
  singleHistory,
  singleIsLoading,
  singleHasErrored,
}) => (
  <div style={tableWapper}>
    <Table height="200px" style={style}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price USD</TableCell>
          <TableCell>Market Cap</TableCell>
          <TableCell>% 24HR</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(coins).map((obj, i) => (
          <CoinListRow
            fetchCoinHistory={fetchCoinHistory}
            coin={coins[obj]}
            singleHistory={singleHistory}
            singleIsLoading={singleIsLoading}
            singleHasErrored={singleHasErrored}
            key={i}
          />
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Coinlist;
