# DePendiente

## Descripción del problema
La familia de una persona en situación de dependencia necesita repartirse el cuidado de la misma de forma que tengan horarios lo más equitativos posible, teniendo en cuenta la disponibilidad de los mismos y que no pueden dejar a esa persona sola en ningún momento. En el caso de que nadie pueda en cierto momento, contratarán a un auxiliar de enfermería, pero como no disponen de muchos fondos, prefieren minimizar las horas en las que la persona dependiente está en manos de un profesional.

## Comprobar sintaxis

```bash
deno run -A drakefile.ts default check
```

## Pasar los test

```bash
deno run -A drakefile.ts default test
```

## Docker

Para construir la imagen: 
```bash
docker build -t shvtwp/dependiente .
```

Para ejecutar los test en el contenedor:
```bash
docker run -tv `pwd`:/app/test shvtwp/dependiente
```

## Documentación
[Historias de usuario](docs/HUs.md)

[Milestones](docs/milestones.md)

[User Journey](docs/userJourney.md)

[Runtime](docs/runtime.md)

[Gestor de tareas](docs/gestor_tareas.md)

[Gestot de dependencias](docs/gestor_dependencias.md)

[Imagen base](docs/imagen_base.md)

## Configuración de GitHub
[Foto de Perfil](docs/pfp.png)

[Clave SSH](docs/sshkey.png)

[Configuración GitHub](docs/capturaiv.png)