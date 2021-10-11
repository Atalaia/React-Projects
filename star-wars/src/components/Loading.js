
import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

export default function Loading() {
    return (
        <Dimmer active inverted>
            <Loader color="yellow" active inline="centered" inverted>
                Loading...
            </Loader>
        </Dimmer>
    );
}