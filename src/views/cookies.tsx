import Container from "@/components/container";

const CookiesView = () => {
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
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </>
  );
};

export default CookiesView;
