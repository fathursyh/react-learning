import { Link} from "react-router-dom";

export default function ProductPage() {
    // const apiData = useLoaderData();
    return (
        <>
            <p>product</p>
            <ul>
                <li>
                    <Link to={'/products/detail/1'}>Product 1</Link>
                    <Link to={'/products/detail/2'}>Product 2</Link>
                    <Link to={'/products/detail/3'}>Product 3</Link>
                </li>
            </ul>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function productLoader() {
    return 'data';
}