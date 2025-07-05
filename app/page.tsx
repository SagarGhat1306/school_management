'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-12 font-sans bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* School Info Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Starlight International School</h1>
        <p className="text-lg text-gray-600">
          Empowering young minds through quality education, character development, and a commitment
          to lifelong learning. Our vision is to nurture responsible global citizens with wisdom,
          creativity, and compassion.
        </p>
      </motion.div>

      {/* Portal Links */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Admin */}
        <motion.div whileHover={{ scale: 1.05 }} className="transition">
          <Link
            href="/dashboard/admin"
            className="block bg-white p-6 rounded-xl shadow hover:shadow-lg text-center border border-blue-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Admin</h2>
            <p className="text-sm text-gray-600">Access admin tools and analytics. managment control</p>
          </Link>
        </motion.div>

        {/* Teacher */}
        <motion.div whileHover={{ scale: 1.05 }} className="transition">
          <Link
            href="/dashboard/teacher"
            className="block bg-white p-6 rounded-xl shadow hover:shadow-lg text-center border border-green-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-700">Teacher</h2>
            <p className="text-sm text-gray-600">View classes and student performance.</p>
          </Link>
        </motion.div>

        {/* Student */}
        <motion.div whileHover={{ scale: 1.05 }} className="transition">
          <Link
            href="/dashboard/student"
            className="block bg-white p-6 rounded-xl shadow hover:shadow-lg text-center border border-yellow-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">Student</h2>
            <p className="text-sm text-gray-600">Check your results and assignments.</p>
          </Link>
        </motion.div>

        {/* Parent */}
        <motion.div whileHover={{ scale: 1.05 }} className="transition">
          <Link
            href="/dashboard/parent"
            className="block bg-white p-6 rounded-xl shadow hover:shadow-lg text-center border border-purple-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Parent</h2>
            <p className="text-sm text-gray-600">Track your child’s academic progress.</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
