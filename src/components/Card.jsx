import React from 'react'

const Card = (Props) => {
    return (
        <>
        <div className="col-sm-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="https://realbusinessda.s3.eu-west-2.amazonaws.com/wp-content/uploads/2015/02/media.caspianmedia.comimage97dd9a06edb37bc5c3ab75d27e1398b2-6350489d6aba5170ffba3c6780c7c7db9f8a94bc.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{Props.name}</h5>
            <h5 className="card-title">{Props.price}</h5>
            <h5 className="card-title">{Props.cat}</h5>
            <h5 className="card-title">{Props.cmp}</h5>
            <a href="https://www.paypal.com/in/signin" className="btn btn-primary">Buy Now</a>
  </div>
  </div>
</div>
        </>
    )
}

export default Card
