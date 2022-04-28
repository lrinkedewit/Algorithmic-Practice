/**
 * Given a 2D grid consisting of 0s (land) and 1s (water).  
 * An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 * 
 * Return the number of closed islands. This means that all 0s are completely surrounded by 1s.
 * 
 * LAND = 0
 * WATER = 1
 * 
 * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
 * Output: 2
 */

const closedIsland = function(grid) {

    // declare a function called "marker" that will mark every land and check all surrounding lands r + 1, r - 1, c + 1, c - 1
    const marker = (el) => {
        // flag that keeps track of whether there has been a wall or not
        let wall = false;
        el = 'X'
        // iterate left right top bottom changing all the lands to X
        
        
        
            // if we run into a wall, change wall to true


        if (wall === false) counter += 1;

    }
    // declare a counter that will keep track of all the closed islands
    let counter = 0;

    // iterate through all elements on periphery
    for (let row = 0; row < grid.length; row += 1) {
        for (let column = 0; column < grid[row].length; column += 1) {
            // conditional that calls a function called "marker" on all lands on the periphery, if it runs into a wall
            if (grid[row][column] === 0) marker([row][column])
        }

    }

    // iterate through all elements inside periphery
        // conditional that calls "marker"
        // increment counter

    // return counter

}

const gridExample1 = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]] //?
const gridExample2 = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]] //? 