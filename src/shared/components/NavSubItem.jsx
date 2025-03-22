"use client"

const NavSubItem = ({ icon, text, onClick }) => {
  return (
    <div className="flex items-center px-2 py-2 cursor-pointer hover:text-[#707fdd]" onClick={onClick}>
      <span className="mr-3 text-[#d6dade]">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default NavSubItem

