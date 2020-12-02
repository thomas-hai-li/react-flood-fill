import { Coordinate } from '../Pixel/Pixel';

/**
 * Returns a new grid after using the pencil tool on
 * an individual pixel, specified by the given coordinate.
 * 
 * The pencil tool simply colors an individual pixel with a new color.
 *
 * @param coord - The coordinate to draw
 * @param grid - The old grid state
 * @param newColor - The color to draw with
 * @returns The new grid state
 */
const drawCanvasWithPencil = (coord: Coordinate, grid: string[][], newColor: string): string[][] => {
  // check out of bounds
  const maxCoords: Coordinate = { x: grid[0].length, y: grid.length };
  if (!isValidCoordinate(coord, maxCoords)) return grid;

  // else, clone the old grid, and return the new grid
  const newGrid: string[][] = JSON.parse(JSON.stringify(grid));
  const { x, y } = coord;
  newGrid[y][x] = newColor;

  return newGrid;
};

/**
 * Returns a new grid after using the flood fill tool on
 * an individual pixel, specified by the given coordinate.
 * 
 * The flood fill tool fills all connected pixels of the same color with a new color.
 *
 * @param coord - The coordinate to draw
 * @param grid - The old grid state
 * @param newColor - The color to draw with
 * @returns The new grid state
 */
const drawCanvasWithFloodFill = (coord: Coordinate, grid: string[][], newColor: string): string[][] => {
  // check out of bounds
  const maxCoords: Coordinate = { x: grid[0].length - 1, y: grid.length - 1 };
  if (!isValidCoordinate(coord, maxCoords)) return grid;

  // check if it is already the color we want
  const { x, y } = coord;
  const oldColor = grid[y][x];
  if (oldColor === newColor) return grid;

  // else, clone the old grid, and return the new grid
  const newGrid: string[][] = JSON.parse(JSON.stringify(grid));

  // flood fill using BFS using a queue
  const queue: Coordinate[] = [];
  queue.push(coord);

  while (queue.length > 0) {
    // O(n) dequeue operation when using .shift() but will suffice here
    // ...in a real project, use a queue library for O(1) dequeue
    let current_coord = queue.shift();
    let { x, y } = current_coord as any;
    newGrid[y][x] = newColor;

    let neighbours: Coordinate[] = [
      { x: x - 1, y }, // left
      { x: x + 1, y }, // right
      { x, y: y - 1 }, // up
      { x, y: y + 1 } // down
    ];

    neighbours.forEach((coord) => {
      if (!isValidCoordinate(coord, maxCoords)) return;
      let { x, y } = coord;
      let color = newGrid[y][x];
      if (color === oldColor) {
        newGrid[y][x] = newColor;
        queue.push(coord);
      }
    });
  }

  return newGrid;
};

/**
 * Returns whether a coordinate is a valid coordinate, given max bounds.
 * Assumes that (0, 0) are the min bounds for (x, y).
 *
 * @param coord - The coordinate to test
 * @param maxCoords - The coordinate which specifies max x and y values
 * @returns Whether a coordinate is a valid coordinate
 */
const isValidCoordinate = (coord: Coordinate, maxCoords: Coordinate): boolean => {
  const { x, y } = coord;
  const maxX = maxCoords.x;
  const maxY = maxCoords.y;

  const validX = x >= 0 && x <= maxX;
  const validY = y >= 0 && y <= maxY;

  return validX && validY;
};

export { drawCanvasWithPencil, drawCanvasWithFloodFill };
