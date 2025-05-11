const PrivacyPolicy = () => {
  return (
    <div className="text-white min-h-screen py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="text-red-500 font-semibold">Runtrack</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal information such as your name, email address, and profile picture when you register or use our services. We may also collect data related to your marathon activities, preferences, and device information.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
        <ul className="list-disc ml-6 mt-2">
          <li>Manage your account and participation in marathons</li>
          <li>Send notifications and updates</li>
          <li>Improve our platform experience</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement strict security measures to keep your information safe from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">4. Sharing Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Your information is only shared with trusted partners when necessary for service functionality (e.g., payment processing).
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your information at any time by contacting us.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please email us at <span className="underline">support@runtrack.com</span>.
      </p>

      <p className="text-sm text-gray-400 mt-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
