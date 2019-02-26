import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';


const Sidedrawer = (props) => {
    return (
        <Drawer
        anchor = "right"
        open = {props.open}
        onClose = {()=>props.onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick= {console.log('feature')}>
                Event Starts In
            </ListItem>
            <ListItem button onClick= {console.log('Venue NFO')}>
                Venue NFO
            </ListItem>
            <ListItem button onClick= {console.log('Highlights')}>
                Highlight
            </ListItem>
            <ListItem button onClick= {console.log('pricing')}>
                Pricing
            </ListItem>
            <ListItem button onClick= {console.log('Location')}>
               Location
            </ListItem>
        </List>
        </Drawer>
        );
};

export default Sidedrawer;