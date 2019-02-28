import React, { Component } from 'react';
import CartButton from '../Utils/CartButton';
import Zoom from 'react-reveal';

class Pricing extends Component {

    state = {
        prices: [100, 230, 440],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'pe and scrambled it to make a type specimen book. It has survived not only ',
            'pe and scrambled it to make a type specimen book. It has survived not only ',
            'pe and scrambled it to make a type specimen book. It has survived not only '
        ],
        linkto: [
            'http://yyyyy.com/t',
            'http://yyyyy.com/t',
            'http://yyyyy.com/t'
        ],
        delay: [500, 0, 500]

    }

    showBoxes = () => (
        this.state.prices.map((box, i) => {
            return (
                <Zoom delay={this.state.delay[i]}  key={i}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>{this.state.prices[i]}</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className="pricing_description">
                                {this.state.desc[i]}
                            </div>
                            <div className="pricing_buttons">
                                <CartButton text="buy seat"
                                    back="#ffa800"
                                    color="#fff"
                                    link={this.state.linkto[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            )
        })
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper" >
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    };
};


export default Pricing; 