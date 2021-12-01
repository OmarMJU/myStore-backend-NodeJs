# My Store :department_store:

Aplicación Backend con [NodeJs](https://nodejs.org/es/) para la simulación de una tienda online.

## Desarrollo :hammer:

Para ejecutar la aplicación en desarrollo con [nodemon](https://nodemon.io/)

```
$ npm run dev
```

Para realizar las peticiones se pueden realizar con [Postman](https://www.postman.com/) :rocket: o con [Insomnia](https://insomnia.rest/) :crescent_moon:

La apicación corre por defecto en el **puerto 3000**.

## Funcionalidad :fire:

Se puede interactuar con lo siguiente:

* Usuarios :family:
* Productos :ring:
* Categorias :file_folder:

### Usuarios :family:

#### Consulta de todos usuarios

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/users/
```

#### Consulta de un usuario por id

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/users/242240a7-4d1b-431d-aa7f-f1c46dc87380
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Creación de un usuario

Verbo `HTTP`: `POST`.

```
http://localhost:3000/api/v1/users/
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "Name Lastname",
    "gender": "Male",
    "email": "any_email@mail.com",
    "isBlock": false
}
```

> **Nota:** Todos los campos son requeridos.

#### Actualización de un usuario

Verbo `HTTP`: `PATCH`.

```
http://localhost:3000/api/v1/users/242240a7-4d1b-431d-aa7f-f1c46dc87380
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "New Name Lastname",
    "gender": "New gender",
    "email": "new_email@mail.com",
    "isBlock": false
}
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Eliminar un usuario

Verbo `HTTP`: `DELETE`.

```
http://localhost:3000/api/v1/users/242240a7-4d1b-431d-aa7f-f1c46dc87380
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

### Productos :ring:

#### Consulta de todos los productos

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/products
```

#### Consulta de un producto por id

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/products/d062f696-fc13-4991-9814-bd3ccf9a4880
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Creación de un producto

Verbo `HTTP`: `POST`.

```
http://localhost:3000/api/v1/products
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "Super Sonic Gun",
    "price": 20,
    "image": "http://placeimg.com/640/480"
}
```

> **Nota:** Todos los campos son requeridos.

#### Actualización de un producto

Verbo `HTTP`: `PATCH`.

```
http://localhost:3000/api/v1/products/f509f061-a3d8-415b-a516-fe8a94fa8c32
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "Super Sonic Gun Toy for Childrens",
    "price": 20,
    "image": "http://placeimg.com/640/480"
}
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Eliminar un producto

Verbo `HTTP`: `DELETE`.

```
http://localhost:3000/api/v1/products/a4c919a4-db17-488c-8879-2cacb597afef
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

### Categorias :file_folder:

#### Consulta de todas los categorias

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/categories/
```

#### Consulta de una categoria por id

Verbo `HTTP`: `GET`.

```
http://localhost:3000/api/v1/categories/6fb39399-7f3d-4fb7-81b4-6cc19437b3f9
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Creación de una categoria

Verbo `HTTP`: `POST`.

```
http://localhost:3000/api/v1/categories/
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "Hogar"
}
```

> **Nota:** Solo el campo `name` es requerido.

#### Actualización de una categoria

Verbo `HTTP`: `PATCH`.

```
http://localhost:3000/api/v1/categories/6fb39399-7f3d-4fb7-81b4-6cc19437b3f9
```

Ejemplo de datos a enviar en el `body` del `request`.

```json
{
    "name": "Hogar",
    "items": 12
}
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

#### Eliminar una categoria

Verbo `HTTP`: `DELETE`.

```
http://localhost:3000/api/v1/categories/6fb39399-7f3d-4fb7-81b4-6cc19437b3f9
```

> **Nota:** El id debe tener formato `uuid`, por ejemplo: `242240a7-4d1b-431d-aa7f-f1c46dc87380`.

## Producción :bar_chart:

Para subir la aplicación a producción se usa [Heroku](https://www.heroku.com) por ello es importante tener una cuenta.

El despliegue de la aplicación consta de los siguietes pasos:

* Instalar Heroku
* Iniciar sesión en Heroku desde CLI
* Crear una aplicación Heroku
* Subir los cambios al repositorio de Heroku

### Instalar Heroku

La instalación de Heroku puede variar de dependiendo del sitema operativo. Consulta como instalar Heruku en la [documentación oficial de Heroku](https://devcenter.heroku.com/articles/heroku-cli) de acurdo con tu sistema operativo.

Para revisar si la instalación se realizó con exito se puede ejecutar el siguiente comando.

```
$ heroku --version
```

### Iniciar sesión en Heroku desde CLI

Ya instalado Heroku es necesario iniciar sesión para poder comenzar a trabajar. Esto se puede realizar con lo siguiente.

```
heroku login
```

Esto abre el navegador para poder realizar el login.

### Crear una aplicación Heroku

Es importante realizar esta acción el el directorio en el que se está desarrollando la app.

```
$ cd someone/some_dir/myapp
```

Estando en el directorio de desarrollo de la app ejecutar lo siguiente

```
$ heroku create
```

Esto crea un repositorio remoto llamado `heroku`. Se puede validar con

```
$ git remote -v
```

### Subir los cambios al repositorio de Heroku

Como al momento de crear una aplicación en Heroku se crea un repositorio remoto `heroku`, basta hacer un `git push` de `master/main` para subir los cambios y desplegarlos Heroku.

```
$ git push heroku master
```

Dentro de tu [Dashboard](https://dashboard.heroku.com/apps) verás la aplicación y la url para realizar las consultas ya descritas y Eureka, ya tienes tu app en producciòn.
