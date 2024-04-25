const myMap = new Map()

myMap.set(0, "Zero")
myMap.set(1, "One")

for (const [key, value] of myMap) {
    console.log(key + " = " + value)
}

for (const key of myMap.keys()) {
    console.log(key)
}

for (const value of myMap.values()) {
    console.log(value)
}

for (const [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}