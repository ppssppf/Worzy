import GenericTable from "../../../shared/components/Table";

const instructorsData = [
  { id: 1, nombre: "Carlos", apellido: "Gómez", documento: "12345678", tipoDocumento: "CC", estado: "Activo" },
  { id: 2, nombre: "Laura", apellido: "Martínez", documento: "87654321", tipoDocumento: "PPT", estado: "Inactivo" },
  { id: 3, nombre: "Juan", apellido: "Pérez", documento: "11223344", tipoDocumento: "PEP", estado: "Activo" },
  { id: 4, nombre: "Ana", apellido: "López", documento: "55667788", tipoDocumento: "CC", estado: "Activo" },
  { id: 5, nombre: "Sofía", apellido: "Ramírez", documento: "99887766", tipoDocumento: "PPT", estado: "Inactivo" }
];

const columns = [
  { key: "nombre", label: "Nombre" },
  { key: "apellido", label: "Apellido" },
  { key: "documento", label: "Documento" },
  { key: "tipoDocumento", label: "Tipo Documento" },
  {
    key: "estado", label: "Estado", render: (item) => (
      <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
        {item.estado}
      </span>
    )
  }
];

const InstructorsPage = () => {
  const handleShowInstructor = (instructor) => {
    console.log("Detalle del Instructor:", instructor);
  };

  return (
    <GenericTable
      data={instructorsData}
      columns={columns}
      onShow={handleShowInstructor}
      title="LISTA DE INSTRUCTORES"
      showActions={{ show: true, edit: false, delete: false }}
    />
  );
};

export default InstructorsPage;
