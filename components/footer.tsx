export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {currentYear} Punleu TY. All rights reserved.</p>
      </div>
    </footer>
  )
}
