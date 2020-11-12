import React , {useState,useEffect} from 'react';
import {Button , Dialog , DialogActions , DialogContent} from '@material-ui/core';

const showDialog = () => {
	const punch = () =>{
	//doSomething
	}

	const reconfmsg="打刻します。よろしいですか？"
	const [open,setOpen]= React.useState(false);

	return(
		<Dialog
			open={open}
		>
			<DialogContent>
				{msg}
			</DialogContent>
			<DialogActions>
				<Button onclick={punch} color="primary">
					打刻
				</Button>
			</DialogActions>
		</Dialog>
		);
}

export default showDialog;

/*<p>この時刻で打刻します？よろしいですか？</p>
			<Button variant="contained" color="primary">打刻</Button>*/