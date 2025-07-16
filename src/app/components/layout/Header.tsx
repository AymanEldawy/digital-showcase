import Logo from "../ui/Logo"
import NotifyOffer from "../ui/NotifyOffer"
import LeftMenu from "./LeftMenu"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      {/* logo */}
      <Logo />
      {/* offer/ads */}
      <NotifyOffer />
      {/* side menu */}
      <LeftMenu />
    </header>
  )
}

export default Header