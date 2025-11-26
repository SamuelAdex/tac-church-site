import React from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - The Champs Digital Library</title>
        <meta name="description" content="Terms and Conditions for The Champs Digital Library (TCDL) - Read our terms of service before using the app." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-gray-600">The Champs Digital Library (TCDL)</p>
            <p className="text-sm text-gray-500 mt-2">Last Updated: November 26, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p>
                Welcome to The Champs Digital Library (TCDL). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your 
                access to and use of our mobile application, website, and services. By accessing or using TCDL, 
                you agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before using our services. If you do not agree with any part 
                of these Terms, you must not use our app or services.
              </p>
            </section>

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By creating an account, accessing, or using TCDL, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and our Privacy Policy. If you are using TCDL on behalf of 
                an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
              <p>
                TCDL is a digital library platform that provides access to gospel materials including audio sermons, 
                books, videos, and inspirational quotes from Bishop Moses Anozie. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Free access to videos and quotes</li>
                <li>Access to audio sermons and books through a voucher-based points system</li>
                <li>User accounts with personalized content recommendations</li>
                <li>Bookmarking and favorites features</li>
                <li>Download capabilities for offline access (audio and books)</li>
                <li>Search and discovery features</li>
              </ul>
            </section>

            {/* 3. Account Registration and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Account Creation</h3>
              <p>To access certain features, you must create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Account Eligibility</h3>
              <p>
                You must be at least 13 years old to create an account. If you are under 18, you represent that 
                you have obtained parental or guardian consent to use our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 Account Termination</h3>
              <p>We reserve the right to suspend or terminate your account if you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate these Terms</li>
                <li>Provide false or misleading information</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Abuse the voucher or points system</li>
                <li>Infringe on intellectual property rights</li>
              </ul>
            </section>

            {/* 4. Voucher and Points System */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Voucher and Points System</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 How It Works</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Users can redeem voucher codes to receive points</li>
                <li>Points are used to download audio sermons and books</li>
                <li>Each piece of content requires a specific number of points</li>
                <li>Points cannot be transferred between accounts</li>
                <li>Points do not have cash value and cannot be redeemed for money</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 Voucher Distribution</h3>
              <p>
                Vouchers may be distributed through promotional campaigns, partnerships, events, or other 
                authorized channels. We reserve the right to modify, suspend, or discontinue voucher distribution 
                at any time without notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.3 Voucher Terms</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Vouchers are valid only for the specified period</li>
                <li>Expired vouchers cannot be redeemed</li>
                <li>Each voucher code can only be used once</li>
                <li>Vouchers are non-transferable and have no cash value</li>
                <li>We reserve the right to invalidate fraudulently obtained vouchers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.4 Prohibited Activities</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Generate, duplicate, or share voucher codes without authorization</li>
                <li>Use automated systems to obtain or redeem vouchers</li>
                <li>Sell, trade, or transfer vouchers or points to other users</li>
                <li>Exploit bugs or vulnerabilities in the points system</li>
                <li>Create multiple accounts to abuse the voucher system</li>
              </ul>
            </section>

            {/* 5. Content Access and Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Content Access and Usage</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 License Grant</h3>
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
                revocable license to access and use our content for personal, non-commercial purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Content Restrictions</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy, reproduce, or distribute content without permission</li>
                <li>Modify, adapt, or create derivative works from our content</li>
                <li>Sell, rent, lease, or sublicense access to our content</li>
                <li>Remove copyright notices or other proprietary markings</li>
                <li>Use content for commercial purposes without authorization</li>
                <li>Share downloaded content with others or upload to other platforms</li>
                <li>Use automated tools to download or scrape content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.3 Downloaded Content</h3>
              <p>
                Downloaded audio and books are for your personal offline use only. Downloads remain subject to 
                these Terms and may be limited or revoked if you violate these Terms.
              </p>
            </section>

            {/* 6. Intellectual Property Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Ownership</h3>
              <p>
                All content, features, and functionality of TCDL, including but not limited to text, graphics, 
                logos, audio, video, software, and compilation, are owned by The Champs Digital Library, Bishop 
                Moses Anozie, or our licensors and are protected by copyright, trademark, and other intellectual 
                property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.2 Trademarks</h3>
              <p>
                &ldquo;The Champs Digital Library,&rdquo; &ldquo;TCDL,&rdquo; and related logos are trademarks. You may not use these 
                trademarks without our prior written permission.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.3 Copyright Infringement</h3>
              <p>
                We respect intellectual property rights. If you believe any content infringes your copyright, 
                please contact us with detailed information about the alleged infringement.
              </p>
            </section>

            {/* 7. User Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the service for any illegal purpose</li>
                <li>Violate any local, state, national, or international law</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Collect information about other users without consent</li>
                <li>Use the service to spam or send unsolicited communications</li>
              </ul>
            </section>

            {/* 8. Third-Party Links and Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Third-Party Links and Services</h2>
              <p>
                Our service may contain links to third-party websites or services that are not owned or controlled 
                by TCDL. We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party sites or services.
              </p>
              <p className="mt-2">
                You acknowledge and agree that TCDL shall not be responsible or liable for any damage or loss 
                caused by your use of any third-party content, goods, or services.
              </p>
            </section>

            {/* 9. Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">9.1 &ldquo;As Is&rdquo; Basis</h3>
              <p>
                TCDL is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, either 
                express or implied, including but not limited to warranties of merchantability, fitness for a 
                particular purpose, or non-infringement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">9.2 No Guarantee</h3>
              <p>We do not guarantee that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The service will be uninterrupted, secure, or error-free</li>
                <li>Content will be accurate, complete, or current</li>
                <li>Defects will be corrected</li>
                <li>The service will be free from viruses or harmful components</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">9.3 Content Disclaimer</h3>
              <p>
                The gospel content provided is for spiritual enrichment and educational purposes. Views expressed 
                in the content are those of Bishop Moses Anozie and do not necessarily reflect the views of TCDL 
                as a platform.
              </p>
            </section>

            {/* 10. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, TCDL, its directors, employees, partners, agents, suppliers, 
                or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including but not limited to loss of profits, data, use, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your access to or use of or inability to access or use the service</li>
                <li>Any conduct or content of any third party on the service</li>
                <li>Any content obtained from the service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            {/* 11. Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless TCDL and its licensors, employees, contractors, 
                agents, officers, and directors from and against any and all claims, damages, obligations, losses, 
                liabilities, costs, or debt, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your use of and access to the service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including copyright or privacy rights</li>
                <li>Any claim that your use of the service caused damage to a third party</li>
              </ul>
            </section>

            {/* 12. Modifications to Service */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any 
                time, with or without notice. We shall not be liable to you or any third party for any modification, 
                suspension, or discontinuance of the service.
              </p>
              <p className="mt-2">
                We may also impose limits on certain features or restrict access to parts or all of the service 
                without notice or liability.
              </p>
            </section>

            {/* 13. Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a 
                revision is material, we will provide at least 30 days&rsquo; notice prior to any new terms taking effect.
              </p>
              <p className="mt-2">
                By continuing to access or use our service after revisions become effective, you agree to be bound 
                by the revised terms. If you do not agree to the new terms, you must stop using the service.
              </p>
            </section>

            {/* 14. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">14. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], 
                without regard to its conflict of law provisions.
              </p>
              <p className="mt-2">
                Any disputes arising out of or relating to these Terms or the service shall be resolved in the 
                courts of [Your Country/State], and you consent to the exclusive jurisdiction of such courts.
              </p>
            </section>

            {/* 15. Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">15. Dispute Resolution</h2>
              <p>
                If you have any dispute with us, you agree to first contact us and attempt to resolve the dispute 
                informally by sending a written notice to us. We will attempt to resolve the dispute informally 
                within 60 days.
              </p>
              <p className="mt-2">
                If we cannot resolve the dispute informally, both parties agree to submit to binding arbitration 
                in accordance with the laws of [Your Country/State].
              </p>
            </section>

            {/* 16. Severability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">16. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, 
                legality, and enforceability of the remaining provisions shall not be affected or impaired.
              </p>
            </section>

            {/* 17. Entire Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">17. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                TCDL regarding the use of our service and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* 18. Waiver */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">18. Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of 
                those rights. The waiver of any such right or provision will be effective only if in writing and 
                signed by an authorized representative of TCDL.
              </p>
            </section>

            {/* 19. Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">19. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">The Champs Digital Library</p>
                <p>Email: <a href="mailto:thearenaofchampions247@gmail.com" className="text-blue-600 hover:underline">thearenaofchampions247@gmail.com</a></p>
                <p>Address: Along Poly Ihiagwa Road, Nekede Owerri, Imo State</p>
                <p>Phone: <a href="https://wa.me/+2349055450855">+2349055450855</a></p>
                <p className="mt-2">
                  For legal inquiries: <a href="mailto:thearenaofchampions247@gmail.com" className="text-blue-600 hover:underline">thearenaofchampions247@gmail.com</a>
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t pt-6 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acknowledgment</h2>
              <p>
                By using The Champs Digital Library, you acknowledge that you have read these Terms and Conditions, 
                understand them, and agree to be bound by them. If you do not agree to these Terms, you must not 
                use our service.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Champs Digital Library. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
              {' | '}
              <a href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}