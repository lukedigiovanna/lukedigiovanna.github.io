import { Section } from "../components/Section";

export function TestPage() {
    return (
        <>
            <Section zoomPosition={{x: -1.155, y: -0.217}} zoomScale={32}>
                <h1> Test Page! </h1>
                <p>
                    This is where some descriptions/images of a project would go.
                </p>
                <p>
                    We can also add a nice table linking area too.
                </p>
            </Section>
        </>
    )
}