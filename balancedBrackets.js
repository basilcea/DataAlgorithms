function isBalanced(s) {
    let brackets={
        "[":"]",
        "{":"}",
        "(":")"
    }
   let pushArray = []
for (let i = 0; i < s.length; i++){
    if (Object.keys(brackets).includes(s[i])){
        pushArray.push(s[i])
    }
    else{
        let comparator = pushArray.pop()
        if (brackets[comparator] !== s[i]){
            return "NO"
        }
    }
}
return pushArray.length === 0 ? "YES": "NO"
}