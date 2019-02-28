import React from 'react';
import Button from '@material-ui/core/Button';
import Ticket_icon from '../../resources/images/icons/ticket.png';

const CartButton = (props) => {
    return (
        <Button
        href={props.link}
        variant="contained"
        size="small"
        style={{
            background: `${props.back}`,
            color: `${props.color}`
        }}
        >
            <img src={Ticket_icon}
            className="iconImage"
            alt=""
            />
           {props.text}
        </Button>
        );
};

export default CartButton;