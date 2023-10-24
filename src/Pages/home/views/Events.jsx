import React, { useState } from "react";
import ApiUrl from "../../../Components/API/Api";
import axios from "axios";
import { useEffect } from "react";
function Events() {
  const [causes, setcauses] = useState([]);
  const [title, settitle] = useState([]);
  const [description, setdescription] = useState([]);

  useEffect(() => {
    const apiUrl = `${ApiUrl}/get/post/4`;
    axios
      .get(apiUrl)
      .then((response) => {
        setcauses(response.data.data);
        settitle(response.data.category_name);
        setdescription(response.data.category_description);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <section className="events">
        <div className="container">
          <div className="session-title row">
            <h2>{title}</h2>
            <p
              style={{ textAlign: "center", width: "40%" }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="event-ro row">
            {causes.map((item) => (
              <div className="col-md-4 col-sm-6">
                <div className="event-box">
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                  <p
                    className="desic"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <button className="btn btn-success btn-sm">Donate Now</button>
                </div>
              </div>
            ))}
            {/* <div className="col-md-4 col-sm-6">
                <div className="event-box">
                  <img src="assets/images/events/image_06.jpg" alt="" />
                  <h4>Child Education in Africa</h4>
                  <p className="raises">
                    <span>Raised : 34,425</span> / 500,000
                  </p>
                  <p className="desic">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <button className="btn btn-success btn-sm">Donate Now</button>
                </div>
              </div> */}
            {/* <div className="col-md-4 col-sm-6">
                <div className="event-box">
                  <img src="assets/images/events/image_04.jpg" alt="" />
                  <h4>Child Education in Africa</h4>
                  <p className="raises">
                    <span>Raised : 34,425</span> / 500,000
                  </p>
                  <p className="desic">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <button className="btn btn-success btn-sm">Donate Now</button>
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
