import React from "react";

function Main({ filteredCar, filteredYear }) {
  return (
    <div className="grid-container">
      <main className="main">
        <div className="content">
          <ul className="products">
            {(filteredCar || filteredYear).map((product, i) => (
              <li key={i}>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  ></img>
                  <span className="product-name">{product.name}</span>
                  <span className="product-brand">{product.brand}</span>
                  <div className="product-year">{product.year}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">All rigth rsserved.</footer>
    </div>
  );
}
export default Main;
