"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/medicare-finder-logo.png"
              alt="Medicare Finder Logo"
              width={180}
              height={50}
              className="mr-2"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy | MedicareFinder</h1>
            <p className="text-gray-600 mb-6">Last Updated: April 2025</p>

            <div className="prose max-w-none">
              <p>
                In this Privacy Policy ("Policy"), we describe how MedicareFinder, a California limited liability
                company, and our affiliated and subsidiary companies (collectively, "MedicareFinder," "we" or "us")
                collect, use and otherwise process personal information about our customers and users of our websites
                and services.
              </p>

              <p>
                If you apply through the Services (defined below) for insurance offered by third party insurers with
                whom we work (each a "Third Party Insurer"), we will share your personal information with such Third
                Party Insurer so that they may evaluate and process your application. The use of your personal
                information by a Third Party Insurer is subject to that Third Party Insurer's applicable privacy policy
                and terms, not this one.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">
                Overview of Categories of Personal Information Collected and Purposes of Use
              </h2>

              <p>
                This overview is intended to summarize key information about our information practices, which are
                further explained below. While the actual information we collect about you and our use of such personal
                information varies depending upon the nature of our relationship and interactions with you, below we
                provide an overview of the categories of personal information we collect about Users and the purposes
                for which we use such information.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Categories of Personal Information Collected
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Use of Personal Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Name, contact information and other identifiers:</strong> identifiers such as a real
                          name, alias, address, unique personal identifier, online identifier, Internet Protocol (IP)
                          address, email address, account name, social security number, driver's license number,
                          passport number, or other similar identifiers.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Providing our Services and related support</li>
                          <li>Protecting the integrity of the Services</li>
                          <li>Analyzing and improving the Services and our business</li>
                          <li>Personalizing the Services</li>
                          <li>Advertising, marketing and promotional purposes</li>
                          <li>Securing and protecting our business</li>
                          <li>Defending our legal rights</li>
                          <li>Auditing, reporting, corporate governance, and internal operations</li>
                          <li>Complying with legal obligations</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Customer records:</strong> paper and electronic customer records containing personal
                          information, such as name, signature, physical characteristics or description, address,
                          telephone number, education, current employment, employment history, social security number,
                          passport number, driver's license or state identification card number, insurance policy
                          number, bank account number, credit card number, debit card number, or any other financial or
                          payment information, medical information, or health insurance information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Protected classifications:</strong> characteristics of protected classifications under
                          California or federal law such as race, color, sex, age, religion, national origin,
                          disability, citizenship status, and genetic information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Commercial Information:</strong> including records of products or services purchased,
                          obtained, or considered, or other purchasing or use histories or tendencies.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Internet or Other Electronic Network Activity Information:</strong> including, but not
                          limited to, browsing history, search history, and information regarding a consumer's
                          interaction with an Internet website, application, or advertisement.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Audio, Video and other Electronic Data:</strong> audio, electronic, visual, thermal,
                          olfactory, or similar information such as, CCTV footage, photographs, and call recordings.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Employment history:</strong> professional or employment-related information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Education information:</strong> education information that is not publicly available
                          personally identifiable information as defined in the federal Family Educational Rights and
                          Privacy Act (20 U.S.C. section 1232g, 34 C.F.R. Part 99).
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Profiles and inferences:</strong> Inferences drawn from any of the information
                          identified above to create a profile reflecting a resident's preferences, characteristics,
                          psychological trends, predispositions, behavior, attitudes, intelligence, abilities, or
                          aptitudes.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <ul className="list-disc pl-5">
                          <li>Same as above</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>California residents.</strong> If you are a California resident, please be sure to review the
                section Additional Information for California Residents below for important information, as required by
                California privacy laws, about the categories of personal information we collect and disclose and your
                rights under California privacy laws.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Scope</h2>

              <p>
                This Privacy Policy applies to the personal information that MedicareFinder collects and processes about
                individuals related to our services, including users of any websites that we operate and which include
                this Privacy Policy (each a "Site"), individuals who speak with our representatives over the telephone
                in any of our call centers and/or individuals who submit their personal information to us in writing for
                the purpose of learning about the insurance products we offer (collectively, the "Services"). This
                Privacy Policy does not apply to any third party websites, services, products or mobile applications
                maintained by other companies, which are linked to or from our Services.
              </p>

              <p>
                By providing your information to us through the Services, or otherwise using any of our Sites or
                Services, you understand and acknowledge that MedicareFinder may process your personal information in
                accordance with this Privacy Policy. If you do not want this Privacy Policy to apply to you, please do
                not use the Services or communicate with us via the Services. If required by applicable law, we will
                obtain your consent to our collection, use, transfer and disclosure of your personal information.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Personal Information Collected</h2>

              <p>
                The information we collect about individuals varies depending upon the circumstances and the Services
                used. MedicareFinder collects personal information directly from individuals, automatically related to
                the use of the Services, and in some cases, from third parties (such third parties that provide us with
                information about individuals who may be interested in our Services).
              </p>

              <p>
                <strong>Information Collected Directly.</strong> We collect information that you provide to us when you
                inquire about or use our Services, request a quote, fill out forms or fields on the Sites, create or
                submit an application, request information from us, sign up for newsletters or our email list,
                participate in a survey or promotion, or when you otherwise communicate with us or request information
                from us, whether via the Site, telephone, email or other means. For example, you may be required to
                provide us with certain information, including, without limitation, some or all of the following
                information:
              </p>

              <ul className="list-disc pl-8 mb-4">
                <li>Name</li>
                <li>E-mail address</li>
                <li>Daytime telephone number</li>
                <li>Evening telephone number</li>
                <li>Cellular phone number</li>
                <li>Zip Code</li>
                <li>Year of Birth and/or</li>
                <li>Other personal or company information reasonably required to use the Services.</li>
              </ul>

              <p>
                In addition, if you decide to use the Services to apply for insurance offered by a Third Party Insurer,
                we may collect additional information as necessary to submit your application to such Third Party
                Insurer for processing. This additional information may include gender, full address, birth date,
                government-issued identification number (such as a Driver's License number, social security number or
                Medicare ID), credit/debit card number, financial account information, income and/or certain medical and
                health information.
              </p>

              <p>
                <strong>Information Received from Third Parties.</strong> We may work with third parties who provide us
                with the name, contact details and other relevant information about potential customers, who may be
                interested in the Services, as well as third parties that assist us in updating or enhancing the
                information that we have collected about individuals. The personal information we collect from third
                parties may be combined with the other information we have collected about individuals or demographic
                information obtained from secondary sources. In addition, when we help an individual identify, apply for
                or obtain insurance from a Third Party Insurer, we may receive limited information back from Third Party
                Insurer when your Policy is issued (such as the date, term, premium amount, payment terms, etc.).
              </p>

              <p>
                <strong>Information Collected Automatically.</strong> Our Sites use cookies, pixels, tags, log-files,
                and other technologies, which may be provided by third parties, to collect information about a user from
                their browser or device, including, without limitation, your browser type, device type, operating
                system, software version, phone model, phone operating system, platform-dependent information, requested
                document, referring URL, date and time of your visit, clickstream data (e.g., about the pages you view,
                links you click and date and time stamps for your activities on our Sites) and the IP address associated
                with your transactions in the system. This information that we collect automatically may be linked with
                other personal information we have collected. For more information, see the Cookies and Analytics
                section below.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Use of Personal Information</h2>

              <p>We may use the personal information that we collect about you for the following purposes:</p>

              <ul className="list-disc pl-8 mb-4">
                <li>
                  <strong>Providing our Services and related support:</strong> including to confirm, process, or
                  otherwise complete a transaction or transactions requested by you; help fulfill your requests for
                  products and services; to communicate with you about you use of our Services; to respond to your
                  inquiries; to facilitate your application for one or more Policies; to provide troubleshooting and
                  other technical support; submitting your credit card or other payment information when ordering
                  and/purchasing products or services through the Services; and for other customer service and support
                  purposes.
                </li>
                <li>
                  <strong>Protecting the integrity of the Services:</strong> including to verify your identity; to
                  detect and prevent fraud and unauthorized activities; to facilitate software; to preserve the
                  integrity of the Services and our systems, and prevent unauthorized access and activities; to enforce
                  our applicable terms; and to protect the rights and safety of others.
                </li>
                <li>
                  <strong>Analyzing and improving the Services and our business:</strong> including to better understand
                  how users access and use our Services; to evaluate and improve the Services and our business
                  operations; to develop new features, offerings and services; to conduct surveys and other evaluations;
                  and for other research and analytical purposes.
                </li>
                <li>
                  <strong>Personalizing the Services:</strong> including to tailor content we send or display on our
                  Sites and Services (e.g., for your geographic area); to offer personalized help and instructions;
                  and/or to otherwise personalize your experiences with the Services.
                </li>
                <li>
                  <strong>Advertising, marketing and promotional purposes:</strong> including to send or display
                  targeted marketing and advertising on the Site, via email, direct mail, telephone, or across other
                  websites, mobile applications, social media or other online services from us or on behalf of our
                  partners and affiliates; to reach you with more relevant ads and to evaluate, measure and improve the
                  effectiveness of our ad campaigns; to contact you about our Services, and/or those of our affiliates,
                  as well as other information we think may interest you; and/or to share your information with third
                  parties so that they may contact you with information about products and services you may be
                  interested in. Where required by applicable law, we will obtain your consent to use your personal
                  information for marketing and related purposes. We do not use personal information that you provide us
                  on your insurance application(s) for marketing or advertising purposes.
                </li>
                <li>
                  <strong>Securing and protecting our business:</strong> including to protect and secure our business
                  operations, assets, Services, network and information and technology resources; to investigate,
                  prevent, detect and take action regarding fraud, unauthorized access, situations involving potential
                  threats to the rights or safety of any person or third party, and/or other unauthorized activities or
                  misconduct.
                </li>
                <li>
                  <strong>Defending our legal rights:</strong> including to manage and respond to actual and/or
                  potential legal disputes and claims, and/or to otherwise establish, defend or protect our rights or
                  interests, including in the context of anticipated or actual litigation with Users or third parties.
                </li>
                <li>
                  <strong>Auditing, reporting, corporate governance, and internal operations:</strong> including
                  relating to financial, tax and accounting audits; audits and assessments of our operations, privacy,
                  security and financial controls, risk, and compliance with legal obligations; our general business,
                  accounting, record keeping and legal functions; to maintain appropriate business records; to enforce
                  company policies and procedures; and/or related to any actual or contemplated merger, acquisition,
                  asset sale or transfer, financing, bankruptcy or restructuring of all or part of our business.
                </li>
                <li>
                  <strong>Complying with legal obligations:</strong> including to comply with the law, our legal
                  obligations and legal process, such warrants, subpoenas, court orders, and/or regulatory or law
                  enforcement requests.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4">Disclosure of Personal Information</h2>

              <p>We may share or disclose the personal information we collect as follows:</p>

              <ul className="list-disc pl-8 mb-4">
                <li>
                  <strong>Subsidiaries and Affiliates:</strong> We may share your information with our affiliated
                  companies (i.e., companies under common ownership, control or management with us) for business,
                  operational, promotional and marketing purposes.
                </li>
                <li>
                  <strong>Service providers:</strong> We may disclose personal information with third-party service
                  providers who use this information to perform services for us, such as hosting providers, auditors,
                  advisors, consultants, customer service and/or support providers.
                </li>
                <li>
                  <strong>Third Party Insurers:</strong> If you request a quote, services or information from a Third
                  Party Insurer or request that we match your request with relevant Third Party Insurer (each, a
                  "Request") or submit an application to a Third Party Insurer (an "Application"), we may share your
                  personal information with that Third Party Insurer. The Third Party Insurer may further disclose,
                  share and use any personal information provided by you in connection with your Request or Application,
                  subject to the Third Party Insurer's own privacy policy and applicable terms.
                </li>
              </ul>

              <p className="font-bold">
                IF YOU MAKE A REQUEST OR SUBMIT AN APPLICATION, YOU ACKNOWLEDGE, UNDERSTAND AND CONSENT TO OUR
                DISCLOSURE OF YOUR PERSONAL INFORMATION THE RELEVANT THIRD PARTY INSURER(S) WHO MAY CONTACT YOU DIRECTLY
                VIA TELEPHONE, FAX, AND/OR EMAIL; YOU MAY RECEIVE TELEPHONE CALLS AS A CONSEQUENCE OF SUBMITTING A
                REQUEST ON THIS SITE, EVEN IF YOU ARE ON THE NATIONAL DO NOT CALL REGISTRY OR ANY OTHER DO NOT CALL
                REGISTRY.
              </p>

              <ul className="list-disc pl-8 mb-4">
                <li>
                  <strong>Other third parties:</strong> We may disclose your information to our sponsors, partners,
                  advertisers or other third parties to provide you with product information and promotional and other
                  offers. This information may be used by such third parties for those parties' own purposes, such as to
                  offer products or services that may interest you. For example, we may share personal information with
                  third parties that provide advertising, campaign measurement, online and/or mobile analytics, and
                  related services. These third parties may receive or access as browsing and/or other data about your
                  use of the Services, in order to help us better reach individuals with relevant ads and/or measure our
                  ad campaigns, and/or to better understand how individuals interact with our Site and online services
                  overtime and across devices. We may also transfer and/or sell personal information we collect and/or
                  join together with other businesses to bring selected opportunities to customers or potential
                  customers. We do not share personal information from your insurance application with third parties for
                  marketing or advertising purposes.
                </li>
                <li>
                  <strong>Business transfers:</strong> We may disclose and/or transfer personal information as part of
                  any actual or contemplated merger, sale, transfer of assets, acquisition, financing and/or
                  restructuring of all or part of our business, bankruptcy or similar event, including related to due
                  diligence conducted prior to such event where permitted by law.
                </li>
                <li>
                  <strong>Legally required:</strong> We may disclose personal information if we are required to do so by
                  law (e.g., to law enforcement, courts or others, e.g., in response to a subpoena or court order).
                </li>
                <li>
                  <strong>Protect our rights:</strong> We may disclose personal information where we believe it
                  necessary to respond to claims asserted against us, to comply with legal process (e.g., subpoenas or
                  warrants), enforce or administer our agreements and terms, for fraud prevention, risk assessment,
                  investigation and/or to protect the rights, property or safety of MedicareFinder, our clients, our
                  customers and/or others.
                </li>
              </ul>

              <p>
                <strong>Anonymized and Aggregated Data.</strong> We may share aggregate or de-identified information
                with third parties for research, marketing, advertising, analytics and/or other purposes.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Cookies and Analytics</h2>

              <p>
                We use cookies, pixels, tags, and other technologies, which may be provided by third parties, on our
                Sites to enable certain functionality and for security and fraud detection and prevention, as well as to
                collect usage information about our Sites and the emails that we send and to personalize content and
                provide more relevant ads and information. We may combine the information we collect via these
                technologies with other information, including personal information, that we collect.
              </p>

              <p>
                <strong>Cookies.</strong> Cookies are alphanumeric identifiers that are transferred to your computer
                through your web browser for record-keeping purposes. Some cookies enable you to log-in to our Sites or
                save certain settings and preferences, while others, allow us to track usage and activities on our
                Sites, personalize content on our Sites, or deliver more relevant ads on our Sites and third party
                sites. Most web browsers automatically accept cookies, but if you prefer, you can edit your browser
                options to block them in the future. The "Help" tab on the toolbar on most browsers will tell you how to
                prevent your computer from accepting new cookies, how to have the browser notify you when you receive a
                new cookie, or how to disable cookies altogether. If you disable cookies, however, certain features on
                our Sites may not be available or function properly.
              </p>

              <p>
                <strong>Pixel tags and embedded script (aka clear GIFs and web beacons).</strong> Pixel tags are tiny
                graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are
                stored on your computer's hard drive, pixel tags are embedded invisibly on web pages. We may use these,
                in connection with our Sites to, among other things, track the activities users of our Services, improve
                ads, personalize and manage content, and gather usage information about our Sites. We may also use these
                in HTML emails to, to help us track email response rates, identify when our emails are viewed, and track
                whether our emails are forwarded.
              </p>

              <p>
                <strong>Do-Not-Track signals:</strong> Please note that our Sites do not recognize or respond to any
                signal which your browser might transmit through the so-called 'Do Not Track' feature your browser might
                have. If you wish to disable cookies on our Services, you should not rely on any 'Do Not Track' feature
                your browser might have. For more information about do-not-track signals, please click here.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Interest-based Advertising:</h2>

              <p>
                We work with third party ad networks, channel partners, measurement services, analytics and others
                ("third party ad companies") to display advertising on our Services, and to manage or measure our
                advertising on third party sites, social media platforms, mobile apps and online services, as well as to
                send you promotional materials or offers via email or direct mail. We and these third party ad companies
                may use cookies, pixels tags, and other tools to collect activity information on our Services (as well
                as on third party sites and services), as well as IP address, device ID, cookie and advertising IDs, and
                other identifiers, general location information, and, with your consent, your device's geolocation
                information; we and these third party ad companies use this information to provide you more relevant ads
                and content and to evaluate the success of such ads and content.
              </p>

              <p>
                <strong>Custom Lists and Matching.</strong> We may create and disclose hashed customer list information
                (such as name and email address) with third parties—such as Facebook and Twitter—so that we can better
                target ads and content to you and others with similar interests, within these third party services.
                These third parties use the personal information we provide to help us target ads and to enforce their
                terms, but we do not permit them to use or share the data we submit with other third-party advertisers.
              </p>

              <p>
                <strong>Opt Out of Targeted Ads.</strong> You may control how participating third party ad companies use
                the information that they collect about your visits to our Sites, and those of third parties, in order
                to display more relevant targeted advertising to you; for more information and to opt-out of go to:
              </p>

              <ul className="list-disc pl-8 mb-4">
                <li>networkadvertising.org/optout_nonppii.asp (Network Advertising Initiative)</li>
                <li>aboutads.info/choices (Digital Advertising Alliance)</li>
              </ul>

              <p>
                Opting out of participating ad networks does not opt you out of being served advertising. You may
                continue to receive generic or "contextual" ads on our Services. You may also continue to receive
                targeted ads on other websites, from companies that do not participate in the above programs.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Choices</h2>

              <p>
                If you need to update your contact details or other personal information provided to us, please contact
                us as set forth in the Contact Us section below. California residents have certain rights, under
                California privacy laws, regarding their personal information, which are set forth below, in the
                Additional Information for California Residents section below.
              </p>

              <p>
                <strong>Marketing:</strong> As noted above, we may use your contact to send you information about us and
                to keep you informed of our other products and services, and/or those of our affiliates, which may be of
                interest to you. By submitting your e-mail address at this Site, you agree to receive e-mail marketing
                from us and our third-party advertisers. In addition, you agree that such act constitutes a purchase
                and/or an inquiry or an application for purposes of the Telemarketing Sales Rule, 16 C.F.R. § 310 et
                seq., as amended from time to time (the "TSR"). Notwithstanding that your telephone number may be listed
                on the Federal Trade Commission's or a State's Do-Not-Call List, we retain the right to contact you via
                telemarketing in accordance with the TSR and applicable States' laws, rules and regulations. Moreover,
                by requesting information from us or a third-party advertiser at or through this Site, such action
                constitutes a purchase and/or an inquiry or an application with the respective third-party advertiser
                for purposes of the TSR and you may be contacted via e-mail, direct mail and/or telemarketing by such
                third-party advertiser in accordance with the TSR.
              </p>

              <p>
                <strong>Communications Preferences:</strong> You may opt out of marketing communications from us as
                follows:
              </p>

              <p>
                <strong>Email:</strong> To stop receiving future e-mail marketing communications from us, please send an
                e-mail to info@medicarefinder.com or write to us at the address set forth at the end of this Privacy
                Policy requesting that we stop sending future e-mail marketing communications from us.
              </p>

              <p>
                <strong>Direct Mail:</strong> If you do not want us to send you any promotional offers through direct
                mail, you may write to us at the address set forth in the "Contact Us" section of this Privacy Policy
                requesting that we stop sending future direct mail marketing communications from us.
              </p>

              <p>
                <strong>Phone:</strong> If you do not want to receive marketing phone calls from us, you may: (i) call
                us at 1-844-909-1563; (ii) ask to be placed on our Do Not Call list when you receive a call from us;
                (iii) write to us at the address set forth in the "Contact Us" section of this Privacy Policy requesting
                your telephone number to be placed on our Do Not Call list; or (iv) email or mail us at
                info@medicarefinder.com and provide the telephone number you wish to have placed on our Do Not Call
                list.
              </p>

              <p>
                To unsubscribe from a Third Party Insurer's communications, you must contact such Third Party Insurer
                directly.
              </p>

              <p>
                <strong>Interest Based Ads:</strong> To opt-out of certain targeted advertising, follow the instructions
                set forth in the Interest Based Advertising section above.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Third Party Links and Websites</h2>

              <p>
                Our Sites may contain links to other third-party owned and/or operated websites. We are not responsible
                for the privacy practices or the content of such third-party websites. In some cases, you may be able to
                make a purchase through one of their third-party websites. In these instances, you may be required to
                provide certain information, such as a credit card number, to register or complete a transaction at such
                website. These third-party websites have separate privacy and data collection practices and we have no
                responsibility or liability relating to such policies or practices.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Security</h2>

              <p>
                We have taken certain physical, electronic, contractual and managerial steps to safeguard and secure the
                personal information we collect. Please note, however, that it is your responsibility to maintain the
                confidentiality of your password associated with this Site, if any. In addition to using a variety of
                security technologies and procedures to protect your personal information generally, to the extent your
                Social Security Number ("SSN") is collected, we also take measures to maintain its confidentiality, to
                protect it from unlawful disclosure and limit access to it by unauthorized third parties. Specifically,
                we will not make your SSN available to the general public, print your SSN on any card, require your SSN
                to access products or services, require you to transmit your SSN on the Internet unless the connection
                is secure or the SSN is encrypted, or require you to transmit your SSN to access a website without
                requiring additional authentication.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Minors</h2>

              <p>
                Our Services are not designed for individuals under 18, and we do not knowingly solicit or collect
                information from individuals under the age of 18. We encourage parents and guardians to spend time
                online with their children and to participate and monitor the interactive activities of their children.
                We will not be liable for any content or advertisements viewed by minor children in violation of the
                terms of this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Changes to this Privacy Policy</h2>

              <p>
                We may amend this Privacy Policy from time to time. When we do, we will post the change on this Site. If
                we change the Privacy Policy in any material way, we will provide appropriate online notice to you.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>

              <p>
                If you have any questions or suggestions regarding this Privacy Policy, you should feel free to contact
                us at info@medicarefinder.com or at:
              </p>

              <p className="mb-6">
                MedicareFinder
                <br />
                4241 Jutland Drive
                <br />
                Suite 101
                <br />
                San Diego, CA 92117
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">
                IMPORTANT ADDITIONAL PRIVACY INFORMATION FOR CALIFORNIA RESIDENTS ONLY
              </h2>

              <p>
                In this section, we provide information for California residents, as required under California privacy
                laws, including the California Consumer Privacy Act ("CCPA"), which requires that we provide California
                residents certain specific information about how handle their personal information, whether collected
                online or offline.
              </p>

              <p>
                This section does not address or apply to our handling of personal information that is subject to an
                exemption under Section 1798.145(c) – (f) of the CCPA, such as protected health information that is
                subject to HIPAA or the California Medical Information Act, or publicly available data lawfully made
                available by federal, state or local government records.
              </p>

              <p>
                This section also does not apply to personal information we collect about job applicants, independent
                contractors, or current or former full-time, part-time and temporary employees and staff, officers,
                directors or owners of MedicareFinder. This section also does not apply to personal information we
                collect about non-California residents.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-4">
                Categories of Personal Information that We Collect, Disclose, and Sell
              </h3>

              <p>
                The table below sets out generally the categories of personal information (as defined by the CCPA) about
                California residents that we collect, sell, and disclose to others for a business purpose. We collect
                these categories of personal information from the sources described in the Personal Information
                Collected section above, and for the purposes described in the Use of Personal Information section
                above. Our collection, use and disclosure of personal information about a California resident will vary
                depending upon the circumstances and nature of our interactions or relationship with such resident.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 mt-4 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Categories of personal information</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Do we collect?</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Do we disclose for a business purpose(s)
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Do we sell?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Name, contact information and other identifiers:</strong> identifiers such as a real
                          name, alias, address, unique personal identifier, online identifier, Internet Protocol (IP)
                          address, email address, account name, social security number, driver's license number,
                          passport number, or other similar identifiers (e.g., related to leads and referrals).
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Customer records:</strong> other paper and electronic customer records (e.g.
                          associated with your application for insurance offered by Third Party Insurer) containing
                          personal information, such as name, signature, physical characteristics or description,
                          address, telephone number, education, current employment, employment history, social security
                          number, passport number, driver's license or state identification card number, insurance
                          policy number, bank account number, credit card number, debit card number, or any other
                          financial or payment information, medical information, or health insurance information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Protected classifications:</strong> characteristics of protected classifications under
                          California or federal law such as race, color, sex, age, religion, national origin,
                          disability, citizenship status, and genetic information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Commercial Information:</strong> including records of products or services purchased,
                          obtained, or considered, or other purchasing or use histories or tendencies.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Usage data:</strong> internet or other electronic network activity information,
                          including, but not limited to, browsing history, search history, and information regarding a
                          consumer's interaction with an Internet website, application, or advertisement.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Audio, video and other electronic data:</strong> audio, electronic, visual, thermal,
                          olfactory, or similar information such as, CCTV footage, photographs, and call recordings.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Employment history:</strong> professional or employment-related information.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Education information:</strong> education information that is not publicly available
                          personally identifiable information as defined in the federal Family Educational Rights and
                          Privacy Act (20 U.S.C. section 1232g, 34 C.F.R. Part 99).
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <p>
                          <strong>Profiles and Inferences:</strong> Inferences drawn from any of the information
                          identified above to create a profile reflecting a resident's preferences, characteristics,
                          psychological trends, predispositions, behavior, attitudes, intelligence, abilities, or
                          aptitudes.
                        </p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-4">California Resident Rights</h3>

              <p>
                California law grants California residents certain rights and imposes restrictions on particular
                business practices as set forth below.
              </p>

              <p>
                <strong>Right to Opt-out of Sale of Personal Information:</strong> California residents have the right
                to opt-out of our sale of their personal information. Opt-out rights can be exercised by clicking here.
                We do not sell personal information about residents who we know are younger than 16 years old without
                opt-in consent.
              </p>

              <p>
                <strong>Verifiable Requests to Delete and Requests to Know:</strong> Subject to certain exceptions,
                California residents have the right to make the following requests, at no charge:
              </p>

              <p>
                <strong>Request to Delete:</strong> California residents have the right to request deletion of their
                personal information that we have collected about them and to have such personal information deleted,
                except where an exemption applies.
              </p>

              <p>
                <strong>Request to Know:</strong> California residents have the right to request and, subject to certain
                exemptions, receive a copy of the specific pieces of personal information that we have collected about
                them in the prior 12 months and to have this delivered, free of charge, either (a) by mail or (b)
                electronically in a portable and, to the extent technically feasible, readily useable format that allows
                the individual to transmit this information to another entity without hindrance. California residents
                also have the right to request that we provide them certain information about how we have handled their
                personal information in the prior 12 months, including the:
              </p>

              <ul className="list-disc pl-8 mb-4">
                <li>categories of personal information collected;</li>
                <li>categories of sources of personal information;</li>
                <li>business and/or commercial purposes for collecting and selling their personal information;</li>
                <li>categories of third parties/with whom we have disclosed or shared their personal information;</li>
                <li>
                  categories of personal information that we have disclosed or shared with a third party for a business
                  purpose;
                </li>
                <li>categories of personal information collected; and</li>
                <li>
                  categories of third parties to whom the residents' personal information has been sold and the specific
                  categories of personal information sold to each category of third party.
                </li>
              </ul>

              <p>California residents may make Requests to Know up to twice every 12 months.</p>

              <p>
                <strong>Submitting Requests.</strong> Requests to Know, and Requests to Delete may be submitted:
              </p>

              <ul className="list-disc pl-8 mb-4">
                <li>Submitting a request to us:</li>
                <li>By contacting us at (877) 353-0244 (toll free)</li>
              </ul>

              <p>We will respond to verifiable requests received from California residents as required by law.</p>

              <p>
                <strong>Right to Non-Discrimination:</strong> The CCPA prohibits discrimination against California
                residents for exercising their rights under the CCPA. Discrimination may exist where a business denies
                or provides a different level or quality of goods or services, or charges (or suggests that it will
                charge) different prices, rates, or penalties on residents who exercise their CCPA rights, unless doing
                so is reasonably related to the value provided to the business by the residents' data.
              </p>

              <p>
                <strong>Financial Incentives:</strong> A business may offer financial incentives for the collection,
                sale or deletion of California residents' personal information, provided the incentive is not unjust,
                unreasonable, coercive or usurious, and is made available in compliance with applicable transparency,
                informed consent, and opt-out requirements. California residents have the right to be notified of any
                financial incentives offers and their material terms, the right to opt-out of such incentives at any
                time, and may not be included in such incentives without their prior informed opt-in consent. We may
                make available educational materials that may be useful to individuals who are shopping for a specific
                type of insurance in exchange for an individual providing us their personal information and agreeing to
                be contacted about our and third party products and services. You may opt out of marketing
                communications from us at any time, as set out in the Your Choices section above.
              </p>

              <p>For more information about our privacy practices, you may contact us at info@medicarefinder.com</p>

              <h3 className="text-lg font-semibold mt-6 mb-4">
                Your California Privacy Rights Under the Shine the Light Law
              </h3>

              <ul className="list-disc pl-8 mb-4">
                <li>
                  California law allows individuals that reside in California to know the third parties with whom we
                  shared their personal information for those parties' own marketing purposes. The type of information
                  and instances in which we share such information is detailed in this Privacy Policy. However, if you
                  are a resident of California and you would like to know the specific companies with whom we shared
                  your personal information and the categories of the information we shared, you may submit a written
                  request for such information to us at info@medicarefinder.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative w-[120px] h-[140px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/medicare-finder-logo-vertical.png"
                    alt="Medicare Finder Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center mt-16">
                  <div className="text-white text-center font-bold">
                    <div className="text-2xl">Medicare</div>
                    <div className="text-2xl">Finder</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-sm text-gray-400">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Medicare Benefits Center. All rights reserved.
            </p>
            <p className="text-center mt-2 text-xs">
              Medicare Finder is not affiliated with the government or the federal Medicare program. We do not offer
              every plan available in your area. Any information we provide is limited to the plans we do offer in your
              area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
