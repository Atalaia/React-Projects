import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import volumeOff from "../volume_off.svg";
import volumeOn from "../volume_on.svg";
import starwars from "../images/starwars_logo.png";
import deathStar from "../images/death-star.jpeg";

export default function Home() {

    const audio = useRef();

    const [muted, setMuted] = useState(true);

    useEffect(() => {
        let tl = new gsap.timeline();
        audio.current.play();
    }, []);

    return (
        <div className="container">
            <div className="logo">
                <img src={starwars} alt="starwars" />
            </div>
            <div className="death-star">
                <img src={deathStar} alt="death-star" className="death-star"/>
            </div>
            <audio ref={audio} muted>
                <source
                    type="audio/mpeg"
                    src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
                />
            </audio>
            <button
                className="volume"
                type="button"
                onClick={() => {
                    audio.current.muted = !muted;
                    setMuted(!muted);
                }}
            >
                {muted ? (
                    <img src={volumeOff} alt="Volume is off" />
                ) : (
                    <img src={volumeOn} alt="Volume is on" />
                )}
            </button>
        </div>
    );
}
