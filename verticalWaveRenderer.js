// -------------------------------------------------------
// Draws bars
// Draw some bars in a rainbow

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

 function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
	ctx.fillRect(0, 0, 500, 500)
	ctx.fill()

    // Options: quadraticCurve, BezierCurve, etc.

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const step = width / bars
	const colorStep = 360 / bars

	ctx.lineWidth = 3

	// Draw each bar in a color based on frequency
	// Draws bars vertically like a graph
	frequencyArray.forEach((f, i) => {
		const amplitude = f / 255 * height
		const x1 = step * i // x steps across canvas
		const y1 = height // y starts at bottom of canvas
		const x2 = x1 // x2 matches x1
		const y2 = height - amplitude // y2 bar length
		// begin a new path
		ctx.beginPath()
		// draw the path
		ctx.moveTo(x1, height)
		ctx.quadraticCurveTo((x1 + x2) / 2, y2, x2, height)
		// set the stroke color
		ctx.strokeStyle = `hsla(${colorStep * i}, 95%, 50%, 1.0)`
		ctx.stroke()
	})
}

export default render