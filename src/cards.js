import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const Cards = (props) => {

    const deleteitem = () => {
        props.deleteitem(props.id);
    }
    return(
        <div className = "cardbox">
        <div className = "font">
            <font>{props.title}</font>
            </div>
            <div className = "textarea">
                <font>{props.content}</font>
            </div>
            <Fab color="primary" aria-label="delete" className = "fab"> 
            <Tooltip title="Delete" aria-label="delete">
        <DeleteOutlineIcon onClick = {deleteitem}/>
        </Tooltip>
      </Fab>
        </div>
    );
}

export default Cards;