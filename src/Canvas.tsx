import React from "react";

interface CanvasProperties {
    render: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

const Canvas: React.FC<CanvasProperties> = ({ render }) => {
    const ref = React.useRef(null);

    const animationFrame = React.useMemo(() => {
        return () => {
            if (ref && ref.current) {
                const canvas = ref.current as HTMLCanvasElement;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    render(ctx, canvas.width, canvas.height);
                    window.requestAnimationFrame(animationFrame);
                }
            }
        }
    }, [render]);

    React.useEffect(() => {
        window.requestAnimationFrame(animationFrame);
    }, [ref, animationFrame]);

    return <canvas ref={ref} className="w-[100vw] h-[100vh] fixed left-0 top-0 z-[-1]"> </canvas>
}

export { Canvas };