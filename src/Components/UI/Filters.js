import React from "react";
import module from "./Filters.module.css";

const Filters = (props) => {
    return (
      <>

<div className={module.websites}>
        <h3>Websites</h3>
            <label>
                <input type="checkbox" name="daraz" value="daraz" />
                Daraz
            </label>
            <label>
                <input type="checkbox" name="priceoye" value="priceoye" />
                PriceOye
            </label>
            <label>
                <input type="checkbox" name="shophive" value="shophive" />
                Shophive
            </label>
            <label>
                <input type="checkbox" name="qmart" value="qmart" />
                QMart
            </label>
            <label>
                <input type="checkbox" name="symbios" value="symbios" />
                Symbios
            </label>
        </div>
        <hr />

        <div className={module.websites}>
        <h3>Brands</h3>
          <label>
            <input type="checkbox" name={props.f1} value= {props.f1} />
            {props.f1}
          </label>
          <label>
            <input type="checkbox" name={props.f2} value={props.f2} />
            {props.f2}
          </label>
          <label>
            <input type="checkbox" name={props.f3} value={props.f3} />
            {props.f3}
          </label>
          <label>
            <input type="checkbox" name={props.f4} value={props.f4} />
            {props.f4}
          </label>
        </div>
        <hr />
        

      </>
    );
};

export default Filters;