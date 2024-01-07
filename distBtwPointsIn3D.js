// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places. Tests in Haskell will not round.


// Solution

function distanceBetweenPoints(a,b){
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;

    return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
}