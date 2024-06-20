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
    <div>
      <h1 className="container text-2xl mx-auto mt-4">Formulario de Medico</h1>
      <form 
          onSubmit={ handleSubmit(onRegisterUsuario)}  noValidate
          className="flex flex-row flex-wrap"    
      >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div> 
      <Link  color="foreground" passHref  href="/public/auth/register" >
       <Button type="submit" color="primary" className="container mx-auto mt-7">Enviar</Button>
      </Link>
      </div>
      </form>
    </div>
  )
}

export default RegisterPage;