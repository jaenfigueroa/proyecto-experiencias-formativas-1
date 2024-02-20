# Enlaces importantes

- [Tablero de tareas pendientes/en progreso/terminados del proyecto](https://github.com/users/jaenfigueroa/projects/9/views/1)
- [Link del despliegue del proyecto](https://jaenfigueroa.github.io/proyecto-experiencias-formativas-1/)

# Pasos para clonar y correr localmente el proyecto

**1. Ejecutar este comando en la terminal**

```
git clone https://github.com/jaenfigueroa/proyecto-experiencias-formativas-1.git
```

**2. Instalar las dependencias del proyecto**

```
pnpm i 
```

**3. Crear una copia de archivo `.env.example` con el nombre `.env`**
```
VITE_SUPABASE_URL=
VITE_SUPABASE_KEY=
...ETC
```

**4. Correr el proyecto en local**

```
pnpm dev
```

# Pasos para realizar una tarea

**1. Crear un nueva rama a partir de la rama `dev`**
```
git checkout -b <nombre para la rama propia>
```

**2. Realizar/terminar la tarea asignada**

**3. Realizar el commit de los cambios que se han hecho**


```
git add .
```
```
git commit -m "Mensaje descriptivo de los cambios que han hecho"
```

**4. Enviar su rama a Github**

```
git push origin <nombre de la rama propia>
```
**5. Crear el pull request (enviar una solicitud para fusionar su rama propia con la rama dev)**

**6. Avisar que se ha creado el pull request, esperar que se revise, realizar los cambios que se pidan.**
