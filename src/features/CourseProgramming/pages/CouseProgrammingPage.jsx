import GenericTable from "../../../shared/components/Table";

const programaciones = [
  { id: 1, nombre: "Programa 1", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
  { id: 2, nombre: "Programa 2", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
  { id: 3, nombre: "Programa 3", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
  { id: 4, nombre: "Programa 4", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
  { id: 5, nombre: "Programa 5", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
  { id: 6, nombre: "Programa 6", fechaInicio: "01-01-2023", fechaFin: "01-01-2024", estado: "Activo" },
]

const columns = [
  { key: "id", label: "Id" },
  { key: "nombre", label: "Nombre" },
  { key: "fechaInicio", label: "Fecha Inicio" },
  { key: "fechaFin", label: "Fecha Fin" },
  {
      key: "estado", label: "Estado", render: (item) => (
          <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
              {item.estado}
          </span>
      )
  },
]

const CouseProgrammingPage = () => {
  const handleAddProgramming = () => {
      console.log("Añadir Programación")
  }

  const handleShowProgramming = (programming) => {
      console.log("Detalle de la Programación:", programming)
  }

  const handleEditProgramming = (programming) => {
      console.log("Editar Programación:", programming)
  }

  const handleDeleteProgramming = (id) => {
      console.log("Eliminar Programación con ID:", id)
  }

  return (
      <GenericTable
          data={programaciones}
          columns={columns}
          onAdd={handleAddProgramming}
          onShow={handleShowProgramming}
          onEdit={handleEditProgramming}
          onDelete={handleDeleteProgramming}
          title="PROGRAMACIÓN DE LOS CURSOS"
          showActions={{ show: true, edit: true, delete: true }}
      />
  )
}

export default CouseProgrammingPage