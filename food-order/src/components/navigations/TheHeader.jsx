import Logo from '../../assets/logo.jpg'
import CustomButton from '../UI/CustomButton'
export default function TheHeader() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={Logo} alt="App logo" />
                <h1>Food Order</h1>
            </div>
            <nav>
                <CustomButton textOnly>Cart (0)</CustomButton>
            </nav>
        </header>
    )
}