function encrypt() {
    let string = document.getElementById("message").value;
    let result = document.getElementById("result");
    result.innerHTML = cypher(string);
    // create function for cipher
    function cypher (string){
        // new blank array to push encrypted word into
        let newString = []
        // iterate through array
        for (let i = 0; i < string.length; i++){
            //.charCodeAt will find the ascii number for the index
            let asciiNum = string.charCodeAt(i)
            // if statement for uppercase and lowercase letters A - K
        if ((asciiNum >= 65 && asciiNum <= 75) || (asciiNum >= 97 && asciiNum <= 107)){
            // ascii shifted fifteen
            let cipherAscii = asciiNum + 15
            //.fromCharCode gets the letter from the ascii code which has been shifted fifteen, and push will put this in the array
            newString.push(String.fromCharCode(cipherAscii))
        }
        // if statement for rest of alphabet in uppercase and lowercase
        else if ((asciiNum >= 76 && asciiNum <= 90) || (asciiNum >= 108 && asciiNum <= 122)){
            let cipherAscii = asciiNum - 11
            newString.push(String.fromCharCode(cipherAscii))
        }
        else{ 
            // any special characters or spaces
            newString.push(string[i])
        }
    }
    return newString.join("")
    }

    result.innerHTML = cypher(string);
  }