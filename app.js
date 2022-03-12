let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value
    console.log(usersWord)
}


function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    if(usersWord.length % 2 ===0) {
        /*put word in even lists*/
        evenList.appendChild(newListItem)
      } else {
        /*put word in odd list*/
        oddList.appendChild(newListItem)
      }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }

function preventSubmit(event) {
  event.preventDefault()
  console.log(event)
}


//   function runScript(e) {
//     //See notes about 'which' and 'key'
//     if (e.keyCode == 13) {
//       console.log(e.keyCode)
//         var tb = document.getElementById("word");
//         eval(tb.value);
//         return false;
//     }
// }
