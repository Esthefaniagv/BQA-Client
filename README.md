# Burger Queen Api Client

## Índice
* [1. Descripción del Proyecto](#1-descripcion-del-proyecto)
* [2. Demo Prototipo Alta Fidelidad](#2-demo-prototipo-alta-fidelidad)
* [3. Visualización de Interfaz](#3-visualizacion-de-interfaz)
* [4. Historias de Usuario](#4-historias-de-usuarios)
* [5. Desarrolladoras](#5-desarrolladoras)

## 1. Descripción del Proyecto
Este proyecto está pensado en un pequeño restaurante de hamburguesas, que está creciendo y necesita un sistema a través del cual puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente. La clienta solicita que exista 3 roles y que cada uno de ellos cuente con permisos exclusivos y funcionalidades definidas. Es decir:

- Rol Administrador: Tiene acceso a todo y cuenta con 2 funcionalidades principales. La primera es ver, modificar o eliminar productos con el objetivo de que se encuentre siempre actualizado al momento de atender a cliente. La segunda, es ver, modificar o eliminar cuentas de trabajadores junto con un rol asignado. 

- Rol Mesero: Tiene acceso a crear las órdenes de los clientes y enviarlas al chef. Además de un apartado para ver los pedidos listos de cocina junto con el detalle de tiempos y cambiar status una vez estén entregados. 

- Rol Chef: Tiene acceso a ver los pedidos que estén pendientes de hacer, junto con el detalle del pedido y fecha de inicio para calcular los tiempos. Una vez que ya se encuentra listo, puede cambiar el status y así dar aviso al mesero. 

Para que se cumpla lo anterior, se crea una interfaz que se integra con una API en formato tablet responsive.  

## 2. Demo Prototipo Alta Fidelidad

## 3. Visualización de Interfaz

## 4. Historias de Usuarios

Se crearon 6 historias de usuario con el objetivo de armar un proyecto en etapas y contar con una mejor comprensión durante la planificación de sprints. 

####Estas son: 

##### Historia de Usuario 1: Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

- ***Yo como meserx quiero poder ingresar al sistema de pedidos.***
 
 [x] **Criterios de Aceptación:**
* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Historia de Usuario 2: Mesero/a debe poder tomar pedido de cliente/a

***Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.***
[x] **Criterios de Aceptación:**
* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una tablet

##### Historia de Usuario 3: Jefe de cocina debe ver los pedidos

***Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un clientx.***

[x] **Criterios de Aceptación:**
* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.

##### Historia de Usuario 4: Meserx debe ver pedidos listos para servir

***Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a lxs clientxs que las hicieron.***

[x] **Criterios de Aceptación:**
* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Historia de Usuario 5: Administrador(a) de tienda debe administrar a sus trabajadorxs

***Yo como administrador(a) de tienda quiero gestionar a los usuarios de la plataforma para mantener actualizado la informacion de mis trabajadorxs.***

[x] **Criterios de Aceptación:**
* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Historia de Usuario 6: Administrador(a) de tienda debe administrar a sus productos

***Yo como administrador(a) de tienda quiero gestionar los productos para mantener actualizado el menú.***

[x] **Criterios de Aceptación:**
* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.



## 5. Desarrolladoras

La creación de la aplicación Burger Queen fue desarrollada por las siguientes Front-End Developers:

- **Esthefania Gonzalez**
  - [GitHub](https://github.com/Esthefaniagv)

- **Ignacia Silva**
  - [GitHub](https://github.com/NachaSilva)
