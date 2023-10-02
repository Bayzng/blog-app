import React from "react";
import images from "../Assets/watch-3.jpg";
import "./modal.css";

const SideModal = () => {
  return (
    <div>
      <div class="notification-toast" data-toast>
        <button class="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="toast-banner">
          <img src={images} alt="Rose Gold Earrings" width="80" height="70" />
        </div>

        <div class="toast-detail">
          <p class="toast-message">Enjoy the latest trends</p>

          <p class="toast-title">Did you know</p>

          <p class="toast-meta">
            <time datetime="PT2M">#LatestTrend</time> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
