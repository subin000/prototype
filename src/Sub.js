import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Contactus';

const Sub = () => {
  return (
    <section className="subscription-section py-5">
      <div className="container text-center">
        <h1 className="mb-4">Choose Your Subscription Plan</h1>
        <p className="lead mb-5">Get delicious meals delivered to your door weekly, monthly, or yearly at the best rates!</p>
        
        <div className="row g-4">
          
          {/* Weekly Plan */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-info text-white">
                <h3 className="card-title">Weekly Plan</h3>
                <p className="card-subtitle">$29.99 / week</p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>5 Meals per Week</li>
                  <li>Free Delivery</li>
                  <li>Flexible Menu</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-info w-100">Subscribe Weekly</button>
              </div>
            </div>
          </div>
          
          {/* Monthly Plan */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="card-title">Monthly Plan</h3>
                <p className="card-subtitle">$99.99 / month</p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>20 Meals per Month</li>
                  <li>Free Delivery</li>
                  <li>Priority Support</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary w-100">Subscribe Monthly</button>
              </div>
            </div>
          </div>
          
          {/* Yearly Plan */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-success text-white">
                <h3 className="card-title">Yearly Plan</h3>
                <p className="card-subtitle">$999.99 / year</p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>240 Meals per Year</li>
                  <li>Free Delivery</li>
                  <li>Exclusive Discounts</li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-success w-100">Subscribe Yearly</button>
              </div>
            </div>
          </div>
          
        </div>
        <Contactus/>
      </div>
      
    </section>
  );
};

export default Sub;
