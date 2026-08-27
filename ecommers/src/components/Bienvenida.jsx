import Asistentes from "./Asistentes";
import { Titulos } from "./Titulos";

const Bienvenida = () => {

  const asistentes = [
    {nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "💻"},
    {nombre: "Ana Gómez",tarea: "Diseñadora UX/UI",emoji: "🎨"},
    {nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "🛠️"}
  ];

  return (
    <div>
        <Titulos>
            <h1>Personas y Trabajos</h1>
        </Titulos>
      <Asistentes personas={asistentes} />
    </div>
  );
};

export default Bienvenida;