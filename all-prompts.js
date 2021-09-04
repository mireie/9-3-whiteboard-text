// Question 1

const str = "Jasmine Ann Jones";

function spaceReplace(string) {
  let sArray = string.split(" ");
  return sArray.join("%20");
}
console.log("Q1")
console.log(spaceReplace(str));


// With Recursion

const spaceReplaceToo = (string, index = 0) => {
  if (index > string.length) {
    return string
  } else if (string[index] === " ") {
    const newStr = string.substring(0, index) + "%20" + string.substring(index + 1, string.length)
    return spaceReplaceToo(newStr, index + 3)
  } else {
    return spaceReplaceToo(string, index + 1)
  }
}

console.log("Q1 w/ Recursion")
console.log(spaceReplaceToo(str));

// Question 2

const arr2 = [7, 9, "hi", 12, "hi", 7, 53]

function arrayDeduper(array) {
  let outputArray = []
  array.forEach(function (e, i) {
    if (outputArray.includes(e) === false) {
      outputArray.push(e)
    }
  })

  return outputArray
}
console.log("Q2")
console.log(arrayDeduper(arr2))


// Using Filter

function arrayFilter(array) {
  return array.filter((element, index) => {
    return array.indexOf(element) === index;
  })
}

console.log(arrayFilter(arr2))

// Question 3

const str3 = "aaabccdddda"

function stringCompress(string) {
  let output = ""
  let i = 0;
  let counter = 1
  while (i < string.length) {
    if (i === string.length - 1) {
      output += string[i]
      break
    }
    if (string[i] === string[i + counter]) {
      counter++
    } else {
      if (counter > 1) {
        output += counter + string[i]
      } else {
        output += string[i]
      }
      i += counter
      counter = 1
    }
  }

  return output
}

console.log("Q3")
console.log(stringCompress(str3))

// With Recursion 

function recursiveCompress(string, index = 0, result = '', counter = 1) {
  if (index >= string.length) {
    return result
  }
  if (string[index] != string[index + 1]) {
    if (counter === 1) {
      result += string[index]
    } else {
      result += counter + string[index]
    }
    return recursiveCompress(string, ++index, result, 1)
  } else {
    ++counter
    return recursiveCompress(string, ++index, result, counter)
  }
}

console.log(recursiveCompress(str3))

// Question 4

const str41 = 'hello'
const str42 = 'copyright'

function uniqueChecker(string) {
  let output = true
  for (let i = 0; i <= string.length - 1; i++) {
    for (let j = 1; j <= string.length - i + 1; j++) {
      if (string[i] === string[i + j]) {
        output = false
      }
    }
  }
  return output
}

console.log("Q4")
console.log(uniqueChecker(str41))
console.log(uniqueChecker(str42))
console.log(uniqueChecker('banana'))


// Compressing Strings

// input > String (alphabetical, case does matter)
// output > String
// example: aaa => 3a, a => a (not 1a)

function strCompress(string) {
  let output = ""
  let i = 0
  let counter = 1
  while (i < string.length) {
    if (i === string.length - 1) {
      output += string[i]
      break
    }
    if (string[i] === string[i + counter]) {
      counter++
    } else {
      if (counter > 1) {
        output += counter + string[i]
      } else {
        output += string[i]
      }
      i += counter
      counter = 1
    }
  }
  return output
}

// With Recursion!

function recursiveStrCompress(string, index = 0, result = ' ', counter = 1) {
  if (index >= string.length) {
    return result
  }
  if (string[index] != string[index + 1]) {
    if (counter === 1) {
      result += string[index]
    } else {
      result += counter + string[index]
    }
    return recursiveStrCompress(string, ++index, result, 1)
  } else {
    ++counter
    return recursiveStrCompress(string, ++index, result, counter)
  }
}
