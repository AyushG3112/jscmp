export default function getArrayDiff(arrayA, arrayB) {
    return arrayA.filter(key => !arrayB.includes(key));
}