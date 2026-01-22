import { useEffect, useRef } from "react";

const HubspotAutoForm = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    if (document.getElementById("hubspot-embed-script")) return;

    const script = document.createElement("script");
    script.id = "hubspot-embed-script";
    script.src = "https://js-na2.hsforms.net/forms/embed/244907953.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na2"
      data-portal-id="244907953"
      data-form-id="d8e8aee4-29fb-4ff6-b990-fccc1bf4f7e8"
    />
  );
};

export default HubspotAutoForm;
