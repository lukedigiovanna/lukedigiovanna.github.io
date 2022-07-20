import React from "react";
import core from "../core";
import { Vector2 } from "../models/math.model";

interface SectionProperties {
    children: React.ReactNode;
    zoomPosition: Vector2;
    zoomScale: number;
}

export function Section(props: SectionProperties) {
    // zoom position refers to the position on the screen.
    const [zoomPosition, setZoomPosition] = React.useState({x: 0, y: 0});
    const [zoomScale, setZoomScale] = React.useState(1.0);

    const divRef = React.useRef<HTMLDivElement>(null);

    const readjustZoom = () => {
        const size = 2 * core.scale; // size of the screen in mandelbrot coordinates
        const m_lx = core.position.x - size / 2.0; // left x coordinate of the screen in mandelbrot coordinates
        const p_x = (props.zoomPosition.x - m_lx) / size * window.innerWidth;
        const m_by = core.position.y - size / 2.0;
        const p_y = window.innerHeight - (props.zoomPosition.y - m_by) / size * window.innerHeight;
        const sc = (1 / core.scale) / props.zoomScale;
        setZoomPosition({
            x: p_x + (divRef.current?.clientWidth as number * (sc - 1) / 2), 
            y: p_y + (divRef.current?.clientHeight as number * (sc - 1) / 2)
        });
        setZoomScale(sc);
    }

    React.useEffect(() => {
        setInterval(readjustZoom, 0);
    }, [])

    return (
        <div
            style={{
                position: "absolute",
                top: `${zoomPosition.y}px`,
                left: `${zoomPosition.x}px`,
                // border: "1px solid black",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                color: '#ddd',
                fontFamily: 'sans-serif',
                transform: `scale(${zoomScale}, ${zoomScale})`
            }}

            ref={divRef}
        >
            {props.children}
        </div>
    )
}