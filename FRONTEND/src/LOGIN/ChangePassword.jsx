import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
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
      return;
    }
    alert("Password changed successfully! Redirecting to Login...");
    navigate("/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-30 backdrop-blur-lg"></div>
      <div className="relative bg-black/30 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-96 border border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-purple-500/50 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 animate-text mb-6">
          {isVerified ? "Reset Password" : "Forgot Password"}
        </h2>

        {!otpSent && (
          <form onSubmit={handleSendOTP}>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-500 text-white font-semibold text-lg px-5 py-3 rounded-lg overflow-hidden relative shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
            >
              Send OTP
            </button>
          </form>
        )}

        {otpSent && !isVerified && (
          <form onSubmit={handleVerifyOTP} className="mt-4">
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-500 text-white font-semibold text-lg px-5 py-3 rounded-lg overflow-hidden relative shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
            >
              Verify OTP
            </button>
          </form>
        )}

        {isVerified && (
          <form onSubmit={handleResetPassword} className="mt-4">
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white transition duration-300 hover:border-purple-400 hover:shadow-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-all duration-500 text-white font-semibold text-lg px-5 py-3 rounded-lg overflow-hidden relative shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
            >
              Reset Password
            </button>
          </form>
        )}

        <div className="text-sm text-purple-400 mt-4 text-center">
          <a href="/Login" className="hover:underline transition-all duration-300 hover:text-pink-400">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
