import Switch from '../switch/index'

const Header = ({ headerTitle}) => {
    return (
        <div>
            <h1>{ headerTitle }</h1>
            <Switch />
        </div>
    )
}

export default Header