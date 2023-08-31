import React, { useEffect } from "react";
import axios from "axios";
import URL from "./js/Host";

export default function Video({ match }) {
  const id = match.params.id;

  useEffect(() => {
    axios
      .get(`${URL}/super/pay`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then((res1) => {
        axios
          .get(`${URL}/video-call/${id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token")}
          })
          .then((res) => {
            if (res.status === 200) {
              const script = document.createElement("script");
              script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "fixed",
              width: "100%",
              top: 0,
              bottom:0,
              left:0,
              right:0,
              height: "100%",
              border: "0",
              zIndex: 9999
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${res1.data.domain}${id}",
          });`;
              document.body.appendChild(script);
            }
          })
          .catch((err) => console.log(err));
      });
  }, [id]);

  return <div></div>;
}
