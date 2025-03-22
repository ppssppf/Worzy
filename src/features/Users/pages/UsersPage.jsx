import GenericTable from "../../../shared/components/Table";

const users = [
  { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", estado: "Activo", rol: "Admin" },
  { id: 2, nombre: "María Gómez", correo: "maria@example.com", estado: "Inactivo", rol: "Usuario" },
  { id: 3, nombre: "Carlos López", correo: "carlos@example.com", estado: "Activo", rol: "Moderador" },
  { id: 4, nombre: "Ana Ramírez", correo: "ana@example.com", estado: "Activo", rol: "Usuario" },
  { id: 5, nombre: "Pedro Martínez", correo: "pedro@example.com", estado: "Inactivo", rol: "Admin" },
];

const columns = [
  { key: "nombre", label: "Nombre" },
  { key: "correo", label: "Correo" },
  {
    key: "estado",
    label: "Estado",
    render: (item) => (
      <span className={`generic-table-status ${item.estado === "Activo" ? "activo" : "inactivo"}`}>
        {item.estado}
      </span>
    ),
  },
  { key: "rol", label: "Rol" },
];

const UsersPage = () => {
  const handleShowUser = (user) => {
    console.log("Detalle del Usuario:", user);
  };

  return (
    <GenericTable
      data={users}
      columns={columns}
      onShow={handleShowUser}
      title="LISTA DE USUARIOS"
      showActions={{ show: true, edit: false, delete: false }}
    />
  );
};

export default UsersPage;
