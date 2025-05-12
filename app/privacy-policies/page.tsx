// app/privacy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 3ata",
  description: "General Privacy Policy for 3ata mosque apps.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-6">General Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: May 4, 2025</p>

        <p className="text-gray-700 mb-6">
          We respect your privacy and are committed to protecting it. This Privacy Policy outlines our practices
          regarding the information we collect from users of our app.
        </p>

        <div className="space-y-6 text-gray-800">
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Information Collection</h2>
            <p>
              Our app is designed with your privacy in mind. We collect minimal diagnostic data to improve user experience, including:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 text-sm text-gray-700 space-y-1">
              <li>Basic app usage statistics (number of times the app is opened)</li>
              <li>Navigation patterns within the app (which features are most used)</li>
              <li>Access timestamps when the app is used</li>
            </ul>
            <p className="mt-2">
              We do not collect any sensitive personal information, and all diagnostic data is anonymized and used solely for improving the app experience.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">2. No Data Sharing</h2>
            <p>
              Since we do not collect personal data, there is no data to share with third parties. Our app does not
              integrate any analytics, advertising, or tracking tools.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">3. Links to Our Website</h2>
            <p>
              Our app includes links to our website for your convenience. While using the website, its privacy policy
              will apply, which may differ from this app&apos;s Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">4. Third-Party Links</h2>
            <p>
              The app also contains links to external websites, including the Islamic Society of Greater Houston.
              Please review their respective privacy policies when using these links.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">5. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page. We encourage
              you to review this page periodically for any changes. Updates become effective as soon as they are posted.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">6. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us:
              <br />
              <span className="block mt-2 font-medium">Phone:</span> +1 832-523-9407
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}