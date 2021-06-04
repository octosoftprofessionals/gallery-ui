import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { /* Grid,  */Typography } from '@material-ui/core'
import { colors } from '../components/Styles/Colors';
import { makeStyles } from '@material-ui/core/styles'
import { Input } from '@material-ui/core';
/* import useLocalState from 'react';
 */
import { useState, useEffect } from "react";

const useStyle = makeStyles(Theme => ({
    input: {
        borderColor: 'trasnparent',
        background: 'trasnparent',
    },
    box: {
        background: colors.Petroleum,
        maxWidth: 800,
        borderRadius: 16,
        padding: 20
    },
    closeBtn: {
        background: colors.LigthPetroleum,
        borderRadius: 50,
        padding: 10,
    },
    field: {
        padding: 0,
        background: colors.AquaGreen,
        borderRadius: 50,
        borderColor: colors.AquaGreen,
    },
    suscribeBtn: {
        background: colors.AquaGreen,
        fontSize: 20,
    }
}))

function useLocalState(key, initial) {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem(key);
            if (saved !== null) {
                return JSON.parse(saved);
            }
        }

        return initial;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    /*    useEffect({
           if(localStorage) {
               const popUpShown = localStorage.getItem('popUpShown');
               if (!popUpShown) {
                   setOpen(true)
               }
           }
       }, []) */
    return [value, setValue];
}

const EmailPopUp = () => {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useLocalState("memorable", "");
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyle()

    return (
        <div >
            <Dialog open={open} onClose={handleClose} /* aria-labelledby="form-dialog-title" */ fullWidth>
                <div className={classes.box}>
                    <DialogActions className={classes.input}>
                        <Button onClick={handleClose} color="primary" className={classes.closeBtn}>
                            x

          </Button>
                    </DialogActions>
                    <DialogTitle id="form-dialog-title">Join Our Mailing List</DialogTitle>
                    <DialogContent>

                        <DialogContentText >
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
          </DialogContentText >
                        <Typography>Mail</Typography>
                        <Input
                            placeholder='email'
                            className={classes.field}
                            fullWidth
                            color='primary'
                            disableUnderline={true}
                            margin="dense"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} color="primary" className={classes.suscribeBtn} >
                            Sure!
          </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
export default EmailPopUp