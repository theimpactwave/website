import type { Metadata } from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "The Impact Wave - Terms of use",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Terms = () => {
  const html = `
    <div name="termly-embed" data-id="08e069d7-7378-4dfc-a73d-6efcfe87dfc3"></div>
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

export default Terms;
