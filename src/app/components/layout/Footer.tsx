
const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-8 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Digital showcase App. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer