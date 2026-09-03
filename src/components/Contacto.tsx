import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type ContactFormInputs = {
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
};

function ContactForm() {
  const [submittedData, setSubmittedData] = useState<ContactFormInputs | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    setIsSubmitting(true);
    // Simular envío de datos
    setTimeout(() => {
      console.log("Formulario de Contacto Enviado:", data);
      setSubmittedData(data);
      setIsSubmitting(false);
      reset();
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="contact-card">
      <h3 className="contact-card-title">
        <span>✉️</span> Formulario de Contacto
      </h3>

      {submittedData ? (
        <div className="contact-success-alert">
          <h4 className="font-weight-bold mb-2">¡Mensaje Enviado con Éxito! 🎉</h4>
          <p className="mb-3">
            Estimado(a) <strong>{submittedData.nombre}</strong>, gracias por comunicarse con el
            Gobierno Autónomo Municipal de Pasorapa. Hemos recibido su consulta sobre{" "}
            <em>"{submittedData.asunto}"</em> y le responderemos al correo{" "}
            <strong>{submittedData.email}</strong> a la brevedad posible.
          </p>
          <button
            type="button"
            className="contact-submit-btn"
            onClick={handleReset}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
          <div className="row">
            {/* Nombre Completo */}
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo <span className="text-danger">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Ej. Juan Pérez"
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                {...register("nombre", {
                  required: "El nombre es obligatorio.",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres.",
                  },
                })}
              />
              {errors.nombre && (
                <div className="contact-field-error">
                  ⚠️ {errors.nombre.message}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "El correo electrónico es obligatorio.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Ingrese una dirección de correo válida.",
                  },
                })}
              />
              {errors.email && (
                <div className="contact-field-error">
                  ⚠️ {errors.email.message}
                </div>
              )}
            </div>
          </div>

          <div className="row">
            {/* Teléfono */}
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono / Celular (Opcional)
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="Ej. 73794170"
                className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                {...register("telefono", {
                  pattern: {
                    value: /^[0-9+\s-]{6,15}$/,
                    message: "Ingrese un número de teléfono válido.",
                  },
                })}
              />
              {errors.telefono && (
                <div className="contact-field-error">
                  ⚠️ {errors.telefono.message}
                </div>
              )}
            </div>

            {/* Asunto */}
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="asunto" className="form-label">
                Asunto / Categoría <span className="text-danger">*</span>
              </label>
              <select
                id="asunto"
                className={`form-select ${errors.asunto ? "is-invalid" : ""}`}
                {...register("asunto", {
                  required: "Seleccione un asunto para su mensaje.",
                })}
              >
                <option value="">-- Seleccionar Asunto --</option>
                <option value="Consulta General">Consulta General</option>
                <option value="Trámites y Solicitudes">Trámites y Solicitudes</option>
                <option value="Sugerencias">Sugerencia</option>
                <option value="Reclamos u Observaciones">Reclamo / Observación</option>
                <option value="Turismo e Información">Información Turística</option>
              </select>
              {errors.asunto && (
                <div className="contact-field-error">
                  ⚠️ {errors.asunto.message}
                </div>
              )}
            </div>
          </div>

          {/* Mensaje */}
          <div className="mb-4">
            <label htmlFor="mensaje" className="form-label">
              Mensaje o Consulta <span className="text-danger">*</span>
            </label>
            <textarea
              id="mensaje"
              rows={4}
              placeholder="Escriba aquí los detalles de su mensaje..."
              className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
              {...register("mensaje", {
                required: "El mensaje no puede estar vacío.",
                minLength: {
                  value: 10,
                  message: "El mensaje debe contener al menos 10 caracteres.",
                },
                maxLength: {
                  value: 500,
                  message: "El mensaje no puede exceder los 500 caracteres.",
                },
              })}
            />
            {errors.mensaje && (
              <div className="contact-field-error">
                ⚠️ {errors.mensaje.message}
              </div>
            )}
          </div>

          {/* Botón Submit */}
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="contact-submit-btn d-flex align-items-center justify-content-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <span>🚀</span> Enviar Mensaje
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

