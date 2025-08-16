const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = [
    [9, 8, 7],
    [4, 5, 6],
    [1, 2, 3]
];

// ================================================================================================
// Shared Helpers

// Print a single matrix
function printSingleMatrix(mat) {
    let width = getMaxWidth([mat]); // compute max number width
    document.writeln("<pre>"); // preserve spacing

    for (let i = 0; i < mat.length; i++) {
        let row = "[" + mat[i].map(x => pad(x, width)).join(" ") + "]";
        document.writeln(row);
    }

    document.writeln("</pre><br>");
}


// Pad numbers for alignment
function pad(num, size) {
    let s = num.toString();
    while (s.length < size) s = " " + s;
    return s;
}

// Find max width of numbers across multiple matrices
function getMaxWidth(mats) {
    let maxLen = 0;
    for (let mat of mats) {
        for (let row of mat) {
            for (let val of row) {
                maxLen = Math.max(maxLen, val.toString().length);
            }
        }
    }
    return maxLen;
}

// ================================================================================================
// Matrix Addition & Subtraction

function addMatrix(matA, matB) {
    let rows = matA.length, cols = matA[0].length;
    let c = [];
    for (let i = 0; i < rows; i++) {
        c[i] = [];
        for (let j = 0; j < cols; j++) {
            c[i][j] = matA[i][j] + matB[i][j];
        }
    }
    return c;
}

function subtractMatrix(matA, matB) {
    let c = [];
    for (let i = 0; i < matA.length; i++) {
        c[i] = [];
        for (let j = 0; j < matA[i].length; j++) {
            c[i][j] = matA[i][j] - matB[i][j];
        }
    }
    return c;
}

// Print matrix equation (addition or subtraction)
function print_matrix_equation(matA, matB, symbol) {
    let C;
    if (symbol === "+") C = addMatrix(matA, matB);
    else if (symbol === "-") C = subtractMatrix(matA, matB);

    let width = getMaxWidth([matA, matB, C]);

    document.writeln("<pre>");
    for (let i = 0; i < matA.length; i++) {
        let rowA = "[" + matA[i].map(x => pad(x, width)).join(" ") + "]";
        let rowB = "[" + matB[i].map(x => pad(x, width)).join(" ") + "]";
        let rowC = "[" + C[i].map(x => pad(x, width)).join(" ") + "]";

        let line =
            rowA + " " +
            (i === Math.floor(matA.length/2) ? symbol : " ") + " " +
            rowB + " " +
            (i === Math.floor(matA.length/2) ? "=" : " ") + " " +
            rowC;

        document.writeln(line);
    }
    document.writeln("</pre><br>");
}

// ================================================================================================
// Matrix Multiplication

function multiplyMatrix(A, B) {
    let rowsA = A.length, colsA = A[0].length;
    let rowsB = B.length, colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrix dimensions do not match for multiplication");
    }

    let C = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        C[i] = new Array(colsB).fill(0);
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

// Print multiplication: A B = C
function print_matrix_multiplication(A, B) {
    let C = multiplyMatrix(A, B);
    let width = getMaxWidth([A, B, C]);

    document.writeln("<pre>");
    let maxRows = Math.max(A.length, B.length, C.length);

    for (let i = 0; i < maxRows; i++) {
        let rowA = A[i] ? "[" + A[i].map(x => pad(x, width)).join(" ") + "]"
                        : " ".repeat(width * (A[0].length + 2));
        let rowB = B[i] ? "[" + B[i].map(x => pad(x, width)).join(" ") + "]"
                        : " ".repeat(width * (B[0].length + 2));
        let rowC = C[i] ? "[" + C[i].map(x => pad(x, width)).join(" ") + "]"
                        : " ".repeat(width * (C[0].length + 2));

        let line =
            rowA + " " +
            (i === Math.floor(maxRows/2) ? " " : " ") + " " +
            rowB + " " +
            (i === Math.floor(maxRows/2) ? "=" : " ") + " " +
            rowC;

        document.writeln(line);
    }

    document.writeln("</pre><br>");
}
