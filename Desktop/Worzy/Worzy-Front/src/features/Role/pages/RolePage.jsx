import GenericTable from "../../../shared/components/Table";
 
const roles = [
  { id: 1, nombre: "Administrador", descripcion: "Administrador del sistema", fechaCreacion: "2023-01-01", estado: "Activo" },
  { id: 2, nombre: "Instructor", descripcion: "Usuario con acceso parcial", fechaCreacion: "2023-01-02", estado: "Inactivo" },
  { id: 3, nombre: "Aprendiz", descripcion: "Usuario con acceso limitado", fechaCreacion: "2023-01-03", estado: "Activo" },
]

const columns = [
  { key: "id", label: "Id" },
  { key: "nombre", label: "Nombre" },
  { key: "descripcion", label: "Descripción" },
  { key: "fechaCreacion", label: "Fecha de creación" },
  {
    key: "estado", label: "Estado", render: (item) => (
      <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
        {item.estado}
      </span>
    )
  },
]

const RolesPage = () => {
  const handleAddRole = () => {
    console.log("Añadir Rol")
  }

  const handleEditRole = (role) => {
    console.log("Editar Rol:", role)
  }

  const handleDeleteRole = (id) => {
    console.log("Eliminar Rol con ID:", id)
  }

  return (
    <GenericTable
      data={roles}
      columns={columns}
      onAdd={handleAddRole}
      onEdit={handleEditRole}
      onDelete={handleDeleteRole}
      title="GESTIÓN DE ROLES"
    />
  )
}

export default RolesPage