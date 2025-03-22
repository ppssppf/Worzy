"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"
import NavSubItem from "./NavSubItem"
import logo from "../../../public/logo.png"
import {
  ChevronDown,
  LayoutDashboard,
  GraduationCap,
  Calendar,
  BookOpen,
  Users,
  Settings,
  FileText,
  User,
  Award,
  Star,
  List,
  TrendingUp,
  MessageSquare,
  Shield,
} from "lucide-react"

const Navbar = () => {
  const navigate = useNavigate()
  const [openSections, setOpenSections] = useState({
    formacion: false,
    programacion: false,
    progreso: false,
    configuracion: false,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="h-screen w-56 bg-[#1f384c] text-white flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-4 flex items-center shrink-0">
        <img src={logo || "/placeholder.svg"} alt="Wordzy Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">WORDZY</h1>
      </div>

      {/* Menú */}
      <div className="mt-4 text-sm flex-1 overflow-y-auto">
        <p className="px-4 py-2 text-[#c8cbd9] text-xs">MENÚ</p>

        <NavItem icon={<LayoutDashboard size={18} />} text="Dashboard" onClick={() => handleNavigation("/dashboard")} />

        {/* Formación */}
        <div>
          <NavItem
            icon={<GraduationCap size={18} />}
            text="Formación"
            hasSubmenu={true}
            isOpen={openSections.formacion}
            onClick={() => toggleSection("formacion")}
            chevron={
              <ChevronDown size={16} className={`transition-transform ${openSections.formacion ? "rotate-180" : ""}`} />
            }
          />

          {openSections.formacion && (
            <div className="ml-4 border-l border-[#707fdd] pl-4">
              <NavSubItem
                icon={<FileText size={16} />}
                text="Programas"
                onClick={() => handleNavigation("/formacion/programas")}
              />
              <NavSubItem
                icon={<List size={16} />}
                text="Fichas"
                onClick={() => handleNavigation("/formacion/fichas")}
              />
              <NavSubItem
                icon={<Users size={16} />}
                text="Instructores"
                onClick={() => handleNavigation("/formacion/instructores")}
              />
              <NavSubItem
                icon={<User size={16} />}
                text="Aprendices"
                onClick={() => handleNavigation("/formacion/aprendices")}
              />
            </div>
          )}
        </div>

        {/* Programación */}
        <div>
          <NavItem
            icon={<Calendar size={18} />}
            text="Programación"
            hasSubmenu={true}
            isOpen={openSections.programacion}
            onClick={() => toggleSection("programacion")}
            chevron={
              <ChevronDown
                size={16}
                className={`transition-transform ${openSections.programacion ? "rotate-180" : ""}`}
              />
            }
          />

          {openSections.programacion && (
            <div className="ml-4 border-l border-[#707fdd] pl-4">
              <NavSubItem
                icon={<BookOpen size={16} />}
                text="Temas"
                onClick={() => handleNavigation("/programacion/temas")}
              />
              <NavSubItem
                icon={<FileText size={16} />}
                text="Materiales de Apoyo"
                onClick={() => handleNavigation("/programacion/materiales")}
              />
              <NavSubItem
                icon={<FileText size={16} />}
                text="Evaluaciones"
                onClick={() => handleNavigation("/programacion/evaluaciones")}
              />
              <NavSubItem
                icon={<Calendar size={16} />}
                text="Programación de Cursos"
                onClick={() => handleNavigation("/programacion/cursos")}
              />
              <NavSubItem
                icon={<Star size={16} />}
                text="Escala de valoración"
                onClick={() => handleNavigation("/programacion/escala")}
              />
              <NavSubItem
                icon={<Award size={16} />}
                text="Insigneas"
                onClick={() => handleNavigation("/programacion/insigneas")}
              />
            </div>
          )}
        </div>

        {/* Progreso */}
        <div>
          <NavItem
            icon={<BookOpen size={18} />}
            text="Progreso"
            hasSubmenu={true}
            isOpen={openSections.progreso}
            onClick={() => toggleSection("progreso")}
            chevron={
              <ChevronDown size={16} className={`transition-transform ${openSections.progreso ? "rotate-180" : ""}`} />
            }
          />

          {openSections.progreso && (
            <div className="ml-4 border-l border-[#707fdd] pl-4">
              <NavSubItem
                icon={<List size={16} />}
                text="Cursos Programados"
                onClick={() => handleNavigation("/progreso/cursos")}
              />
              <NavSubItem
                icon={<TrendingUp size={16} />}
                text="Ranking"
                onClick={() => handleNavigation("/progreso/ranking")}
              />
              <NavSubItem
                icon={<MessageSquare size={16} />}
                text="Retroalimentación"
                onClick={() => handleNavigation("/progreso/retroalimentacion")}
              />
            </div>
          )}
        </div>

        <NavItem icon={<Users size={18} />} text="Usuarios" onClick={() => handleNavigation("/usuarios")} />

        {/* Configuración */}
        <div>
          <NavItem
            icon={<Settings size={18} />}
            text="Configuración"
            hasSubmenu={true}
            isOpen={openSections.configuracion}
            onClick={() => toggleSection("configuracion")}
            chevron={
              <ChevronDown
                size={16}
                className={`transition-transform ${openSections.configuracion ? "rotate-180" : ""}`}
              />
            }
          />

          {openSections.configuracion && (
            <div className="ml-4 border-l border-[#707fdd] pl-4">
              <NavSubItem
                icon={<Shield size={16} />}
                text="Roles"
                onClick={() => handleNavigation("/configuracion/roles")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

