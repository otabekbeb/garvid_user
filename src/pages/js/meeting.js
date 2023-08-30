import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "./Host";

export default function Video({ match }) {
  const [domain,setDomain]=useState("")
  const id = match.params.id;

  useEffect(() => {
    axios.get(`${url}/super/pay`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      const domain = `https://${res.data.domain}.daily.co/`;
      setDomain(domain)
    })

    axios
      .get(`${url}/video-call/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const script = document.createElement("script");
          script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "relative",
              width: "100%",
              height: "100%",
              border: "0",
              zIndex: 9999
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${domain}${id}",
          });`;

          document.body.appendChild(script);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div></div>;
}