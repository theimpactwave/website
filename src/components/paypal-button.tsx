import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PaypalButton = () => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHtml(`
    <script>
    PayPal.Donation.Button({
env:'production',
hosted_button_id:'ZT8QZRJQU7R34',
image: {
src:'https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif',
alt:'Donate with PayPal button',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');
</script>`);
    }
  }, []);

  return (
    <>
      <Box>
        <div id="donate-button-container">
          <div id="donate-button" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Box>
    </>
  );
};

export default PaypalButton;
