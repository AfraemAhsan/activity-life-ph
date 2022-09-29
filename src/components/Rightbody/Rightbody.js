import React from "react";

const Rightbody = () => {
  return (
    <div>
      <div className="flex flex-row profile">
        <img
          src="https://p.kindpng.com/picc/s/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
          className="w-[70px] h-[70px]"
          alt=""
        />
        <div>
          <h2>Zahid</h2>
          <span>Location : </span>
        </div>
      </div>
      <div className="about-healty">
        <h3>
          75 <span>weight</span>
        </h3>
        <h3>
          75 <span>weight</span>
        </h3>
        <h3>
          75 <span>weight</span>
        </h3>
      </div>
      <div className="second">
        <h5>10s</h5>
        <h5>10s</h5>
        <h5>10s</h5>
        <h5>10s</h5>
      </div>
      <div className="details">
        <h3>Excercise Details</h3>
        <div>
          <h4>
            Excercise Time <span>200s</span>
          </h4>
          <h4>
            Excercise Time <span>200s</span>
          </h4>
        </div>
      </div>
      <button>Activity Completed</button>
    </div>
  );
};

export default Rightbody;
