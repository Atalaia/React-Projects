import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawnCards: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({
            deck: deck.data
        });
        console.log(deck.data);
    }

    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No card remaining!");
            }
            let card = cardRes.data.cards[0];
            console.log(cardRes.data);
            this.setState(st => ({
                drawnCards: [
                    ...st.drawnCards,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch (err) {
            alert(err);
        }
    }

    render() {
        const cards = this.state.drawnCards.map(c => (
            <Card
                key={c.id}
                image={c.image}
                name={c.name}
            />
        ))
        return (
            <div className="Deck">
                <h1 className="Deck-title">♦ DECK OF CARDS ♦</h1>
                <h2 className="Deck-title subtitle">♦ A little demo made with React ♦</h2>
                <button className="Deck-btn" onClick={this.getCard}>
                    GET CARD!
                </button>
                <div className="Deck-cardarea">
                    {cards}
                </div>
            </div>
        );
    }
}

export default Deck;