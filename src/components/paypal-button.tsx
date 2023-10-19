"use client";

import { Box } from "@chakra-ui/react";
import Script from "next/script";
import { useEffect, useState } from "react";

const PaypalButton = () => {
  const [html, setHtml] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "PayPal" in window) {
      setHtml(true);
    }
  }, []);

  return (
    <>
      <Box>
        <div id="donate-button-container">
          <div id="donate-button" />
          {html && (
            <Script id="paypal-button-code" strategy="afterInteractive">
              {`
            window.PayPal.Donation.Button({
              env: 'production',
              hosted_button_id:'L5NKAU8CE3GBL',
              image: {
              src:'https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif',
              alt:'Donate with PayPal button',
              title:'PayPal - The safer, easier way to pay online!',
              onComplete: function (params) {
                 console.log("completed")
              },
            }
            }).render('#donate-button');
        `}
            </Script>
          )}
        </div>
      </Box>
    </>
  );
};

export default PaypalButton;
