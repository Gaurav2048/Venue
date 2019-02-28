import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CartButton from '../Utils/CartButton';


export default class Discount extends Component {

    state = {
        discount_Start: 0,
        discount_end: 30
    }

    porcentage = () => {
        if (this.state.discount_Start < this.state.discount_end) {
            this.setState({
                discount_Start: this.state.discount_Start + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => this.porcentage(), 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={this.porcentage}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discount_Start}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>


                    <Slide right>
                        <div className="discount_description">
                            <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
                            <p>pe and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh</p>
                            <CartButton
                                text="Purchase Tickets"
                                back="#ffa800"
                                color="#ffffff"
                                link="http://musicassam.app"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        )
    }
}
