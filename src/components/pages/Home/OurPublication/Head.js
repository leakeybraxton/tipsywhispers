import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const Head = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <>
     
            <div className="Title-Head" data-aos="zoom-in-up" data-aos-offset="200"  data-aos-duration="600" onScroll="AOS">
              <h6>~NEWS AND BLOGS</h6>
              <h2>Our Latest Publications</h2>
              <p>
                Explore all of our courses and pick your suitable ones to enroll
                and start learning with us! We ensure that you will never regret
                it!
              </p>
            </div>
           
    </>
  );
};
