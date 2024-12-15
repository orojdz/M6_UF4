# Tetris Game React

## Descripción general:
 Construir una versión básica del clásico juego de Tetris. El juego debe incluir una cuadrícula donde las piezas de Tetris caen, funcionalidad para mover y rotar las piezas, detección de colisiones y eliminación de filas completas, además de un sistema de puntuación.

### Pasos:

1. Crear una cuadrícula de juego:
    - [x] Implementa un tablero de 10 columnas por 20 filas usando un array bidimensional.
    - [ ] Cada celda del tablero puede estar vacía o contener parte de una pieza.

2. Definir las piezas de Tetris:
    - [ ] Implementa las 7 piezas estándar del juego: I, O, T, S, Z, J, L.
    - [ ] Cada pieza tiene varias rotaciones posibles.

3. Mecanismo de caída:
    - [ ] Las piezas deben caer automáticamente a intervalos regulares.
    - [ ] Si una pieza toca otra pieza o la base del tablero, se fija en su lugar.

4. Movimientos y rotación:
    - [ ] Permite al jugador mover las piezas izquierda/derecha y rotarlas usando las teclas del teclado.
    - [ ] Implementa la lógica para evitar que las piezas salgan del tablero o se superpongan.

5. Detección de líneas completas:
    - [ ] Detecta cuando una fila completa del tablero está llena.
    - [ ] Elimina esa fila y mueve las filas superiores hacia abajo.
    - [ ] Incrementa la puntuación por cada fila eliminada.

6. Fin del juego:
    - [ ] Termina el juego cuando una nueva pieza no puede entrar al tablero porque está bloqueado.

7. Interfaz de usuario:
    - [ ] Muestra el tablero, la puntuación y un mensaje cuando el juego termina.
    - [ ] Opcional: Añade una vista previa de la próxima pieza.

8. Código React:
    - [ ] Divide la lógica en componentes como "Board", "Piece", y "ScoreBoard".
    - [ ] Usa hooks como useState y useEffect para manejar el estado del juego.
    - [ ] Implementa una lógica de bucle principal con requestAnimationFrame o setInterval.

**Siguientes pasos:**

- Implementa la lógica para generar piezas aleatorias y colocarlas en el tablero.
- Agrega eventos de teclado para mover y rotar las piezas.
- Añade la lógica para detección de colisiones, eliminación de filas y fin del juego.
- Mejora el diseño visual con CSS.