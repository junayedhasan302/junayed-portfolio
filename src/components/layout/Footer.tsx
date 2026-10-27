
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0f] px-6 py-7 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Junayed Hasan. All rights reserved.
      </p>

      <p className="mt-2">
        Designed and built with Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
