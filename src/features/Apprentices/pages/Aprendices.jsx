import GenericTable from "../../../shared/components/Table";

const aprendices = [
  { id: 1, nombre: "Carlos", apellido: "Pérez", documento: "1023456789", tipoDocumento: "CC", ficha: [2889927], nivel: 1, estado: "En formación" },
  { id: 2, nombre: "Ana", apellido: "Gómez", documento: "1029876543", tipoDocumento: "PPT", ficha: [2996778], nivel: 2, estado: "Condicionado" },
  { id: 3, nombre: "Luis", apellido: "Martínez", documento: "1034567890", tipoDocumento: "PEP", ficha: [2889927, 2996778], nivel: 3, estado: "En formación" },
];

const columns = [
  { key: "nombre", label: "Nombre" },
  { key: "apellido", label: "Apellido" },
  { key: "documento", label: "Documento" },
  { key: "tipoDocumento", label: "Tipo Documento" },
  { key: "ficha", label: "Ficha", render: (item) => item.ficha.join(", ") },
  { key: "nivel", label: "Nivel Actual" },
  { 
    key: "estado", 
    label: "Estado", 
    render: (item) => (
      <span className={`generic-table-status ${item.estado === "En formación" ? "formacion" : "condicionado"}`}>
        {item.estado}
      </span>
    )
  },
];

const Apprentices = () => {
  const handleShowApprentice = (apprentice) => {
    console.log("Detalle del Aprendiz:", apprentice);
  };

  return (
    <GenericTable
      data={aprendices}
      columns={columns}
      onShow={handleShowApprentice}
      title="LISTA DE APRENDICES"
      showActions={{ show: true }}
    />
  );
};

export default Apprentices;
