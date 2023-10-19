import Container from "@/components/container";

const TermsView = () => {
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
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </>
  );
};
export default TermsView;
