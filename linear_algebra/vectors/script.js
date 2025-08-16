// Simple vector drawing animation
const canvas = document.getElementById("vectorCanvas");
const ctx = canvas.getContext("2d");

// Draw x-axis and y-axis
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(400, 150);
ctx.moveTo(200, 0);
ctx.lineTo(200, 300);
ctx.strokeStyle = "black";
ctx.stroke();

// Draw vector (example: (3,2))
ctx.beginPath();
ctx.moveTo(200, 150); 
ctx.lineTo(300, 50);
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.stroke();

ctx.font = "14px Arial";
ctx.fillText("Vector (3,2)", 310, 50);
