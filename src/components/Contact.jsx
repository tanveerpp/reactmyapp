import React from "react";
 
const Contact = (Props) => {
  return (
    <div className="container">
      <h1>{Props.name}</h1>
      <br />
      <div className="row">
        <div className="container col-6">
          <form className="row g-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                placeholder="Alex"
                aria-describedby="emailHelp"
              />
            </div>
 
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="alexisamazing@email,.com"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Product is good"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                placeholder="i cant explain that how good is the product"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
 
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Message Us
              </button>
            </div>
          </form>
        </div>
        <div className=" container col-4"></div>
      </div>
    </div>
  );
};
 
export default Contact;
 
 