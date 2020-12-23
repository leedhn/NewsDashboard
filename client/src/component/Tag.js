import React, {} from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Tag() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline/>

    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default Tag;