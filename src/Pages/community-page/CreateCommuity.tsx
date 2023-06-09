import { useState } from "react";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import LogInForCommunity from "./LogInForCommunity";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function CreateCommuity() {
  const [_open, setOpen] = useState(false);
  const [defaultEmail, _setDefaultEmail] = useState("");
 
  return (
    <div className="">
      <Dialog
        open={true}
        TransitionComponent={Transition}
        // maxWidth='xl'
        fullWidth
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="text-center text-xs">
          {"Create your community here !!🥳"}
        </DialogTitle>
        <DialogContent>
          <Typography></Typography>
          <DialogContentText id="alert-dialog-slide-description">
            <LogInForCommunity setclose={setOpen} defaultEmail={defaultEmail} />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Next</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
