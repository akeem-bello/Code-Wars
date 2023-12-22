// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// Answer

function symmetricPoint(p, q) {
    const px = p[0];
    const py = p[1];
    const qx = q[0];
    const qy = q[1];

    const symmetricX = 2 * qx - px;
    const symmetricY = 2 * qy - py;

    return [symmetricX, symmetricY];
}