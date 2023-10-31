import Container from "@/components/container";

const PrivacyView = () => {
  const html = `
    <div name="termly-embed" data-id="e72da268-efb9-4022-953c-3176bf1b3512"></div>
    <script type="text/javascript">(function(d, s, id) {
        var js, tjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://app.termly.io/embed-policy.min.js";
          tjs.parentNode.insertBefore(js, tjs);
        }(document, 'script', 'termly-jssdk'));
   </script>`;

  return (
    <>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </>
  );
};

export default PrivacyView;
