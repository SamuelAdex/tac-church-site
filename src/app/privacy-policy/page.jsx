"use client"

import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Champs Digital Library</title>
        <meta name="description" content="Privacy Policy for The Champs Digital Library (TCDL) - Learn how we collect, use, and protect your information." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">The Champs Digital Library (TCDL)</p>
            <p className="text-sm text-gray-500 mt-2">Last Updated: November 26, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p>
                Welcome to The Champs Digital Library (TCDL). We are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our mobile application and website.
              </p>
              <p>
                By using TCDL, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Personal Information</h3>
              <p>When you register or use our app, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and email address</li>
                <li>Profile information (optional profile picture, bio)</li>
                <li>Login credentials</li>
                <li>Device information (device type, operating system, unique device identifiers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1.2 Usage Data</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Content viewing history (books read, videos watched, audio played)</li>
                <li>Search queries and preferences</li>
                <li>Bookmarks and favorites</li>
                <li>App interaction data and analytics</li>
                <li>Time spent on the app and specific content</li>
                <li>IP address and location data (country/city level)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1.3 Voucher and Points Information</h3>
              <p>When you redeem vouchers for points:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Voucher codes entered</li>
                <li>Points balance and transaction history</li>
                <li>Download history (books and audio files accessed with points)</li>
                <li>Redemption timestamps and activity logs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1.4 Information from Third Parties</h3>
              <p>We may receive information from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Social media platforms (if you choose social login)</li>
                <li>Analytics providers (Google Analytics, Facebook Pixel)</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Create and manage your account</li>
                <li>Deliver gospel content (audio, books, videos, quotes)</li>
                <li>Process voucher redemptions and manage your points balance</li>
                <li>Track downloads of audio and books</li>
                <li>Personalize your experience and recommend relevant content</li>
                <li>Send notifications about new content, updates, and features</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns to improve our services</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity (including voucher abuse)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* 3. How We Share Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Share Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.1 Service Providers</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud hosting services (for app infrastructure)</li>
                <li>Content delivery networks (for media streaming)</li>
                <li>Analytics providers (Google Analytics, Facebook)</li>
                <li>Email service providers (for notifications)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Legal Requirements</h3>
              <p>We may disclose your information if required to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comply with legal obligations or court orders</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or security issues</li>
                <li>Respond to government requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 Business Transfers</h3>
              <p>
                If TCDL is involved in a merger, acquisition, or sale of assets, your information may be 
                transferred as part of that transaction.
              </p>
            </section>

            {/* 4. Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Data Storage</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your data is stored on secure MongoDB cloud servers</li>
                <li>Media files are stored on secure cloud storage platforms</li>
                <li>We implement industry-standard encryption for data transmission</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 Security Measures</h3>
              <p>We implement reasonable security measures including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure authentication protocols</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication for admin systems</li>
              </ul>
              <p className="mt-2">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee 
                absolute security of your information.
              </p>
            </section>

            {/* 5. Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.1 Access and Update</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information</li>
                <li>Update or correct your account details</li>
                <li>Request a copy of your data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Delete Your Account</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request deletion of your account and personal data</li>
                <li>Note: Some information may be retained for legal or legitimate business purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.3 Opt-Out Options</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Unsubscribe from marketing emails</li>
                <li>Disable push notifications in your device settings</li>
                <li>Opt out of certain analytics tracking</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.4 Data Portability</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request your data in a portable format</li>
              </ul>

              <p className="mt-3">
                To exercise these rights, contact us at <a href="mailto:thearenaofchampions247@gmail.com" className="text-blue-600 hover:underline">thearenaofchampions247@gmail.com</a>
              </p>
            </section>

            {/* 6. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Children&rsquo;s Privacy</h2>
              <p>
                TCDL is intended for general audiences including children. We do not knowingly collect personal 
                information from children under 13 without parental consent. If we become aware that we have collected 
                personal information from a child under 13 without parental consent, we will take steps to delete 
                that information.
              </p>
            </section>

            {/* 7. Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remember your preferences and settings</li>
                <li>Analyze app usage and performance</li>
                <li>Provide personalized content recommendations</li>
                <li>Track marketing campaign effectiveness</li>
              </ul>
              <p className="mt-2">You can control cookies through your browser or device settings.</p>
            </section>

            {/* 8. Third-Party Services */}
            {/* <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Third-Party Services</h2>
              <p>Our app integrates with third-party services that have their own privacy policies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics - Privacy Policy</a></li>
                <li><a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Pixel - Privacy Policy</a></li>
                <li><a href="https://www.mongodb.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MongoDB Atlas - Privacy Policy</a></li>
              </ul>
              <p className="mt-2">We are not responsible for the privacy practices of these third parties.</p>
            </section> */}

            {/* 9. International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have different data protection laws. By using TCDL, you consent to such transfers.
              </p>
            </section>

            {/* 10. Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Data Retention</h2>
              <p>We retain your personal information for as long as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your account is active</li>
                <li>Needed to provide you services</li>
                <li>Required for legal, accounting, or reporting purposes</li>
              </ul>
              <p className="mt-2">
                After account deletion, we may retain certain information in backup systems for up to 90 days.
              </p>
            </section>

            {/* 11. Changes to This Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an 
                updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
              </p>
              <p className="mt-2">For material changes, we will notify you via:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email notification</li>
                <li>In-app notification</li>
                <li>Prominent notice on our website</li>
              </ul>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">The Champs Digital Library</p>
                <p>Email: <a href="mailto:support@example.com" className="text-blue-600 hover:underline">thearenaofchampions247@gmail.com </a></p>
                <p>Address: Along Poly Ihiagwa Road, Nekede Owerri, Imo State</p>
                <p>Phone: <a href="https://wa.me/+2349055450855">+2349055450855</a></p>
                <p className="mt-2">
                  For specific data protection inquiries or to exercise your rights, please email:{' '}
                  <a href="mailto:thearenaofchampions247@gmail.com" className="text-blue-600 hover:underline">thearenaofchampions247@gmail.com</a>
                </p>
              </div>
            </section>

            {/* 13. Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of Nigeria, without regard to its 
                conflict of law provisions.
              </p>
            </section>

            {/* Your Consent */}
            <section className="border-t pt-6 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Consent</h2>
              <p>
                By using The Champs Digital Library, you acknowledge that you have read and understood this 
                Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Champs Digital Library. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}