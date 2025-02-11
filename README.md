# NodeJs

Buen día!

Para que el proyecto funcione de manera correcta solo falta instalar las dependencias con "npm install".

Tener una base de datos vacia con el nombre "prueba_tecnica_gptx"

Si no tienes el archivo .env crearlo

Dentro del archivo .env ingresar esto:
PORT=5000

DB_NAME=prueba_tecnica_gptx
DB_USER=root
DB_PASS=
DB_HOST=localhost
DB_DIALECT=mysql

Gracias!


Preguntas Técnicas - GPTX

1- Está recibiendo dos flujos de datos de dos sensores de temperatura (2
observables que devuelven números enteros), ¿qué operador de RxJS utilizaría
para recibir estos dos datos en la misma suscripción?:

R:
El Angular podríamos usar combineLatest o forkJoin.
Con forkJoin se realizará las peticiones una sola vez y con combineLatest se podrá repetir varias veces, se debe recibir, aunque sea solo una vez un fujo de datos de un sensor de temperatura para que pueda solicitar dichos datos otra vez.

En React podríamos usar la librería RxJs e importar combineLatest dentro de un UseEffect (equivalente a un observable del cual podríamos de suscribirnos con un return () => ) y manejando el estado (valor) con un UseState.

2- Si tiene dos llamadas al servidor y la segunda llamada depende de la primera, ¿cómo manejaría con RxJS esta secuencia de llamadas?

R:
En Angular podemos usar switchMap, primero creamos 3 métodos que usaremos para obtener información de un usuario (GetUser, GetUserProfile y getUserWithProfile), los primeros 2 métodos usan un observable normal para realizar una petición a una api, el último método (getUserWithProfile) es donde se usará switchMap donde ejecutará el primer método (GetUser) para dentro de la ejecución encadenaremos las segunda llamada (GetUserProfile).

En React usamos la librería rxjs para simular el ejemplo de Angular.
Creamos 3 métodos (GetUser, GetUserProfile y getUserWithProfile) en un archivo externo para mayor legibilidad y simulando un servicio y en el componente donde realizaremos las peticiones usaremos un useEffect donde nos suscribiremos al último método creado en el archivo externo (getUserWithProfile) para obtener sus valores en un useState, del cual al final con un return () => proseguiremos a de suscribirnos.

3. Tengo en un servidor un archivo de texto que está en minúscula y ocupa 2GB en el disco duro, pero le solicitan que todo el archivo debe ser pasado a mayúsculas, ¿cómo lo haría?

R:
Si el archivo está en un servidor NodeJs podemos usar los siguientes métodos:
Métodos NodeJs:
•	fs.createReadStream – Para lectura del archivo por partes
•	fs.createWriteStream – Convertir las minúsculas a mayúsculas
•	fs.createWriteStream(*).end(); - Termina la conversión y lectura del archivo.
Métodos RxJs:
•	from – Para convertir la lectura de archivos (createReadStream) en un observable
•	mergeMap – Transforma las minúsculas a mayúsculas
	
4. Tiene un arreglo de strings los cuales deben ser filtrados por su longitud mayor a dos y a la vez convertidos a un array de enteros con la longitud de cada string, ¿cómo lo haría? Ejemplo de entrada y salida: [“hola”, “mundo”, “es”, “una”, “prueba”] => [4, 5, 3, 6]

R:
1.	Recorremos el arreglo con un filter.
2.	Condicionamos si la longitud de la palabra es mayor a 2 (word.length > 2)
3.	Concatenamos el método map para rescribir el arreglo anterior donde retornaremos la longitud de la palabra (word.length)

5. Tiene un arreglo de números, los cuales pueden ser o no repetidos, ¿cómo eliminaría los repetidos? ¿Cómo los ordenaría en forma ascendente? Ejemplo de entrada y salida: [1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10]

R:
1.	Creamos una función donde recibirá como parámetro el arreglo a convertir.
2.	Dentro del método retornaremos un arreglo donde concatenaremos una instancia del objeto Set para eliminar los números duplicados ([… new Set(array)])
3.	Concatenamos el método sort para ordenar los números de forma ascendente (.sort((a, b) => a - b)

return [...new Set(arr)].sort((a, b) => a - b);
