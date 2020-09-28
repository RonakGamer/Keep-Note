import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const Card = (props) => {
    const [expand,setexpand] = useState(false);
    const [note,setnote] = useState({
        title:"",
        content:"",
    });

    const inputevent = (event) => {
        const {name,value} = event.target;
        setnote((prevalue) => {
            
            return{
                ...prevalue,
            [name]:value,
            };
        });
    }
    const addevent = () => {
           props.passnote(note);
           setnote({
            title:"",
            content:"",
           });
    };
    const expandit = () => {
        setexpand(true);
    }
    const btnormal = () => {
        setexpand(false);
    }
    return(
        <div className = "createcard">
            {expand?<input type = "text" name = "title" value = {note.title} onChange = {inputevent} placeholder = "Title" /> : null}<br />
            <textarea type = "text" name = "content" value = {note.content} onChange = {inputevent} onDoubleClick = {btnormal} onClick = {expandit} placeholder = "Take a Note"></textarea><br />
            {expand?<Fab color="primary" aria-label="add" className = "fab"> 
            <Tooltip title="Add" aria-label="add">
        <AddIcon onClick = {addevent}/>
        </Tooltip>
      </Fab> : null}
        </div>
    );
}

export default Card;