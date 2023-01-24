/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = ({ loading }) => {
  const [openLoader, setOpenLoader] = React.useState(true);
  const color = '#f50057';
  const handleClose1 = () => {
    setOpenLoader(false);
  };

  return (
    <>
      <Dialog
        open={openLoader}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <ClipLoader color={color} loading={loading} size={45} />
        </DialogContent>
      </Dialog>
    </>
  );
};
