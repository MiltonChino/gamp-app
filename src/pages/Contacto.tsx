// import Register from "./../components/Register";
import Info from "./../components/Info.tsx";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  Nombre: string;
  Email: string;
  Mensaje: string
};

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("Nombre")); // watch input value by passing the name of it

  return (
    <>
      <div className="container">
      <div className="row">
      <div className="col-sm">
      <Info />
      </div>
      <div className="col-sm">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6331358485987!2d-64.67815283842779!3d-18.321734068564698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fa93ab5e878be3%3A0xbd6cd890cc11fb5c!2sGovierno%20Aut%C3%B3nomo%20Municipal%20de%20Pasorapa!5e0!3m2!1ses!2sbo!4v1690567689967!5m2!1ses!2sbo" width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
        </div>
      </div>
      </div>
      
      </div>    
      <div className="container">
      <h4>Formulario de Contacto</h4>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
      <div className="form-group row">
        {/* register your input into the hook by invoking the "register" function */}
        {/* <label className="form-label">Nombre</label> */}
        <input type="text" placeholder="Nombre" {...register("Nombre" , { required: true })} className="form-control" />
      </div>
      <div className="form-group row">
        {/* include validation with required or other standard HTML validation rules */}
        {/* <label className="form-label">Email</label> */}
        <input type="text" placeholder="Email" className="form-control" {...register("Email", { required: true })} />
      </div>
      <div className="form-group row">
        <label className="form-label">Mensaje</label>
      <textarea {...register("Mensaje", {required: true, maxLength: 300})} />
      </div>
        {/* errors will return when field validation fails  */}
        {errors.Email && <span>Este es un mensaje de error para Email</span>}

        <input type="submit" className="btn btn-primary" />
      </div>
      </form>
      {/* <Register /> */}
    </>
  );
}

export default Contact;
