function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const currentVal = arr[i];
		for (let j = i - 1; j > -1 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}
