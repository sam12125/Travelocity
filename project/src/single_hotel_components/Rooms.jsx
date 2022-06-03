import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./rooms.module.css";

const Rooms = ({a,b,c,d,e,f,g,h,i,j,k,l,m,n,o}) => {
  let navigate=useNavigate()
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.imgDiv}>
          <img
            src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/20dc6d28.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
            alt=""
          />
        </div>
        <h3>Room,Lagoon View</h3>
        <div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3916/3916996.png"
              alt=""
            />
            <p>{a}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914775.png"
              alt=""
            />
            <p> {b}</p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074654.png"
              alt=""
            />
            <p> {c} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3914/3914600.png"
              alt=""
            />
            <p> {d} </p>
          </div>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5074/5074014.png"
              alt=""
            />
            <p> {e} </p>
          </div>
          <div>
            <a href=".#">More details </a>
          </div>
          <hr />
        </div>
        <div className={styles.extras}>
          <h3>Extras</h3>

          <div>
            <div>
              <input type="radio" />
              <p> {f} </p>
            </div>
            <div>
              <p> {g}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {h} </p>
            </div>
            <div>
              <p> {i}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p>{j} </p>
            </div>
            <div>
              <p> {k}</p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {l} </p>
            </div>
            <div>
              <p> {m} </p>
            </div>
          </div>
          <div>
            <div>
              <input type="radio" />
              <p> {n}</p>
            </div>
            <div>
              <p> {o}</p>
            </div>
          </div>
        </div>
        <div className={styles.btndiv}>
          <div>
            {" "}
            <h1>+ $30</h1>
            <button onClick={()=>navigate("/payment")}>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
