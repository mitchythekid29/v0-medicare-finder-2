"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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

            <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms and Conditions | MedicareFinder</h1>
            <p className="text-gray-600 mb-6">Last Updated: April, 2025</p>

            <div className="prose max-w-none">
              <p>
                MedicareFinder, a California limited liability company ("we", "us" or "our"), owns and operates this Web
                site,, and portions of other Web pages and Web content through which you have accessed these Terms of
                Use (collectively, the "Site"). By visiting, using and/or submitting information to the Site, you agree
                to be bound by the terms and conditions of these Terms of Use (this "Agreement") and our Privacy Policy
                (the "Privacy Policy").
              </p>

              <p className="font-bold">
                THIS AGREEMENT CONTAINS AN AGREEMENT TO ARBITRATE ALL CLAIMS AND DISCLAIMERS OF WARRANTIES AND
                LIABILITY.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Compliance with this Agreement</h2>

              <p>
                You acknowledge that this Agreement is supported by reasonable and valuable consideration, the receipt
                and adequacy of which is hereby acknowledged. Without limiting the foregoing, you acknowledge that such
                consideration includes, without limitation, your ability to visit, use and/or submit information to the
                Site.
              </p>

              <p>
                You represent that you have the capacity to be bound by this Agreement, or if you are acting on behalf
                of a company or other entity, you have the authority to bind such company or entity. In order to
                determine your compliance with this Agreement, We may monitor your access and use of the Site in
                accordance with our Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">The Site is Not Intended for Minors</h2>

              <p>
                The Site is intended to be accessed and used only by adults and is not directed to minors. As stated in
                our Privacy Policy, we do not knowingly collect personally identifiable information by anyone under the
                age of 18 and you should not provide us with any information regarding any individual under the age of
                18.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Access and Use of the Site</h2>

              <p>
                Your right to access and use the Site is personal to you and is not transferable by you to any other
                person or entity. You are only entitled to access and use the Site for lawful purposes and pursuant to
                the terms and conditions of this Agreement and the Privacy Policy.
              </p>

              <p>
                Your access and use of the Site may be interrupted from time to time for any of several reasons,
                including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of
                the Site or other actions that we, in our sole discretion, may elect to take. We reserve the right to
                suspend or discontinue the availability of the Site and/or any portion or feature of the Site at any
                time in its sole discretion and without prior notice.
              </p>

              <p>
                Any action by you that, in our sole discretion: (i) violates the terms and conditions of this Agreement
                and/or the Privacy Policy; (ii) restricts, inhibits or prevents any access, use or enjoyment of the
                Site; or (iii) through the use of the Site, defames, abuses, harasses, offends or threatens, shall not
                be permitted, and may result in your loss of the right to access and use the Site. You shall not
                metatag, provide links to or frame the Site without our prior express written permission.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Access and Use of Services on the Site</h2>

              <p>
                Subject to the terms of this Agreement and the Privacy Policy, we may offer you various services on or
                through the Site (the "Services"). Below are terms and conditions governing these Services.
              </p>

              <p>
                <strong>You Must Maintain the Integrity of Your Information.</strong> To use certain Services, you may
                be required to provide us with information about you ("Your Information"). If you provide Your
                Information to us then you agree to provide true, current, complete and accurate information, and not to
                misrepresent your identity. You also agree to keep Your Information current and to update Your
                Information if any of Your Information changes. Our collection, use and disclosure of Your Information
                is governed by this Agreement and our Privacy Policy.
              </p>

              <p>
                <strong>You Are Responsible for Your Financial Decisions.</strong> We and our affiliates, through the
                Site, provide a venue through which you can obtain information and you can find third-party service
                providers, such as insurance brokers, insurance agents and other insurance professionals ("Service
                Providers"). It is your responsibility to investigate Service Providers. You acknowledge and agree that
                Service Providers are solely responsible for any services that they may provide to you and that we shall
                not be liable for any losses, costs, damages or claims in connection with, arising from or related to
                your use of a Service Provider's products or services. We urge you to obtain the advice of financial
                advisors, insurance agents, brokers or other qualified professionals who are fully aware of your
                individual circumstances before you make any financial or insurance decisions. You acknowledge and agree
                that you rely on your own judgment and that of such advisors in selecting any products or services
                offered by Service Providers.
              </p>

              <p>
                <strong>You Acknowledge and Agree that MedicareFinder LLC is Not an Insurance Company.</strong> We are
                not an insurance company. We, through the Site, may help to connect you with Service Providers that
                might meet your needs based on information provided by you. We do not, and will not, make any coverage
                or credit decision with any Service Provider referred to you. We do not issue insurance coverage or any
                other financial products.
              </p>

              <p>
                <strong>You Do Not Pay Fees to Us.</strong> Unless you are a Service Provider or order a specific
                service through the Site, we do not charge you a fee to use the Site. Service Providers may pay us fees
                for services and to be matched with users of the Site, however. MedicareFinder LLC is not involved with
                and is not responsible for any fee arrangement that you may enter into with any Service Provider. You
                acknowledge and agree to this compensation arrangement. You hereby release us of any and all losses,
                costs, damages or claims in connection with, arising from or related to your use of a Service Provider's
                products or services, including any fees charged by a Service Provider.
              </p>

              <p>
                <strong>Requests for Quotes or Offers.</strong> The Site may give you the opportunity to request to be
                matched with and receive quotes or offers from Service Providers (a "Match Request"). Portions of the
                Site providing this opportunity (the "Match Request Areas") are only available to residents of the
                United States, and may not be available in all states.
              </p>

              <p>
                We and our affiliates make no guarantee that you will be matched with a Service Provider if you submit a
                Match Request.
              </p>

              <p>
                If you make either a complete or incomplete Request, then you agree that any information that you
                provide in connection with your Match Request may be used and disclosed as set forth in the Privacy
                Policy. Without limiting anything in the Privacy Policy, you authorize Service Providers, and their
                affiliates and third-party service providers, to conduct all necessary research with your information,
                including checking your credit history, if applicable, for purposes of providing you with your Match
                Request.
              </p>

              <p>
                If you make a Match Request, then you expressly authorize Service Providers to contact you by telephone,
                fax and email at the numbers and addresses provided in your Match Request, for purposes of providing you
                with the quotes, products and services indicated in your Match Request. You consent to receive telephone
                calls from Service Providers, even if the phone number that you provided on your Match Request is on any
                "Do Not Call" list. You also consent to us and the Service Providers making recorded calls to remind you
                of deadlines or other issues in connection with your Match Request.
              </p>

              <p>
                You are solely responsible for complying with applicable laws and regulations in connection with your
                use of any services offered by a Service Provider.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Fees and Payments</h2>

              <p>
                Access and use of the Site is free. At any time, we may choose to charge fees for various premium
                features and services, and we will notify you of those charges at the time that we offer features and
                services for a fee.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Transmissions, Submissions and Postings to the Site</h2>

              <p>
                If you transmit, submit or post information to the Site that is not Federally trademarked and/or
                copyrighted, you automatically grant us and our affiliates and assigns the worldwide, fully-paid,
                royalty-free, exclusive right and license to use, copy, format, adapt, publish and/or incorporate any or
                all such information in any media whatsoever, including, without limitation, the Content (as defined
                below). Provided that you have obtained prior written permission from us to transmit, submit or post
                information to the Site that is Federally trademarked and/or copyrighted, you automatically grant us and
                our assigns the worldwide, fully-paid, royalty-free right to use, copy, format, adapt, publish and/or
                incorporate any or all such information in any media whatsoever, including, without limitation, the
                Content.
              </p>

              <p>You shall not transmit, submit or post the following to the Site:</p>

              <ul className="list-disc pl-8 mb-4">
                <li>
                  Information that infringes our or any third party's copyright, patent, trademark, trade secret or
                  other proprietary rights;
                </li>
                <li>Information that violates any law, statute, ordinance or regulation;</li>
                <li>
                  Information that is trade libelous, unlawfully threatening, unlawfully harassing, defamatory, obscene,
                  explicit or vulgar, or otherwise injurious to us or third parties or that infringes on our or any
                  third party's rights of publicity or privacy;
                </li>
                <li>
                  Information that contains any viruses, worms, Trojan horses, trap doors, back doors, easter eggs, time
                  bombs, cancelbots or other code or computer programming routines that contain contaminating or
                  destructive properties or that are intended to damage, detrimentally interfere with, surreptitiously
                  intercept or expropriate any system, data or personal information;
                </li>
                <li>
                  Information containing or constituting chain letters, mass mailings, political campaigning, or any
                  form of "spam";
                </li>
                <li>Information that is false, inaccurate or misleading;</li>
                <li>Commercial advertisements or solicitations without written permission from us; or</li>
                <li>Federally Trademarked and/or Copyrighted information without written permission from us.</li>
              </ul>

              <p>
                Although we do not regularly review your transmissions, submissions or postings, we reserve the right
                (but not the obligation) to edit, refuse to post or remove your transmissions, submissions or postings.
                Pursuant to the Privacy Policy, we may review transmissions, submissions or postings made by you to
                determine, in its sole discretion, your compliance with this Agreement.
              </p>

              <p>
                You are solely responsible for all your transmissions, submissions or postings (i.e., your own User
                Generated Content) and the consequences of transmitting, submitting or posting them.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Our Intellectual Property Rights</h2>

              <p>
                Our names, graphics, logos, page headers, button icons, scripts, and service names are our trademarks or
                trade dress in the United States and/or other countries (collectively, the "Proprietary Marks"). You may
                not use the Proprietary Marks without our prior express written permission, which permission may be
                withheld in our sole discretion. MedicareFinder LLC makes no proprietary claim to any third-party names,
                trademarks or service marks appearing on the Site. Any third-party names, trademarks, and service marks
                are property of their respective owners.
              </p>

              <p>
                The information, advice, data, software and content viewable on, contained in, or downloadable from the
                Site (collectively, the "Content"), including, without limitation, all text, graphics, charts, pictures,
                photographs, images, line art, icons and renditions, are copyrighted by, or otherwise licensed to, us or
                our Content suppliers. We also own a copyright of a collective work in the selection, coordination,
                arrangement, presentation, display and enhancement of the Content (the "Collective Work"). All software
                used on the Site (the "Software") is our property or property of our software vendors and is protected
                by United States and international copyright laws. Viewing, reading, printing, downloading or otherwise
                using the Content and/or the Collective Work does not entitle you to any ownership or intellectual
                property rights to the Content, the Collective Work or the Software.
              </p>

              <p>
                You shall be solely responsible for any damage resulting from your infringement of our or any third
                party's intellectual property rights regarding the Trademarks, the Content, the Collective Work, the
                Software and/or any other harm incurred by us or our affiliates as a direct or indirect result of your
                copying, distributing, redistributing, transmitting, publishing or using the same for purposes that are
                contrary to the terms and conditions of this Agreement.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Use of the Content</h2>

              <p>
                We grant you a limited license to access, print, download or otherwise make personal use of the Content
                and the Collective Work in the form of: (i) one machine-readable copy; (ii) one backup copy; and (iii)
                one print copy, for your non-commercial use; provided, however, that you shall not delete any
                proprietary notices or materials with regard to the foregoing manifestations of the Content and the
                Collective Work. You may not modify the Content or the Collective Work or utilize them for any
                commercial purpose or any other public display, performance, sale, or rental, decompile, reverse
                engineer, or disassemble the Content and the Collective Work, or transfer the Content or the Collective
                Work to another person or entity.
              </p>

              <p>
                Except as otherwise permitted under the copyright laws of the United States, no other copying,
                distribution, redistribution, transmission, publication or use, other than the non-commercial use of the
                Content and the Collective Work as permitted by this Agreement, is permitted by you without our express
                prior written permission, which permission may be withheld in our sole discretion.
              </p>

              <p>
                You may not use any meta tags or any other "hidden text" utilizing our name or trademarks without
                express written permission, which permission may be withheld in our sole discretion.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Access and Interference</h2>

              <p>
                The Site contains robot exclusion headers. You agree that you will not use any robot, spider, scraper,
                deep link or other similar automated data gathering or extraction tools, program, algorithm or
                methodology to access, acquire, copy or monitor the Site or any portion of the Site or for any other
                purpose, without our express written permission which may be withheld in our sole discretion.
                Additionally, you agree that you will not: (i) take any action that imposes, or may impose in our sole
                discretion an unreasonable or disproportionately large load on our infrastructure; (ii) copy, reproduce,
                modify, create derivative works from, distribute or publicly display any content (except for your
                personal information) from the Site without our prior written permission and the appropriate third
                party, as applicable; (iii) interfere or attempt to interfere with the proper working of the Site or any
                activities conducted on the Site; or (iv) bypass our robot exclusion headers or other measures we may
                use to prevent or restrict access to the Site. Notwithstanding the foregoing, we grant the operators of
                public search engines permission to use spiders to copy materials from the Site for the sole purpose and
                solely to the extent necessary for creating publicly available search indices of the materials on the
                Site, but not caches or archives of such materials. We reserve the right to revoke these exceptions
                either generally or in specific cases. You shall not collect or harvest any personally identifiable
                information, including account names, from the Site. You shall not use any communication systems
                provided on the Site (such as Forums or email) for any commercial or solicitation purposes. You shall
                not solicit for commercial purposes any users of the Site without our express, written permission, which
                permission may be withheld in our sole discretion.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Electronic Communications</h2>

              <p>
                When you visit the Site or send email to us, you are communicating with us electronically. You consent
                to receive communications from us electronically. Although we may choose to communicate with you by
                regular mail, we may also choose to communicate with you by e-mail or by posting notices on the Site.
                You agree that all agreements, notices, disclosures and other communications that we provide to you
                electronically satisfy any legal requirement that such communications be in writing.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Responsibility for Equipment and Related Costs</h2>

              <p>
                You are responsible for obtaining and maintaining all telephone, computer hardware, Internet access
                services and other equipment or services needed to access and use the Site, and all costs and fees
                associated with Internet access or long distance charges incurred with regard to your access and use of
                the Site.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Third Party Links</h2>

              <p>
                There may be provided on the Site links to other Web sites belonging to our advertisers, business
                partners, affiliates, Service Providers and other third parties. Such links do not constitute an
                endorsement by us of those Web sites, nor the products or services listed on those Web sites. We are not
                responsible for the activities or policies of those Web sites. We do not endorse or recommend the
                products of any particular advertiser, business partner, affiliate or other third party. We do not
                guarantee that the terms or rates offered by any particular advertiser, business partner, affiliate,
                Service Provider or other third party on the Site are the best terms or lowest rates available in the
                market.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Mobile Devices</h2>

              <p>
                If we provide aspects of the Site via an application for your mobile or other device, please be aware
                that your carrier's normal rates and fees may apply and that the terms of this Agreement and other
                agreements within the application apply to your use of such mobile application.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">
                We Make No Representations or Warranties Regarding the Content
              </h2>

              <p>
                The Content and all services and products associated with the Site are provided to you on an "as-is" and
                "as available" basis. We make no representations or warranties of any kind, express or implied, as to
                the operation of the Site or the information, content, materials, products or services included on or
                associated with the Site. You expressly agree that your use of the Site and all products and services
                included on or associated with the Site is at your sole risk.
              </p>

              <p>
                We do not make any representations, warranties or guarantees, express or implied, regarding the
                accuracy, correctness, or completeness of the Content or the services and products associated with the
                Site, nor the safety, reliability, title, timeliness, completeness, merchantability, conformity or
                fitness for a particular purpose of the Content or the services and products associated with the Site.
                It is your sole responsibility to independently evaluate the accuracy, correctness or completeness of
                the Content and the services and products associated with the Site. We make no representation, warranty
                or guarantee that the Content that may be available for downloading from the Site is free of infection
                from any viruses, worms, Trojan horses, trap doors, back doors, easter eggs, time bombs, cancelbots or
                other code or computer programming routines that contain contaminating or destructive properties or that
                are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any
                system, data or personal information. We do not make any representations, warranties or guarantees,
                express or implied, regarding any quotes OR OFFERS provided on or through the site.
              </p>

              <p>
                The Content is intended only to assist you with financial decisions and is broad in scope and does not
                consider your personal financial situation. Your personal financial situation is unique and the
                information and advice may not be appropriate for your situation. Accordingly, before making any final
                decisions or implementing any financial strategy, We recommend that you obtain additional information
                and advice of your accountant and other financial advisors who are fully aware of your individual
                circumstances.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Limitations on Our Liability</h2>

              <p className="font-bold">
                We shall in no event be responsible to, or liable to, you, or any third party, whether in contract,
                warranty, tort (including negligence) or otherwise, for any damages, including, but not limited to,
                special, incidental, indirect or consequential damages that include, but are not limited to, damages for
                any loss of profit, revenue or business, as a direct or indirect result of: (i) your breach or violation
                of the terms and conditions of this Agreement; (ii) your access and use of the Site; (iii) your DELAY IN
                ACCESSING OR inability to access or use the Site for any reason; (iv) your downloading of any of the
                Content or the Collective Work for your use; (v) your reliance upon or use of the Content or the
                Collective Work, OR (VI) ANY INFORMATION, SOFTWARE, PRODUCTS OR SERVICES OBTAINED THROUGH THE SITE, OR
                OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER RESULTING IN WHOLE OR IN PART, FROM BREACH OF
                CONTRACT, TORTUOUS BEHAVIOR, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE AND/OR OUR SUPPLIERS
                HAD BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. OUR LIABILITY AND THE LIABILITY OF OUR AFFILIATES,
                DIRECTORS, OFFICERS, EMPLOYEES, INDEPENDENT CONTRACTORS, SHAREHOLDERS, REPRESENTATIVES, AND AGENTS
                ARISING OUT OF THIS AGREEMENT SHALL NOT EXCEED $100.
              </p>

              <p className="font-bold">
                YOU SPECIFICALLY ACKNOWLEDGE THAT WE SHALL NOT BE LIABLE FOR USER GENERATED CONTENT OR THE DEFAMATORY,
                OFFENSIVE OR ILLEGAL CONDUCT OF ANY THIRD PARTY, AND THAT THE RISK OF HARM OR DAMAGE FROM SUCH USER
                GENERATED CONTENT AND THIRD-PARTY CONDUCT RESTS ENTIRELY WITH YOU.
              </p>

              <p className="font-bold">
                YOU AND WE AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SITE MUST COMMENCE WITHIN ONE
                (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
              </p>

              <p>
                Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of
                certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions or
                limitations may not apply to you.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Your Indemnification of Us</h2>

              <p>
                You shall defend, indemnify and hold harmless us and our officers, directors, shareholders, employees,
                independent contractors, agents, representatives and affiliates from and against all claims and
                expenses, including, but not limited to, attorneys' fees, arising out of, or attributable to: (i) any
                breach or violation of this Agreement by you; (ii) your failure to provide accurate, complete and
                current personally identifiable information requested or required by us; (iii) your access or use of the
                Site; (iv) access or use of the Site under any password that may be issued to you; (v) your
                transmissions, submissions or postings (i.e., your own User Generated Content); and/or (vi) any personal
                injury or property damage caused by you.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Amendments of this Agreement</h2>

              <p>
                We reserve the right to update, amend and/or change this Agreement at any time in its sole discretion
                and without notice. Updates to this Agreement will be posted here. Amendments will take effect
                immediately upon our posting the updated Agreement on the Site. You are encouraged to revisit this
                Agreement from time to time in order to review any changes that have been made. The date on which this
                Agreement was last updated will be noted immediately above this Agreement. Your continued access and use
                of the Site following the posting of any such changes shall automatically be deemed your acceptance of
                all changes.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Our Remedies</h2>

              <p>
                You acknowledge that we may be irreparably damaged if this Agreement is not specifically enforced, and
                damages at law would be an inadequate remedy. Therefore, in the event of a breach or threatened breach
                of any provision of this Agreement by you, we shall be entitled, in addition to all rights and remedies,
                to seek an injunction restraining such breach or threatened breach, without being required to show any
                actual damage or to post an injunction bond, and/or to a decree for specific performance of the
                provisions of this Agreement. For purposes of this Section, you agree that any action or proceeding with
                regard to such injunction restraining such breach or threatened breach shall be brought in the courts of
                record of San Diego County, San Diego, or the United States District Court, District of California,
                located in San Diego, California. You consent to the jurisdiction of such court and waive any objection
                to the laying of venue of any such action or proceeding in such court. You agree that service of any
                court paper may be effected on such party by mail or in such other manner as may be provided under
                applicable laws, rules of procedure or local rules.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Governing Law; Arbitration</h2>

              <p>
                You agree that: (i) the Site shall be deemed solely based in the State of California; and (ii) the Site
                shall be deemed a passive Web site that does not give rise to personal jurisdiction over us, our
                affiliates and assigns, either specific or general, in jurisdictions other than the State of California.
                This Agreement is to be governed by and construed in accordance with the internal laws of the State of
                California, without regard for principles of conflicts of laws. Any civil action, claim, dispute or
                proceeding arising out of or relating to this Agreement, except for an injunctive action regarding a
                breach or threatened breach of any provision of this Agreement by you as provided above, shall be
                referred to final and binding arbitration, before a single arbitrator, under the commercial arbitration
                rules of the American Arbitration Association in San Diego County, California.
              </p>

              <p className="font-bold">
                THEREFORE, YOU DO NOT HAVE THE OPPORTUNITY TO GO TO COURT TO ASSERT OR DEFEND YOUR RIGHTS AND YOU GIVE
                UP YOUR RIGHT TO PARTICIPATE IN OR BRING CLASS ACTIONS. By using The Site you consent to these
                restrictions.
              </p>

              <p>
                You and we shall select the arbitrator, and if you and we are unable to reach agreement on selection of
                the arbitrator within thirty (30) days after the notice of arbitration is served, then the American
                Arbitration Association shall select the arbitrator. Arbitration shall not commence until the party
                requesting it has deposited One Thousand Dollars ($1,000.00) with the arbitrator for the arbitrator's
                fees and costs. The party requesting arbitration shall advance such sums as are required from time to
                time by the arbitrator to pay the arbitrator's fees and costs until the prevailing party is determined
                or the parties have agreed in writing to an alternate allocation of fees and costs.
              </p>

              <p>
                Judgment upon any award rendered by the arbitrator shall be final, binding and conclusive upon you and
                us and your and our respective administrators, executors, legal representatives, successors and assigns,
                and may be entered in any court of competent jurisdiction. Notwithstanding the previous sentence, in no
                event shall either you or we be entitled to punitive, special, indirect or consequential damages and
                both you and we hereby waive your and our respective rights to any punitive, special, indirect or
                consequential damages, including, but not limited to, damages for any loss of profit, revenue or
                business.
              </p>

              <p>
                Should a dispute arise and should the arbitration provisions herein become inapplicable or
                unenforceable, or in any instance of any lawsuit between you and us, jurisdiction over and venue of any
                suit shall be exclusively in the state courts sitting in San Diego County, CA, and the United States
                District Court, District of California, located in San Diego, California.
              </p>

              <p>
                This arbitration agreement includes claims related to our clients, vendors, and Marketing Partners,
                which are third party beneficiaries of this arbitration agreement
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4">Miscellaneous</h2>

              <p>
                If any portion of this Agreement is deemed unlawful, void or unenforceable by any arbitrator or court of
                competent jurisdiction, this Agreement as a whole shall not be deemed unlawful, void or unenforceable,
                but only that portion of this Agreement that is unlawful, void or unenforceable shall be stricken from
                this Agreement.
              </p>

              <p>
                The headings contained in this Agreement are for convenience of reference only, are not to be considered
                a part of this Agreement, and shall not limit or otherwise affect in any way the meaning or
                interpretation of this Agreement.
              </p>

              <p>
                All covenants, agreements, representations and warranties made in this Agreement, as may be amended by
                us from time to time, shall survive your acceptance of this Agreement and the termination of this
                Agreement.
              </p>

              <p>
                This Agreement and the Privacy Policy represent the entire understanding and agreement between you and
                us regarding the subject matter of the same, and supersede all other previous agreements, understandings
                and/or representations regarding the same.
              </p>

              <p>
                If you have questions, comments, concerns or feedback regarding this Agreement or the Site, please
                contact us at the following address.
              </p>

              <p>MedicareFinder, 4241 Jutland Drive Suite 101 San Diego, CA 92117.</p>
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
