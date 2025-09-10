import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
        <p>homeeee</p>
        <Link to={'/products'}>To Products</Link>
        </>
    )
}