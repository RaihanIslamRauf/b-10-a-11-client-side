const TermsOfService = () => {
  return (
    <div className="text-white min-h-screen py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <span className="text-red-500 font-semibold">Runtrack</span>. By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">1. Use of Service</h2>
      <p className="mb-4">
        You must be at least 13 years old to use our services. You agree to use Runtrack only for lawful purposes and in accordance with all applicable laws.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">2. Account Responsibilities</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately if you suspect unauthorized use.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on Runtrack, including text, graphics, logos, and software, is the property of Runtrack and protected by intellectual property laws. You may not use, reproduce, or distribute it without permission.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">4. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to Runtrack at any time for violation of these Terms or for any other reason without prior notice.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        Runtrack is provided as it is without warranties of any kind. We are not liable for any damages arising from your use of the platform.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of the platform after changes implies acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold text-red-400 mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at <span className="underline">support@runtrack.com</span>.
      </p>

      <p className="text-sm text-gray-400 mt-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsOfService;
