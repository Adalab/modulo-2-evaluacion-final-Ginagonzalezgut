# Buscador de series de Anime

Aplicación Web interactiva que busca series de Anime y que permite añadir tus series favoritas a una lista personalizada para un acceso rápido.

## Índice

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

Este proyecto presenta una página web donde puedes buscar series de Anime. Además, puedes añadir tus series favoritas a una lista separada, que será guardada en el almacenamiento local. De esta manera, incluso después de recargar la página desde tu ordenador, podrás seguir viendo tus series favoritas.

## Instalación

Las instrucciones para instalar el proyecto.

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

## Uso

Para iniciar este proyecto debes hacerlo con Live Server en Visual Studio Code.

## Características

Este proyecto incluye las siguientes características claves:

1. **Buscador de series de Anime:**

   - Cuando se hace click en botón buscar se conecta con la API que nos devuelve la busqueda con los datos que necesitamos.
   - Por cada serie contenido en el resultado de busqueda se pinta una tarjeta donde se muestra un titulo y una imagen.
   - Para aquellas busquedas de series que no tengan la imagen de la serie, se mostrará una imagen de relleno que hemos proveido con el servicio de placeholder.com.

2. **Añadir series a Favoritas :**
   - Cuando la usuaria haga click en una serie se añade a una lista de favoritos en la parte izquierda de la pantalla
   - La lista de favoritos sigue apareciendo aunque la usuaria haga otra busqueda.
   - La lista de favoritos sigue apareciendo aunque se recargue la página porque se almacena en local storage.

## Contribuir

Si deseas colaborar con el proyecto, sigue estos pasos:

1. Realiza un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE) en este repositorio.

MIT License

## Contacto

Para cualquier consulta, sugerencia o reporte de problemas, puedes ponerte en contacto con:

### Información del Autor

**Nombre:** Gina González Gutiérrez

**Correo Electrónico:** gini_go@hotmail.com
