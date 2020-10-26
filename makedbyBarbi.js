const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (i < arr.length -1) {
        process.stdout.write(arr[i] + ',');
    } else {
    console.log(arr[i] + '');
    }
}
};
