import { Heading } from "@chakra-ui/react";
import type { Metadata } from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "The Impact Wave - Terms of use",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Terms = () => {
  const html = `
<p>
  <strong>Last updated</strong>
  <strong>October 01, 2023</strong>
</p>
<p>
  <strong>AGREEMENT TO OUR LEGAL TERMS</strong>
</p>
<p>We are The Impact Wave (in funding) ( " <strong>Company</strong>," " <strong>we</strong>," " <strong>us</strong>," " <strong>our</strong>" ) , a company registered in Germany at Hedderichstr. 65 , Frankfurt , Hessen 60596 . </p>
<p>We operate the website <a href="http://www.theimpactwave.org">http://www.theimpactwave.org</a> (the " <strong>Site</strong>" ) , as well as any other related products and services that refer or link to these legal terms (the " <strong>Legal Terms</strong>" ) (collectively, the " <strong>Services</strong>" ). </p>
<p>You can contact us by email at team@theimpactwave.org or by mail to Hedderichstr. 65 , Frankfurt , Hessen 60596 , Germany .</p>
<p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (" <strong>you</strong>"), and The Impact Wave (in funding), concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. </p>
<p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</p>
<p>All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</p>
<p>We recommend that you print a copy of these Legal Terms for your records.</p>
<p>
  <strong>TABLE OF CONTENTS</strong>
</p>
<p>
  <a href="#services">1. OUR SERVICES</a>
</p>
<p>
  <a href="#ip">2. INTELLECTUAL PROPERTY RIGHTS</a>
</p>
<p>
  <a href="#userreps"></a>
  <a href="#userreps">3. USER REPRESENTATIONS</a>
</p>
<p>
  <a href="#products"></a>
</p>
<p>
  <a href="#products"></a>
  <a href="#purchases"></a>
</p>
<p>
  <a href="#purchases"></a>
</p>
<p>
  <a href="#software"></a>
  <a href="#software"></a>
</p>
<p>
  <a href="#software"></a>
  <a href="#prohibited"></a>
</p>
<p>
  <a href="#prohibited">4. PROHIBITED ACTIVITIES</a>
  <a href="#ugc"></a>
</p>
<p>
  <a href="#ugc">5. USER GENERATED CONTRIBUTIONS</a>
  <a href="#license"></a>
</p>
<p>
  <a href="#license">6. CONTRIBUTION LICENSE</a>
  <a href="#reviews"></a>
</p>
<p>
  <a href="#reviews"></a>
  <a href="#mobile"></a>
</p>
<p>
  <a href="#mobile"></a>
  <a href="#socialmedia"></a>
</p>
<p>
  <a href="#socialmedia"></a>
  <a href="#thirdparty"></a>
</p>
<p>
  <a href="#thirdparty"></a>
  <a href="#advertisers"></a>
</p>
<p>
  <a href="#advertisers"></a>
  <a href="#sitemanage"></a>
</p>
<p>
  <a href="#sitemanage">7. SERVICES MANAGEMENT</a>
  <a href="#ppyes"></a>
</p>
<p>
  <a href="#ppyes"></a>
  <a href="#ppno"></a>
</p>
<p>
  <a href="#ppno">8. PRIVACY POLICY</a>
  <a href="#dmca"></a>
</p>
<p>
  <a href="#dmca"></a>
</p>
<p>
  <a href="#terms"></a>
</p>
<p>
  <a href="#terms">9. TERM AND TERMINATION</a>
  <a href="#modifications"></a>
</p>
<p>
  <a href="#modifications">10. MODIFICATIONS AND INTERRUPTIONS</a>
  <a href="#law"></a>
</p>
<p>
  <a href="#law">11. GOVERNING LAW</a>
  <a href="#disputes"></a>
</p>
<p>
  <a href="#disputes">12. DISPUTE RESOLUTION</a>
  <a href="#corrections"></a>
</p>
<p>
  <a href="#corrections">13. CORRECTIONS</a>
  <a href="#disclaimer"></a>
</p>
<p>
  <a href="#disclaimer">14. DISCLAIMER</a>
  <a href="#liability"></a>
</p>
<p>
  <a href="#liability">15. LIMITATIONS OF LIABILITY</a>
  <a href="#indemnification"></a>
</p>
<p>
  <a href="#indemnification">16. INDEMNIFICATION</a>
  <a href="#userdata"></a>
</p>
<p>
  <a href="#userdata">17. USER DATA</a>
  <a href="#electronic"></a>
</p>
<p>
  <a href="#electronic">18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a>
  <a href="#california"></a>
</p>
<p>
  <a href="#california">19. CALIFORNIA USERS AND RESIDENTS</a>
  <a href="#misc"></a>
</p>
<p>
  <a href="#misc">20. MISCELLANEOUS</a>
  <a href="#contact"></a>
</p>
<p>
  <a href="#contact">21. CONTACT US</a>
</p>
<p>
  <strong>1. OUR SERVICES</strong>
</p>
<p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
<p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
<p>
  <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
</p>
<p>
  <strong>Our intellectual property</strong>
</p>
<p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
<p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
<p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>
<p>
  <strong>Your use of our Services</strong>
</p>
<p>Subject to your compliance with these Legal Terms, including the " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" section below, we grant you a non-exclusive, non-transferable, revocable license to: </p>
<ul>
  <li>access the Services; and</li>
  <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
</ul>
<p>solely for your personal, non-commercial use or internal business purpose.</p>
<p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
<p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: team@theimpactwave.org. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
<p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
<p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
<p>
  <strong>Your submissions</strong>
</p>
<p>Please review this section and the " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services. </p>
<p>
  <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
</p>
<p>
  <strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:
</p>
<ul>
  <li>confirm that you have read and agree with our " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading; </li>
  <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
  <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
  <li>warrant and represent that your Submissions do not constitute confidential information.</li>
</ul>
<p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>3.</strong>
      </strong>
    </strong> USER REPRESENTATIONS </strong>
</p>
<p>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.</p>
<p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>4.</strong>
      </strong>
    </strong> PROHIBITED ACTIVITIES </strong>
</p>
<p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
<p>As a user of the Services, you agree not to:</p>
<ul>
  <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
  <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
  <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
  <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
  <li>Engage in unauthorized framing of or linking to the Services.</li>
  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
  <li>Delete the copyright or other proprietary rights notice from any Content.</li>
  <li>Attempt to impersonate another user or person or use the username of another user.</li>
  <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
  <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
  <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
  <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
  <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
  <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
  <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
  <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
  <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
  <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
</ul>
<p>
  <strong>
    <strong>
      <strong>
        <strong>5.</strong>
      </strong>
    </strong> USER GENERATED CONTRIBUTIONS </strong>
</p>
<p>The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:</p>
<ul>
  <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
  <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
  <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
  <li>Your Contributions are not false, inaccurate, or misleading.</li>
  <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
  <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
  <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
  <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
  <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
  <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
  <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
  <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
  <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
</ul>
<p>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>6.</strong>
      </strong>
    </strong> CONTRIBUTION LICENSE </strong>
</p>
<p>You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).</p>
<p>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>7.</strong>
      </strong>
    </strong> SERVICES MANAGEMENT </strong>
</p>
<p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
<p>
  <strong>
    <strong>
      <strong>8.</strong>
    </strong> PRIVACY POLICY </strong>
</p>
<p>We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Germany. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Germany, then through your continued use of the Services, you are transferring your data to Germany, and you expressly consent to have your data transferred to and processed in Germany.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>9.</strong>
      </strong>
    </strong> TERM AND TERMINATION </strong>
</p>
<p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
<p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>10.</strong>
      </strong>
    </strong> MODIFICATIONS AND INTERRUPTIONS </strong>
</p>
<p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
<p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>11.</strong>
      </strong>
    </strong> GOVERNING LAW </strong>
</p>
<p>These Legal Terms are governed by and interpreted following the laws of Germany, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. The Impact Wave (in funding) and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Hessen, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Germany, or in the EU country in which you reside.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>12.</strong>
      </strong>
    </strong> DISPUTE RESOLUTION </strong>
</p>
<p>The European Commission provides an <a href="https://ec.europa.eu/consumers/odr">online dispute resolution platform</a>, which you can access. If you would like to bring this subject to our attention, please contact us. </p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>13.</strong>
      </strong>
    </strong> CORRECTIONS </strong>
</p>
<p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
<p>
  <strong>
    <strong>
      <strong>14.</strong>
    </strong> DISCLAIMER </strong>
</p>
<p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>15.</strong>
      </strong>
    </strong> LIMITATIONS OF LIABILITY </strong>
</p>
<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>16.</strong>
      </strong>
    </strong> INDEMNIFICATION </strong>
</p>
<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>17.</strong>
      </strong>
    </strong> USER DATA </strong>
</p>
<p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>18.</strong>
      </strong>
    </strong> ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES </strong>
</p>
<p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>19.</strong>
      </strong>
    </strong> CALIFORNIA USERS AND RESIDENTS </strong>
</p>
<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>20.</strong>
      </strong>
    </strong> MISCELLANEOUS </strong>
</p>
<p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</p>
<p>
  <strong>
    <strong>
      <strong>
        <strong>21.</strong>
      </strong>
    </strong> CONTACT US </strong>
</p>
<p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
<p>
  <strong>The Impact Wave (in funding)</strong>
</p>
<p>
  <strong>Hedderichstr. 65</strong>
</p>
<p>
  <strong>Frankfurt, Hessen 60596</strong>
</p>
<p>
  <strong>Germany</strong>
</p>
<p>
  <strong>
    <strong>team@theimpactwave.org</strong>
  </strong>
</p>
<p>These terms of use were created using Termly's <a href="https://termly.io/products/terms-and-conditions-generator/">Terms and Conditions Generator</a>. </p>
  `;

  return (
    <>
      <main>
        <DefaultLayout>
          <Container
            sx={{
              p: { mb: 4 },
            }}
          >
            <Heading as={"h1"} mb={8}>
              Terms of use
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Container>
        </DefaultLayout>
      </main>
    </>
  );
};

export default Terms;
