"use client"

import type React from "react"

import { useState } from "react"
import { Building2, MapPin, Calculator, Download, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

// Configuración de la API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

interface TasacionResult {
  estimado_min: number;
  estimado_prom: number;
  estimado_max: number;
  promedio_m2: number;
  comparables: Array<{
    titulo: string;
    direccion: string;
    precio: number;
    metros: number;
    precio_m2: number;
    ambientes: number;
    antiguedad: number;
  }>;
}

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<TasacionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    direccion: "",
    zona: "",
    tipo: "",
    ambientes: "",
    superficie: "",
    antiguedad: "",
    estado: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Convertir los valores numéricos
      const dataToSend = {
        ...formData,
        ambientes: parseInt(formData.ambientes),
        superficie: parseFloat(formData.superficie)
      }

      console.log('Enviando solicitud a:', `${API_URL}/tasar`)
      console.log('Datos a enviar:', dataToSend)

      const response = await fetch(`${API_URL}/tasar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error response:', errorData)
        throw new Error(errorData.detail || 'Error al procesar la solicitud')
      }

      const data = await response.json()
      console.log('Respuesta recibida:', data)
      setResult(data)
    } catch (error) {
      console.error('Error completo:', error)
      setError(error instanceof Error ? error.message : 'Error al procesar la solicitud')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(`${API_URL}/informe_tasacion.pdf`)
      if (!response.ok) throw new Error('Error al descargar el PDF')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'informe_tasacion.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error al descargar el PDF:', error)
      setError('Error al descargar el PDF')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">
              InmoBot - Tasación Inteligente
            </h1>
            <p className="text-lg text-indigo-700">
              Obtén una tasación precisa de tu propiedad en segundos
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    value={formData.direccion}
                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zona
                  </label>
                  <input
                    type="text"
                    value={formData.zona}
                    onChange={(e) => setFormData({ ...formData, zona: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Propiedad
                  </label>
                  <select
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Seleccione tipo</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Casa">Casa</option>
                    <option value="PH">PH</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ambientes
                  </label>
                  <input
                    type="number"
                    value={formData.ambientes}
                    onChange={(e) => setFormData({ ...formData, ambientes: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Superficie (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.superficie}
                    onChange={(e) => setFormData({ ...formData, superficie: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Antigüedad
                  </label>
                  <select
                    value={formData.antiguedad}
                    onChange={(e) => setFormData({ ...formData, antiguedad: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Seleccione antigüedad</option>
                    <option value="0-5">0-5 años</option>
                    <option value="5-10">5-10 años</option>
                    <option value="10-20">10-20 años</option>
                    <option value="20+">Más de 20 años</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <select
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  >
                    <option value="">Seleccione estado</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Muy Bueno">Muy Bueno</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Regular">Regular</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Calculando..." : "Tasar Propiedad"}
                </button>
              </div>
            </form>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {result && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Resultado de la Tasación
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">
                    Valores Estimados
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-medium">Mínimo:</span> USD{" "}
                      {result.estimado_min.toLocaleString()}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Promedio:</span> USD{" "}
                      {result.estimado_prom.toLocaleString()}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Máximo:</span> USD{" "}
                      {result.estimado_max.toLocaleString()}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Precio por m²:</span> USD{" "}
                      {result.promedio_m2.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">
                    Propiedades Comparables
                  </h3>
                  <div className="space-y-4">
                    {result.comparables.map((comp, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <p className="font-medium text-indigo-900">
                          {comp.titulo}
                        </p>
                        <p className="text-sm text-gray-600">{comp.direccion}</p>
                        <p className="text-sm text-gray-600">
                          {comp.ambientes} ambientes • {comp.metros}m²
                        </p>
                        <p className="text-sm font-medium text-indigo-700">
                          USD {comp.precio.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleDownloadPDF}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                >
                  Descargar Informe PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
