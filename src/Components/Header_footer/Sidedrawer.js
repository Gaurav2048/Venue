import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
import {scroller } from 'react-scroll';

const Sidedrawer = (props) => {


  const  scrollToElements = (element)  => {
            scroller.scrollTo(element,{
                duration: 1500,
                delay:100,
                smooth:true,
                offset: -150
            });
            props.onClose(false)
    }

    return (
        <Drawer
        anchor = "right"
        open = {props.open}
        onClose = {()=>props.onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick= {()=>scrollToElements('events')}>
                Event Starts In
            </ListItem>
            <ListItem button onClick= {()=>scrollToElements('venue')}>
                Venue NFO
            </ListItem>
            <ListItem button onClick= {()=>scrollToElements('highlights')}>
                Highlight
            </ListItem>
            <ListItem button onClick= { ()=>scrollToElements('pricing')}>
                Pricing
            </ListItem>
            <ListItem button onClick= {()=>scrollToElements('location')}>
               Location
            </ListItem>
        </List>
        </Drawer>
        );
};

export default Sidedrawer;