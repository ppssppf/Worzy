import GenericTable from "../../../shared/components/Table";

const temas = [
  { id: 1, nombre: "Verbo to be", estado: "Activo" },
  { id: 2, nombre: "Artículos", estado: "Inactivo" },
  { id: 3, nombre: "Presente simple", estado: "Activo" },
]

const columns = [
  { key: "id", label: "Id" },
  { key: "nombre", label: "Nombre" },
  {
    key: "estado", label: "Estado", render: (item) => (
      <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
        {item.estado}
      </span>
    )
  },
]

const TopicsPage = () => {
  const handleAddTopic = () => {
    console.log("Añadir Tema")
  }

  const handleEditTopic = (topic) => {
    console.log("Editar Tema:", topic)
  }

  const handleDeleteTopic = (id) => {
    console.log("Eliminar Tema con ID:", id)
  }

  return (
    <GenericTable
      data={temas}
      columns={columns}
      onAdd={handleAddTopic}
      onEdit={handleEditTopic}
      onDelete={handleDeleteTopic}
      title="GESTIÓN DE TEMAS"
    />
  )
}

export default TopicsPage