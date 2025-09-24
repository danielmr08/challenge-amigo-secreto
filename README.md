Este es un juego web interactivo para sortear un amigo secreto entre un grupo de participantes. Permite a los usuarios añadir nombres, sortear de forma aleatoria y reiniciar el juego fácilmente.

Características
Añadir participantes: Los usuarios pueden ingresar nombres y agregarlos a la lista.
Detección de duplicados: Evita que se añadan nombres repetidos.
Sorteo aleatorio: La lógica del sorteo asegura que a cada persona se le asigne un amigo secreto diferente, evitando que alguien se regale a sí mismo.

Tecnologías Utilizadas
HTML: Para la estructura y el contenido de la página web.
CSS: Para el diseño visual, la tipografía y la disposición de los elementos.
JavaScript: Para la lógica del juego, la gestión de la lista de participantes y el sorteo.

¿Cómo Funciona?
La lógica principal se encuentra en el archivo app.js.
Añadir Nombres: Al hacer clic en "Añadir", la función agregarAmigo() toma el nombre del campo de entrada y lo añade a un arreglo de JavaScript.
Sorteo: El botón "Sortear Amigo" ejecuta la función sortearAmigo(). Esta función crea una copia del arreglo de participantes, la mezcla aleatoriamente y asigna a cada persona un amigo secreto de la lista mezclada. Si alguien se asigna a sí mismo, la función vuelve a sortear automáticamente.
Resultados: Los pares de amigos secretos se muestran en una lista en la interfaz del usuario.


