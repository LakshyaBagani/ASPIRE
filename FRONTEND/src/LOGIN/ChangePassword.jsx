import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newOtp, setNewOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    setOtpSent(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setIsVerified(true);
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    }
    alert("Password changed successfully! Redirecting to Login...");
    navigate("/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-20 backdrop-blur-xl"></div>
      <div className="relative bg-gray-900 shadow-2xl rounded-2xl p-8 w-96 border border-blue-500">
        <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-6">
          {isVerified ? "Reset Password" : "Forgot Password"}
        </h2>

        {!otpSent && (
          <form onSubmit={handleSendOTP}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Send OTP
            </button>
          </form>
        )}

        {otpSent && !isVerified && (
          <form onSubmit={handleVerifyOTP} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Verify OTP
            </button>
          </form>
        )}

        {isVerified && (
          <form onSubmit={handleResetPassword} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition duration-300 hover:border-blue-400 hover:shadow-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-green-500/50"
            >
              Reset Password
            </button>
          </form>
        )}

        <div className="text-sm text-blue-400 mt-4 text-center">
          <a href="/Login" className="hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
