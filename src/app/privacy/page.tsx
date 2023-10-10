import { Heading } from "@chakra-ui/react";
import type { Metadata } from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "The Impact Wave - Privacy policy",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Policy = () => {
  const html = `
<p>
  <strong>Last updated</strong>
  <strong>October 01, 2023</strong>
</p>
<p>This privacy notice for The Impact Wave (in funding) (" <strong>we</strong>," " <strong>us</strong>," or " <strong>our</strong>"), describes how and why we might collect, store, use, and/or share (" <strong>process</strong>") your information when you use our services (" <strong>Services</strong>"), such as when you: </p>
<p>
  <strong>Questions or concerns?&nbsp;</strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at team@theimpactwave.org.
</p>
<p>
  <strong>SUMMARY OF KEY POINTS</strong>
</p>
<p>
  <strong>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our&nbsp;</strong>
  <a href="#toc">
    <strong>table of contents</strong>
  </a>
  <strong>&nbsp;below to find the section you are looking for.</strong>
</p>
<p>
  <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about&nbsp; <a href="#personalinfo">personal information you disclose to us</a>.
</p>
<p>
  <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
</p>
<p>
  <strong>Do we receive any information from third parties?</strong> We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about&nbsp; <a href="#othersources">information collected from other sources</a>.
</p>
<p>
  <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about&nbsp; <a href="#infouse">how we process your information</a>.
</p>
<p>
  <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about&nbsp; <a href="#whoshare">when and with whom we share your personal information</a>.
</p>
<p>
  <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about&nbsp; <a href="#privacyrights">your privacy rights</a>.
</p>
<p>
  <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a&nbsp; <a href="https://app.termly.io/notify/e72da268-efb9-4022-953c-3176bf1b3512">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
</p>
<p>Want to learn more about what we do with any information we collect?&nbsp; <a href="#toc">Review the privacy notice in full</a>. </p>
<p>
  <strong>TABLE OF CONTENTS</strong>
</p>
<p>
  <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
</p>
<p>
  <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
</p>
<p>
  <a href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
</p>
<p>
  <a href="#cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
</p>
<p>
  <a href="#sociallogins">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
</p>
<p>
  <a href="#intltransfers">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a>
</p>
<p>
  <a href="#inforetain">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
</p>
<p>
  <a href="#infominors">8. DO WE COLLECT INFORMATION FROM MINORS?</a>
</p>
<p>
  <a href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
</p>
<p>
  <a href="#DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
</p>
<p>
  <a href="#DNT"></a>
</p>
<p>
  <a href="#DNT"></a>
  <a href="#policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
</p>
<p>
  <a href="#contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
</p>
<p>
  <a href="#request">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
</p>
<p>
  <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
</p>
<p>
  <strong>Personal information you disclose to us</strong>
</p>
<p>
  <strong>In Short:</strong>
  <strong>&nbsp;</strong>We collect personal information that you provide to us.
</p>
<p>We collect personal information that you voluntarily provide to us when you register on the Services,&nbsp;express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
<p>
  <strong>Sensitive Information.</strong> We do not process sensitive information.
</p>
<p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
<p>
  <strong>Information automatically collected</strong>
</p>
<p>
  <strong>In Short:</strong>
  <strong>&nbsp;</strong>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
</p>
<p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
<p>Like many businesses, we also collect information through cookies and similar technologies.</p>
<p>
  <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
</p>
<p>
  <strong>In Short:&nbsp;</strong>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
</p>
<p>
  <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
</p>
<p>
  <strong>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong>
</p>
<p>
  <strong>In Short:</strong>&nbsp;We may share information in specific situations described in this section and/or with the following third parties.&nbsp;
</p>
<p>We may need to share your personal information in the following situations:</p>
<ul>
  <li>
    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
  </li>
</ul>
<ul>
  <li>
    <strong>Affiliates.&nbsp;</strong>We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
  </li>
</ul>
<ul>
  <li>
    <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
  </li>
</ul>
<p>
  <strong>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong>
</p>
<p>
  <strong>In Short:</strong>&nbsp;We may use cookies and other tracking technologies to collect and store your information.
</p>
<p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
<p>
  <strong>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
</p>
<p>
  <strong>In Short:&nbsp;</strong>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
</p>
<p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
<p>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
<p>
  <strong>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</strong>
</p>
<p>
  <strong>In Short:&nbsp;</strong>We may transfer, store, and process your information in countries other than your own.
</p>
<p>Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see " <a href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>" above), in&nbsp;and other countries. </p>
<p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</p>
<p>
  <strong>7. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
</p>
<p>
  <strong>In Short:&nbsp;</strong>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
</p>
<p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
<p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
<p>
  <strong>8. DO WE COLLECT INFORMATION FROM MINORS?</strong>
</p>
<p>
  <strong>In Short:</strong>&nbsp;We do not knowingly collect data from or market to children under 18 years of age.
</p>
<p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at team@theimpactwave.org.</p>
<p>
  <strong>9. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
</p>
<p>
  <strong>In Short:</strong>&nbsp;&nbsp;You may review, change, or terminate your account at any time.
</p>
<p>
  <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section " <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
</p>
<p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
<p>
  <strong>Account Information</strong>
</p>
<p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
<p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.&nbsp;</p>
<p>
  <strong>10. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
</p>
<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
<p>
  <strong>11. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
</p>
<p>
  <strong>In Short:&nbsp;</strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.
</p>
<p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
<p>
  <strong>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
</p>
<p>If you have questions or comments about this notice, you may email us at team@theimpactwave.org
<p>
  <strong>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong>
</p>
<p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a&nbsp; <a href="https://app.termly.io/notify/e72da268-efb9-4022-953c-3176bf1b3512">data subject access request</a>. </p>
<p>This privacy policy was created using Termly's <a href="https://termly.io/products/privacy-policy-generator/">Privacy Policy Generator</a>. </p>
  `;

  return (
    <DefaultLayout>
      <Container
        sx={{
          p: { mb: 4 },
        }}
      >
        <Heading as={"h1"} mb={8}>
          Privacy Policy
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </DefaultLayout>
  );
};

export default Policy;
