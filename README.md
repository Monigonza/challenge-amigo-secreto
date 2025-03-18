![Imagen representativa del Challenge](https://github.com/Monigonza/challenge-amigo-secreto/blob/main/assets/amigo-secreto.png)

# Challenge Amigo Secreto
Aplicación práctica del conocimiento __"Lógica de Programación con JavaScript"__

  -  Utiliza variables en el desarrollo del software
  -  Muestra mensajes en pantalla de forma interactiva
  -  Crea funciones y JavaScript para manipular elementos en la pantalla
  -  Utiliza ChatGPT para optimizar la calidad de los resultados
  -  Git y GitHub: repositorio, commit y versiones


# Desafío
Dados los archivos index.html, style.css y la carpeta assets con imágenes png ---> __desarrollar el archivo app.js__


## Funcionalidades del proyecto
Principalmente, la funcionalidad utilizada es por declaración 

__Ejemplo de Función por declaración:__
```
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
}
```
## Acceso al proyecto
- GitHub
Para ver el repositorio del proyecto en GitHub, accedes a través de este link: https://github.com/Monigonza/challenge-      amigo-secreto. De esta manera, puedes revisar los archivos y las modificaciones realizadas

- CodeSandbox
Para ver la ejecución del proyecto directamente, puedes copiar este link en tu navegador: https://codesandbox.io/p/devbox/stoic-lumiere-96mcgf?workspaceId=ws_DCZKYMtV21iDgydPwF67o6
Te mostrará en la mitad izquierda de la pantalla, los archivos del proyecto y el despliegue del archivo README. En la mitad derecha de la pantalla, podrás ejecutar la aplicación que es bastante intuitiva. De otro modo, buscas en el README como ejecutarla. Mira la siguiente imagen:

![codesandbox](https://github.com/user-attachments/assets/91630495-93e6-407f-8fc2-19f6878aa342)

- Visual Studio Code
Desde el primer link, descargas y clonas el proyecto en vscode. Puedes revisar el código de los archivos modificados y ejecutar la aplicación con el index.html seleccionando abrir con Live Server 


## Ejecutar el proyecto
La idea general es ingresar nombres de tus amigos para un sorteo en que saldrá seleccionado tu Amigo Secreto.

-  Ingresas nombres, si eventualmente tienes amigos con el mismo nombre de pila agregas la primera letra de su apellido para diferenciarlos
-  Los nombres se irán mostrando en la pantalla, una vez hayas ingresado a todos tus amigos que deseas que participen en este sorteo, presionas el botón __Sortear Amigo__
-  En pantalla aparecerá el nombre de tu Amigo Secreto
-  Se implementó una nueva funcionalidad __Reiniciar Sorteo__ pensando si quieres compartir el proyecto o quieres sortear otro amigo diferente al seleccionado

## Restricciones de la aplicación

-  Puede sortear el Amigo Secreto con el ingreso de __un sólo nombre__
-  No tiene un cierre de sesión
  







