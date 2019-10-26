let solutionCount = 0;
function countPrint() {
	return ++solutionCount;
}

function buildArrs() {
	let arrs = [];
	for (let i=8; i>0; i--) {
		let arr = [];
		for (let j=8; j>0; j--) {
			arr.push(0);	
		}
		arrs.push(arr);
	}
	return arrs;
}

function printArrs(arrs) {
	console.log("------------------------------ count=", countPrint());
	for (let i=0; i<arrs.length; i++) {
		let arr = arrs[i];
		let row = arr.map(item => {
			return !!item ? ' ● ' : ' ○ ';
		}).join("");
		console.log(row);
	}
}

function isConflict(arrs, rowIndex, colIndex) {
	const target = arrs[rowIndex][colIndex];
	for (let i=rowIndex-1; i>=0; i--) {
		let row = arrs[i];
		let j = row.indexOf(1);
		if (j==colIndex || (rowIndex-i == Math.abs(colIndex-j)))
			return true;
	}
	return false;
}

function clearDirtyRow(row) {
	row.fill(0);
}

function findQueens(arrs, rowIndex) {
	if (rowIndex>=8) {
		printArrs(arrs);
		return;
	}
	for (let i=0; i<arrs[rowIndex].length; i++) {
		if (!isConflict(arrs, rowIndex, i)) { 
			clearDirtyRow(arrs[rowIndex]);
			arrs[rowIndex][i] = 1;
			findQueens(arrs, rowIndex+1);
		}
	}
}

function start() {
	let plate = buildArrs();
	solutionCount = 0;
	findQueens(plate, 0);
}