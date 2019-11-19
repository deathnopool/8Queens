function queen(arr, row) {
	if (row>=arr.length) {
		return console.log(arr);
	}
	for (let col=0; col<arr.length; col++) {
		if (!isConflict(arr, row, col)) {
			arr[row] = col;
			queen(arr, row+1);
		}
	}
}

function isConflict(arr, row, col) {
	for (let i=row-1; i>=0; i--) {
		if (col == arr[i] || (row-i) == Math.abs(col-arr[i]))
			return true;
	}
	return false;
}

queen([0,0,0,0,0,0,0,0], 0);
