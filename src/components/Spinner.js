import { CircularProgress } from 'material-ui/Progress';
import React from 'react';

const Spinner = () => (
  <div>
    <CircularProgress style={{ display: 'block', margin: 'auto' }} size={60} thickness={7} />
  </div>
);

export default Spinner;
