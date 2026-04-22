import './productview.css'

function ProductView({key, prod}){



    return (
        <div className='productview-div'>
            <figure>
                <img src={prod.imgsrc}></img>
            </figure>
            <figcaption>
                <p>{prod.name}</p>
                <p>{prod.price}</p>
            </figcaption>
        </div>
    )
}

export default ProductView;