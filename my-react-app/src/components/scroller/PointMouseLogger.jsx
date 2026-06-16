import useMousePosition from './MousePosition';

const PointMouseLogger = () => {
    const { x, y } = useMousePosition();
    return (
        <p>
            ({ x }, { y })
        </p>
    )
};

export default PointMouseLogger