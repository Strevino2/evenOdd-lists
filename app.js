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
