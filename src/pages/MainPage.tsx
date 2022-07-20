import styled from "styled-components";
import { Section } from "../components/Section";
import * as React from 'react';
import pageManager from './pagemanager'
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    return (
        <>
            <Section zoomPosition={{x: -1.175, y: 0.1}} zoomScale={1.5}>
                <h1>
                    <a onClick={() => {
                        navigate('/web-development');
                    }}>
                        Web Development
                    </a>
                </h1>
            </Section>
            <Section zoomPosition={{x: -0.5, y: 0.3}} zoomScale={1.0}>
                <a onClick={() => {
                    navigate('/about');
                }}>
                    <h1>
                        Luke DiGiovanna
                    </h1>
                </a>
                <p>
                    Hello, I am a software developer.
                </p>
            </Section>
        </>
    )
}

export { MainPage };