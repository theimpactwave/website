import type { Metadata } from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "The Impact Wave - Cookie policy",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Cookies = () => {
  const html = `
    <div name="termly-embed" data-id="3e2e5459-e6db-49d8-aa41-baf9173e73d6"></div>
    <script type="text/javascript">(function(d, s, id) {
        var js, tjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://app.termly.io/embed-policy.min.js";
        tjs.parentNode.insertBefore(js, tjs);
      }(document, 'script', 'termly-jssdk'));
   </script>
  `;

  return (
    <>
      <main>
        <DefaultLayout>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Container>
        </DefaultLayout>
      </main>
    </>
  );
};

export default Cookies;
