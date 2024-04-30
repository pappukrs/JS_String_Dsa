function stringValue(S) {
    let str = " abcdefghijklmnopqrstuvwxyz";
    let strArr = str.split("");
    let sum = 0;

    S.split("").forEach((char) => {
        let idx = strArr.findIndex((c) => c === char); // Finding index of the character
        if (idx !== -1) { // Ensure the character is found in strArr
            sum += idx;
        }
    });

    console.log(sum);
}

