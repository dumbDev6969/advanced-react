import useMousePosition from './MousePosition';

const PanelMouseLogger = () => {
const { x, y } = useMousePosition();

    return (
        <div>
            <p>x: { x }</p>
            <p>y: { y } </p>
        </div>
    )
}

export default PanelMouseLogger