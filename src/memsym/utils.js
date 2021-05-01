export function toByteString(value) {
    const buffer = new ArrayBuffer(1);
    const arr = new Uint8Array(buffer);
    arr[0] = +value;
    const normValue = arr[0];
    return normValue.toString(2).padStart(8, '0');
}