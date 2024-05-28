import React from "react";
import data from "../jsons/New_Products.json";

function TableCard() {
  return (
    <div className='col-md-12'>
      <div className='card table-card'>
        <div className='card-header'>
          <h5>New Products</h5>
          <div className='card-header-right'>
            <ul className='list-unstyled card-option'>
              <li className='first-opt'>
                <i className='feather icon-chevron-left open-card-option' />
              </li>
              <li>
                <i className='feather icon-maximize full-card' />
              </li>
              <li>
                <i className='feather icon-minus minimize-card' />
              </li>
              <li>
                <i className='feather icon-refresh-cw reload-card' />
              </li>
              <li>
                <i className='feather icon-trash close-card' />
              </li>
              <li>
                <i className='feather icon-chevron-left open-card-option' />
              </li>
            </ul>
          </div>
        </div>
        <div className='card-block p-b-0'>
          <div className='table-responsive'>
            <table className='table table-hover m-b-0'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product Code</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.new_products.map((el, idx) => {
                  let elStar = [];
                  for (let i = 0; i < 5; i++) {
                    if (i < el.rating) {
                      elStar.push(
                        <a href='#!' key={i}>
                          <i className='fa fa-star f-12 text-c-yellow' />
                        </a>
                      );
                    } else {
                      elStar.push(
                        <a href='#!' key={i}>
                          <i className='fa fa-star f-12 text-default' />
                        </a>
                      );
                    }
                  }

                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.product_code}</td>
                      <td>{el.customer}</td>
                      <td>
                        <label
                          className={
                            "label " +
                            (el.status == "In Stock"
                              ? "label-danger"
                              : "label-success")
                          }
                        >
                          Out Stock
                        </label>
                      </td>
                      <td>
                        {elStar.map((el) => (
                          <>{el}</>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCard;
