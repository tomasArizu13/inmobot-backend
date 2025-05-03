"use server"

import { z } from "zod"

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Email inválido"),
  reason: z.string().optional(),
})

type FormState = {
  success: boolean
  message: string
}

export async function submitWaitlistForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    reason: formData.get("reason"),
  })

  // If validation fails, return error
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Por favor, verifica los datos ingresados.",
    }
  }

  try {
    // In a real application, you would save this data to a database
    // or send it to an email service like Mailchimp

    // For demonstration, we'll just log the data and simulate a delay
    console.log("Form submission:", validatedFields.data)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Return success
    return {
      success: true,
      message: "¡Gracias por unirte a nuestra lista de espera!",
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.",
    }
  }
}
