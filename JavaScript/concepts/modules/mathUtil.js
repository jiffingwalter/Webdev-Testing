// resuable module code goes here
// must use export with anything we plan to import elsewhere
export const PI = 3.14159

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}