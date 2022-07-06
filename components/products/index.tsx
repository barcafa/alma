import { useEffect, useState } from "react"

export type ProductType = {
    name: string,
    amount: number,
    price: number
}

type Props = {
    products: ProductType[]
}

export const Products: React.FC<Props> = ({
    products}) => {
        const [count, setCount] = useState(0)
        const [productTotal, setProductTotal] = useState(0);

        useEffect(()=> {
            const productTotal = products.reduce((total, product) => total + product.price * count, 0)
            setProductTotal(productTotal)
        }, [products])
     
        return (
            <ul>
                {products.map(product =>
                    <li>
                        {product.name}
                        <button onClick={() => setCount(count + 1)}>Add</button>
                        {product.price}
                    </li>
                )}
                <div>{count}</div>
                <div>Total {productTotal}</div>
            </ul>
            
        )
    }
