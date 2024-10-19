import React, { useEffect } from 'react';
import '../../index.css';

// InstagramPost component
const InstaPostOne = () => {
  useEffect(() => {
    // Load Instagram's embed JavaScript
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script from DOM on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram-container">
      <div
        className="instagram-post"
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/CzlsMHohdJ3/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; padding:0; width:100%;">
              <div style="padding:16px;">
                <a href="https://www.instagram.com/p/CzlsMHohdJ3/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  style="background:#FFFFFF; line-height:0; padding:0; text-align:center; text-decoration:none; width:100%;" 
                  target="_blank">
                  <div style="display: flex; flex-direction: row; align-items: center;">
                    <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 30px; margin-right: 10px; width: 30px;"></div>
                    <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                      <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 12px; margin-bottom: 5px; width: 80px;"></div>
                      <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 12px; width: 50px;"></div>
                    </div>
                  </div>
                  <div style="padding: 15% 0;"></div>
                  <div style="display:block; height:40px; margin:0 auto 10px; width:40px;">
                    <svg width="40px" height="40px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.562,25.756 558.743,26.244 560.652,26.654 C562.623,27.196 564.297,28.377 565.965,30.349 C567.633,32.258 568.659,34.438 568.8,37.631 C568.944,40.831 568.979,41.851 568.979,50 C568.979,58.147 568.944,59.17 568.8,62.369 C568.659,65.562 568.2,67.743 567.586,69.651 C566.978,71.625 565.972,73.296 564.297,74.965 C562.623,76.634 560.97,77.658 558.98,78.425 C556.949,79.167 554.746,79.673 551.582,79.82 C548.389,79.965 547.346,80.001 541,80.001 C534.052,80.001 533.058,79.965 529.86,79.82 C526.658,79.673 524.47,79.167 522.443,78.425 C520.458,77.658 518.787,76.634 517.129,74.965 C515.473,73.296 514.464,71.625 513.849,69.651 C513.236,67.743 512.739,65.562 512.597,62.369 C512.453,59.17 512.418,58.147 512.418,50 C512.418,41.851 512.453,40.831 512.597,37.631 C512.739,34.438 513.236,32.258 513.849,30.349 C514.464,28.377 515.473,26.702 517.129,25.035 C518.787,23.368 520.458,22.342 522.443,21.575 C524.47,20.834 526.658,20.326 529.86,20.18 C533.058,20.033 534.052,20 541,20 C547.346,20 548.389,20.033 551.582,20.18 C554.746,20.326 556.949,20.834 558.98,21.575 C560.97,22.342 562.623,23.368 564.297,25.035 C565.972,26.702 567.633,28.877 568.659,30.549 C569.425,32.541 570.167,34.722 570.82,37.631 C570.966,40.831 571,41.851 571,50 C571,58.147 570.966,59.17 570.82,62.369"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div style="padding-top: 8px;">
                    <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:12px; font-style:normal; font-weight:550; line-height:14px;">
                      View this post on Instagram
                    </div>
                  </div>
                  <div style="padding: 10% 0;"></div>
                  <div style="display: flex; flex-direction: row; margin-bottom: 10px; align-items: center;">
                    <div>
                      <div style="background-color: #F4F4F4; border-radius: 50%; height: 10px; width: 10px; transform: translateX(0px) translateY(5px);"></div>
                      <div style="background-color: #F4F4F4; height: 10px; transform: rotate(-45deg) translateX(2px) translateY(1px); width: 10px; flex-grow: 0; margin-right: 10px; margin-left: 1px;"></div>
                      <div style="background-color: #F4F4F4; border-radius: 50%; height: 10px; width: 10px; transform: translateX(7px) translateY(-14px);"></div>
                    </div>
                    <div style="margin-left: 5px;">
                      <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 15px; width: 15px;"></div>
                      <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 4px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(8px) translateY(-2px) rotate(30deg)"></div>
                    </div>
                    <div style="margin-left: auto;">
                      <div style="width: 0px; border-top: 6px solid #F4F4F4; border-right: 6px solid transparent; transform: translateY(12px);"></div>
                      <div style="background-color: #F4F4F4; flex-grow: 0; height: 8px; width: 12px; transform: translateY(-3px);"></div>
                      <div style="width: 0; height: 0; border-top: 6px solid #F4F4F4; border-left: 6px solid transparent; transform: translateY(-3px) translateX(6px);"></div>
                    </div>
                  </div>
                  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 16px;">
                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 10px; margin-bottom: 4px; width: 160px;"></div>
                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 10px; width: 100px;"></div>
                  </div>
                </a>
              </div>
            </blockquote>
          `,
        }}
      />
    </div>
  );
};

export default InstaPostOne;
