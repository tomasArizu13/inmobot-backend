"use server"

interface InterestFormData {
  email: string
  name: string
}

export async function submitInterestForm(data: InterestFormData) {
  // Validar datos
  if (!data.email || !data.name) {
    throw new Error("Email y nombre son requeridos")
  }

  // En un entorno real, aquí conectaríamos con una base de datos
  // Para este MVP, guardaremos en un archivo JSON
  try {
    // Crear un objeto con los datos y la fecha
    const formEntry = {
      email: data.email,
      name: data.name,
      date: new Date().toISOString(),
    }

    // Simular un retraso para mostrar el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En un entorno real, aquí guardaríamos en una base de datos
    console.log("Datos de interés recibidos:", formEntry)

    // Devolver éxito
    return { success: true }
  } catch (error) {
    console.error("Error al guardar datos de interés:", error)
    throw new Error("Error al procesar el formulario")
  }
}
