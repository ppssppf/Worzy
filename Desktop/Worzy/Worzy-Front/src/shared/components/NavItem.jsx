"use client"

const NavItem = ({ icon, text, onClick, hasSubmenu = false, isOpen = false, chevron = null }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#2a4a61] font-['Poppins'] font-medium ${isOpen ? "bg-[#2a4a61]" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="mr-3 text-[#d6dade]">{icon}</span>
        <span>{text}</span>
      </div>
      {hasSubmenu && chevron}
    </div>
  )
}

export default NavItem

