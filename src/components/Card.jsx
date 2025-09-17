import React from 'react'
import { Link } from 'react-router-dom';

function Card({ products }) {
  console.log(products);

  return (
    <div className="row g-4">
      {products.map(item => (
        <div className="col-md-3" key={item.id}>
          <Link 
            to={`/viewproduct/${item.id}`} 
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 shadow-sm">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="card-img-top" 
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card
