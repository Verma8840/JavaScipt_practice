//Imperative programming is a paradigm describing HOW 

//Imperative
const arrayContainsotherArray = (needle, haystack) => {
    for(let i =0; i<needle.length; i++) {
        if(haystack.index(needle[i]) === -1)
        return false;
    }
    return true;
}