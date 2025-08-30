import React, { useState } from "react";
import axios from "axios";
import "./author.css";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Authors = () => {
  const [authorData, setAuthorData] = useState([]);
  axios.get("http://localhost:5000/api/getallauthor").then((res) => {
    // console.log(res.data);
    setAuthorData(res.data.authorData);
  });
  return (
    <div className="container">
      <div className="authorHeader">
        <h1>Authors</h1>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem
          tenetur laudantium eaque iste error enim, quod porro, officia obcaec
        </p>
      </div>
      <div className="pt-3 main-author">
        <marquee behavior="scroll" direction="left" scrollamount='25' loop='infinite' onMouseOver="this.stop();" onMouseOut="this.start();" >
          <div className="author_slider">
            {/* <Carousel> */}
            {authorData.map((items, index) => {
              return (

                <div key={index} className="p-5">
                  <Link className="nav-link" to={`/showAuthorDetails/${items.author_name}`}>
                    <div>
                      <div className="inner-img">
                        <img
                          src={process.env.REACT_APP_IMAGE_PATH + "author/" + items.author_image} alt="" />
                      </div>
                      <div className="inner-content">
                        <h5>{items.author_name}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            {/* </Carousel> */}
          </div>
        </marquee>
      </div >
    </div >
  );
};
