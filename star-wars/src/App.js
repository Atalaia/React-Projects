import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import Character from './components/Character';
import Planets from './components/Planets';
import { Container } from 'semantic-ui-react';
import './App.css';

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log('people', people);
  console.log('planets', planets);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/planets">
              <Planets data={planets} />
            </Route>
            <Route exact path="/character">
              <Character />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}