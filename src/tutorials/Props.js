
const Props = ({product}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={product.image} alt="product" className="img-fluid" />
                <hr />
                <div className="text-center">
                    <p><b>{product.name}</b></p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Props