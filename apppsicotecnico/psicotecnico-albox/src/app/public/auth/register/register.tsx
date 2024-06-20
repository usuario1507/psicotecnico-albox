import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";


interface IRespuestaRegister {
  correo_electronico: string;
  contraseña: string;
  username: string;
}
type UsuarioData = {
  correo_electronico: string;
  contraseña: string;
  username: string;
};
const RegisterPage = () => {
  const router = useRouter();
  const { registerUsuario } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<UsuarioData>();
  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const onRegisterUsuario = async (InputData: UsuarioData) => {
    setShowError(false);
    const { correo_electronico, contraseña, username } = InputData;
    const {hasError, message } = await registerUsuario(correo_electronico, contraseña, username)
    console.log(message);
    if (hasError){
      setShowError(true);
      setErrorMessage(message || '');
      setTimeout( () => setShowError(false), 3001)
      return;
    }

    router.replace('/');
  }

  return (
  <div className="register-page">
  <h1>Registro</h1>
  {showError && <p className="error-message">{errorMessage}</p>}
  <form onSubmit={handleSubmit(onRegisterUsuario)}>
    <div className="form-group">
      <label htmlFor="correo_electronico">Correo Electrónico</label>
      <Input
        id="correo_electronico"
        type="email"
        {...register("correo_electronico", {
          required: "El correo electrónico es obligatorio",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Formato de correo electrónico inválido"
          }
        })}
      />
      {errors.correo_electronico && <p className="error-message">{errors.correo_electronico.message}</p>}
    </div>
    
    <div className="form-group">
      <label htmlFor="username">Nombre de Usuario</label>
      <Input
        id="username"
        type="text"
        {...register("username", {
          required: "El nombre de usuario es obligatorio",
          minLength: {
            value: 4,
            message: "El nombre de usuario debe tener al menos 4 caracteres"
          }
        })}
      />
      {errors.username && <p className="error-message">{errors.username.message}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="contraseña">Contraseña</label>
      <Input
        id="contraseña"
        type="password"
        {...register("contraseña", {
          required: "La contraseña es obligatoria",
          minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres"
          }
        })}
      />
      {errors.contraseña && <p className="error-message">{errors.contraseña.message}</p>}
    </div>

    <Button type="submit">Registrar</Button>
  </form>
  <p>¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link></p>
</div>
);
};

export default RegisterPage;