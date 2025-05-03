import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email || !name) {
      return NextResponse.json({ error: "Email y nombre son campos requeridos" }, { status: 400 })
    }

    // En un entorno real, aquí guardaríamos en una base de datos
    // Para este MVP, simplemente registramos en la consola
    console.log("Nuevo registro de interés:", { email, name, date: new Date().toISOString() })

    // Simular un retraso para mostrar el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al procesar el registro de interés:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
