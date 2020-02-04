export default function getArrayIntersection(arrayA, arrayB) {
    return arrayA.filter(key => arrayB.includes(key));
}