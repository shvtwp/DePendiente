# Criterios para la selección

Lo ideal es tomar una decisión en función de los estándares, las recomendaciones
y las mejores prácticas del lenguaje seleccionado, en este caso TypeScript.
Al ser un proyecto pequeño y sencillo, lo que busco principalmente es la
simplicidad, pero también son cualidades a tener en cuenta la eficiencia y la
asiduidad de mantenimiento, entre otras.
Entiendo como simplicidad la facilidad para aprender a usar y comprender la
herramienta seleccionada.

# Gestores de tareas considerados

He pensado que no tiene mucho sentido considerar gestores de tareas externos
que no estén pensados especialmente para Deno, ya que el mismo runtime integra
uno, así que la cuestión pasa a ser si merece o no la pena usar alguna otra
herramienta diseñada concretamente para Deno.

## Deno

Como hemos mencionado con anterioridad, es el runtime elegido. Implementa un
gestor de tareas, no es necesario usar uno externo, lo que favorece la
simplicidad, al reducir el número de herramientas utilizadas.

## Drake

Drake es un gestor de tareas para Deno inspirado en `Make`, `Rake` y `Jake`.
Tiene dos principales desventajas con respecto al propio Deno, y es que,
además de ser externo, su frecuencia de actualización es mucho menor,
aproximadamente una vez al año.
Sin embargo, su sintaxis declarativa y estructurada facilita la
comprensión del código, que a mi parecer también favorece la simplicidad.

## Dnit

Dnit es un gestor de tareas para Deno orientado a proyectos más amplios.
Su última actualización fue hace tres semanas, pero parece ser poco
conocido, por lo que no hay mucha información sobre él, ni tampoco
feedback por parte de la comunidad, lo que dificulta su aprendizaje.
Además, no estoy trabajando en un proyecto de mucha complejidad.


# Elección final

No es un gran problema que Drake sea un gestor de tareas externo porque
está diseñado específicamente para Deno, lo que facilita en gran medida
su integración. Además, me resulta muy favorable que un Drakefile se
escriba en TypeScript, el mismo lenguaje de programación en el que se 
escribe el proyecto, por lo que no sería necesario aprender otro, así
que he decidido usar Drake.
