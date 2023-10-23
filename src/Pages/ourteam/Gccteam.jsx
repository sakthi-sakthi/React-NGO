import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiUrl from '../../Components/API/Api';

function Gccteam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios.get(`${ApiUrl}/get/gallery_images`)
      .then(response => {
        setTeamMembers(response?.data?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section className="our-team team-11">
        <div className="container">
          <div className="session-title row">
            <h2>GCC Team Members</h2>
            <p>Meet Our GCC Team Members</p>
          </div>
          <div className="row team-row">
            {teamMembers?.map((member, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="single-usr">
                  <img src={member.image} alt={member.title} style={{ height: "280px" }} />
                  <div className="det-o">
                    <h4>{member.title}</h4>
                    <i>{member.alt_tag}</i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gccteam;
