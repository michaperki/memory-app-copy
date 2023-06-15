export const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

export const shuffleArray = (array) => {
    let newArray = [...array].sort((a)=>Math.random()-0.5);
    return newArray;
}