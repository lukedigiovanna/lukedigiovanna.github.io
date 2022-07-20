import { Section } from "../components/Section";

export function AboutPage() {
    return (
        <>
            <Section zoomPosition={{x: -0.5, y: 0.5}} zoomScale={1.2}>
                <h1> Luke DiGiovanna </h1>
                <p>
                    Hello, I am a software developer.
                </p>
                <p>
                    My Skills:
                </p>
                <ul>
                    <li>React.js + Typescript</li>
                    <li>Nodejs, express, socket.io, postgresql</li>
                    <li>C/C++</li>
                    <li>Python + opencv</li>
                    <li>HTML/CSS</li>
                </ul>
            </Section>
        </>
    )
}