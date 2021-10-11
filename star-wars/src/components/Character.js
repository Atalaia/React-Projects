import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import axios from "axios";

export default function Character() {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const characterUrl = location.state.characterUrl;
    console.log(characterUrl);

    const getCharacter = useRef();

    useEffect(() => {
        getCharacter.current();
    }, [getCharacter]);

    getCharacter.current = async () => {
        setLoading(true);
        const character = await axios.get(characterUrl);
        console.log(character);
        await characterData(character.data);
        setLoading(false);
    };

    const characterData = async (character) => {
        setLoading(true);
        setCharacter([character]);
        setLoading(false);
    };


    return (
        <div>
            <h1>Character</h1>
            {character.map((character) => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header>{character.name}</Card.Header>
                            <Card.Description>
                                <strong>Birth Year</strong>
                                <p>{character.birth_year}</p>
                                <strong>Gender</strong>
                                <p>{character.gender}</p>
                                <strong>Height</strong>
                                <p>{character.height}</p>
                                <strong>Mass</strong>
                                <p>{character.mass}</p>
                                <strong>Hair Color</strong>
                                <p>{character.hair_color}</p>
                                <strong>Eye Color</strong>
                                <p>{character.eye_color}</p>
                                <strong>Skin Color</strong>
                                <p>{character.skin_color}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })}
        </div>
    );
}