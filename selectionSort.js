function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			const temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}
