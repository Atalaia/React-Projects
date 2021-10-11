import React, { useState, useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, Grid } from 'semantic-ui-react';
import Search from "./Search";
import Loading from "./Loading";
import Pagination from "./Pagination";
import API from "../services/Api";
import './Characters.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const getCharacters = useRef();

  useEffect(() => {
    getCharacters.current();
  }, [getCharacters]);

  getCharacters.current = async () => {
    setLoading(true);
    const characters = await API.get(`/people`);
    await characterData(characters.data.results);
    setLoading(false);
  };

  const characterData = async (characters) => {
    setLoading(true);
    for (const character of characters) {
      setCharacters([...characters]);
    }
    setLoading(false);
  };

  const pagination = async (number) => {
    const characters = await API.get(`/people/?page=${number}`);
    characterData(characters.data.results);
  };

  const characterSearch = async (e) => {
    e.preventDefault();
    const characters = await API.get(`/people/?search=${search}`);
    characterData(characters.data.results);
    setSearch("");
    setTimeout(() => window.location.reload(), 5000);
  };

  const handleChange = (e) => setSearch(e.target.value);

  const handleClick = (e) => {
    history.push({
      pathname: '/character',
      state: {
        characterUrl: e.currentTarget.getAttribute('character'),
      },
    });
    console.log(e.currentTarget.getAttribute('character'));
  }

  return (
    <div className="Characters">
      <h1>Characters</h1>
      <Search search={characterSearch} handleChange={handleChange} />
      {loading ? <Loading /> :
        <Grid columns={3}>
          {characters.map((character, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{character.name}</Card.Header>
                    <Card.Description>
                      <strong>Height</strong>
                      <p>{character.height}</p>
                      <strong>Mass</strong>
                      <p>{character.mass}</p>
                      <strong>Hair Color</strong>
                      <p>{character.hair_color}</p>
                    </Card.Description>
                  </Card.Content>
                  <Button type="button" onClick={handleClick} character={character.url}>En savoir plus</Button>
                </Card>
              </Grid.Column>
            )
          })}
        </Grid>
      }
      <div className="pagination">
        <Pagination pagination={pagination} loading={loading} />
      </div>
    </div>
  );
}
