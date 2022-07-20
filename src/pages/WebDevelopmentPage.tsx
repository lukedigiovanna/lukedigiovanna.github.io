import { Section } from "../components/Section";
import { useNavigate } from "react-router-dom";

export function WebDevelopmentPage() {
    const navigate = useNavigate();

    return (
        <>
            <Section zoomPosition={{x: -1.2, y: 0.15}} zoomScale={4}>
                <h1> Web Development </h1>
                <p>
                    Aside from a bash script, JavaScript and HTML were the first two languages I learned.
                </p>
            </Section>
            <Section zoomPosition={{x: -1.16, y: -0.23}} zoomScale={4}>
                <a onClick={() => {
                    navigate("/test-page");
                }}>
                    Testing Page!
                </a>
            </Section>
        </>
    )
}