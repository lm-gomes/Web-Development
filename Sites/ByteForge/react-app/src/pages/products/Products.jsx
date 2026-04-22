import Header from '../main/Header.jsx'
import ProductView from './ProductView.jsx';
import { useState } from 'react';
import './products.css'

function Products(){



    const handleSubmit = async (e) =>{
        e.preventDefault();
        const text = e.target.userMessage.value;

        const request = await fetch('http://localhost:8080/products', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                message: text
            })

        })

        const data = await request.json()
        console.log(data)
    }


    const [produtos, setProdutos] = useState([])

    const adicionarProduto = async (e) =>{
        e.preventDefault();

        const name = e.target.product.value;
        const price = e.target.price.value;
        const file = e.target.path.files[0];
        const imgsrc = URL.createObjectURL(file)

        console.log(imgsrc)

        setProdutos([...produtos, {name, price, imgsrc}])



    }

    return (
        <div className="main">
            <Header/>

            <form onSubmit={adicionarProduto}>
                <label>Escolha uma foto </label>
                <input type='file' name='path'></input>
                <input type="text" placeholder='Nome do produto' name='product'></input>
                <input type="number" placeholder='Preço' name='price'></input>
                <button type="submit">Adicionar</button>
            </form>
            <div className='product-list'>
                {produtos.map((prod, i) => <ProductView key={i} prod={prod}></ProductView>)}
            </div>
        </div>
    );
}

export default Products