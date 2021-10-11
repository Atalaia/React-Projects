import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({ data }) {
    return (
        <div>
            <h1>Planets</h1>
            <Grid columns={3}>
                {data.map((planet, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Population</strong>
                                        <p>{planet.population}</p>
                                        <strong>Climate</strong>
                                        <p>{planet.climate}</p>
                                        <strong>Terrain</strong>
                                        <p>{planet.terrain}</p>
                                        <strong>Diameter</strong>
                                        <p>{planet.diameter}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    );
}
