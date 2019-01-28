// import "../templates/css/reset.css";
// import "./style.scss";

// const offset = 10;
// const cellSize = 8;
// const canvasWidth = 340;
// const canvasHeight = 460;
// const maxActiveCells = 10;
// const baseStrokeColour = "#323232";

// const makeGrid = (canvasWidth, canvasHeight, cellWidth, cellHeight) => {
//   const cellsX = Math.ceil(canvasWidth / (cellWidth + offset));
//   const cellsY = Math.ceil(canvasHeight / (cellWidth + offset));
//   const colours = ["#22D5E1", "#BAED36", "#DF9928", "E7CE34"];

//   let grid = [];

//   for (let i = 0; i < cellsY; i++) {
//     grid = [...grid, []];

//     for (let j = 0; j < cellsX; j++) {
//       const cell = {
//         xPos: j * (cellWidth + offset) + offset,
//         yPos: i * (cellHeight + offset) + offset,
//         opacity: 1,
//         width: cellWidth,
//         height: cellHeight,
//         speed: Math.random() * 0.01,
//         baseColour: baseStrokeColour,
//         activeColour: colours[Math.floor(Math.random() * colours.length)]
//       };

//       grid[i] = [...grid[i], cell];
//     }
//   }

//   return grid;
// };

// const getRandomCells = (grid, amount) => {
//   const randomCells = [];

//   for (let i = 0; i < amount; i++) {
//     const row = grid[Math.floor(Math.random() * grid.length)];
//     const cell = row[Math.floor(Math.random() * row.length)];

//     cell.opacity = 1;

//     randomCells.push(cell);
//   }

//   return randomCells;
// };

// const animate = (canvas, grid, initialCells) => {
//   const ctx = canvas.getContext("2d");
//   let cells = initialCells;

//   const start = () => {
//     renderGrid(canvas, grid);

//     if (cells.length < maxActiveCells) {
//       cells = cells.concat(getRandomCells(grid, maxActiveCells - cells.length));
//     }

//     cells.forEach((cell, index) => {
//       if (cell.opacity - cell.speed >= 0) {
//         cell.opacity = cell.opacity - cell.speed;
//       } else {
//         ctx.globalAlpha = 0;
//         cell.opacity = 0;
//         cells.splice(index, 1);
//       }

//       ctx.lineWidth = 1;
//       ctx.strokeStyle = cell.activeColour;
//       ctx.strokeRect(cell.xPos, cell.yPos, cell.width, cell.height);
//       ctx.globalAlpha = 1;
//     });

//     requestAnimationFrame(start);
//   };

//   return start;
// };

// const renderGrid = (canvas, grid) => {
//   const ctx = canvas.getContext("2d");
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   grid.forEach(row => {
//     row.forEach(cell => {
//       ctx.lineWidth = 1;
//       ctx.strokeStyle = cell.baseColour;
//       ctx.strokeRect(cell.xPos, cell.yPos, cell.width, cell.height);
//     });
//   });
// };

// const canvas = document.getElementById("pixels");
// const grid = makeGrid(canvasWidth, canvasHeight, cellSize, cellSize);
// const activeCells = getRandomCells(grid, 10);

// renderGrid(canvas, grid);
// animate(canvas, grid, activeCells)();
