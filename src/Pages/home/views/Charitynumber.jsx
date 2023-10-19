import React, { useEffect } from 'react'

function Charitynumber() {
    useEffect(() => {
        function animateValue(obj, start, end, duration) {
            let current = start;
            const increment = (end - start) / duration;
            const element = document.querySelector(obj);
            const animation = setInterval(function () {
                current += increment;
                element.innerHTML = Math.round(current);
                if (current >= end) {
                    clearInterval(animation);
                    element.innerHTML = end;
                }
            }, 1);
        }

        animateValue(".numb:nth-child(1) h3", 0, 12, 2000);
        animateValue(".numb:nth-child(2) h3", 0, 1812, 2000);
        animateValue(".numb:nth-child(3) h3", 0, 52, 2000);
        animateValue(".numb:nth-child(4) h3", 0, 48, 2000);
    }, []);
    return (
        <>
            <div className="doctor-message">
                <div className="inner-lay">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Our Achievements</h2>
                            <p>
                                We can talk for a long time about advantages of our Dental clinic
                                before other medical treatment facilities. But you can read the
                                following facts in order to make sure of all pluses of our clinic:
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 numb">
                                <h3>0</h3>
                                <span>YEARS OF EXPERIENCE</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>0</h3>
                                <span>HAPPY CHILDREN</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>0</h3>
                                <span>EVENTS</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>0</h3>
                                <span>FUNDS RAISED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Charitynumber
