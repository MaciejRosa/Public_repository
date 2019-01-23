// Caching some vars and DOM element objects

var mainButton = document.getElementById("Add-Input-Button");
var cos = document.getElementById("Input-Container");
const saveButton = document.getElementById("Data-Saving-Button");
var inputIds = 0; // Variable used in IDs of some elements
var m = 0;

// Constructors required to save inputs
function savedInput(question, type, subinput) {
  this.question = question;
  this.type = type;
  this.subinput = subinput;
}

function savedSubinput(condition, question, type, subinput) {
  this.condition = condition;
  this.question = question;
  this.type = type;
  this.subinput = subinput;
}
//---------------------------------------------------

// This should saves subinput values to objects (BROKEN)
function SaveSubinputsInObjects() {
  while (m < inputIds) {
    if (document.getElementById("conditionText" + m)) {
      var subinput = new savedSubinput(
        document.getElementById("conditionText" + m).value,
        document.getElementById("subQuestion" + m).value,
        document.getElementById("subSelect" + m).value,
        "saveSubinput()"
      );
      return subinput;
    }
    m++;
  }
}
//-----------------------------------------------

// Function which saves values of main inputs in objects, also console logs those objects
function SaveInputsInObjects() {
  for (let i = 0; i < inputIds; i++) {
    if (document.getElementById("question" + i)) {
      let newInput = new savedInput(
        document.getElementById("question" + i).value,
        document.getElementById("select" + i).value,
        "SaveSubinputsInObjects()" // <- not working properly
      );

      console.log(newInput);
    }
  }
}

function createInput() {
  //Function will get an id of clicked button (which is a number, part of elements ID ex. "4") and remove an element with matching id ex. "input4".

  reply_click = function(clicked_id) {
    document.getElementById("input" + clicked_id).remove();
  };

  //creating new input element

  let newInput = document.createElement("newInput");
  document.getElementById("Input-Container").appendChild(newInput);

  //Setting newly created element ID to: 'input'+number ex. "input4"

  newInput.setAttribute("id", "input" + inputIds);

  //Newly created elements HTML

  newInput.innerHTML =
    // That should probably be in a template
    '<div class="input">' +
    '<label for="question' +
    inputIds +
    '">Question</label> <input id="question' +
    inputIds +
    '" class="textinput" type="text" /></br>' +
    '<label for="select' +
    inputIds +
    '">Type</label>' +
    '<select id="select' +
    inputIds +
    '" class="select">' +
    '<option value="text">Text</option>' +
    '<option value="number">Number</option>' +
    '<option value="yesno">Yes / No</option>' +
    "</select></br>" +
    '<button id="' +
    inputIds +
    '" onClick="createSubinput(this.id)" class="Add-Subinput-Button">Add Subinput</button>' +
    '<button id="' +
    inputIds +
    '" onClick=reply_click(this.id) class="del_button">Delete</button>' +
    '<div class="subinputstyle" id="sub' +
    inputIds +
    '"></div>' +
    " </div>";
  // ----------------------------------------------------

  //Incrementing the number used in elements IDs
  inputIds++;
}

//This function creates new Subinput

function createSubinput(clicked_id) {
  sub_click = function(clicked_id) {
    //each delete button got an id equal to a number (each buttons id i a incremented number ex. "4") and subinput elements id is equal to string = subinput+Number ex. subinput4

    document.getElementById("subinput" + clicked_id).remove();
  };

  //creating new subinput element and nesting it inside of input element OR inside a another subinput element.

  let newSubinput = document.createElement("newSubinput");
  document.getElementById("sub" + clicked_id).appendChild(newSubinput);

  //Setting newly created elements id to: subinput+number  ex. "subinput4".

  newSubinput.setAttribute("id", "subinput" + inputIds);

  //Declaring newly created elements HTML

  newSubinput.innerHTML =
    // This also should be in a template
    '<div class="subinput">' +
    '<label>Condition</label> <input id="conditionText' +
    inputIds +
    '" class="text_input_sub" type="text"></input> <select id="conditionSelect' +
    inputIds +
    '" class="select_sub">' +
    '<option value="equal">Equals</option>' +
    '<option value="greater">Greater than</option>' +
    '<option value="less">Less than</option>' +
    "</select></br>" +
    '<label>Question</label> <input id="subQuestion' +
    inputIds +
    '" class="textinput" type="text" /></br>' +
    "<label>Type</label>" +
    '<select id="subSelect' +
    inputIds +
    '" class="select">' +
    '<option value="text">Text</option>' +
    '<option value="number">Number</option>' +
    '<option value="yesno">Yes / No</option>' +
    "</select></br>" +
    '<button id="' +
    inputIds +
    '" onClick="createSubinput(this.id)" class="Add-Subinput-Button">Add Subinput</button>' +
    '<button id="' +
    inputIds +
    '" onClick=sub_click(this.id) class="del_button">Delete</button>' +
    '<div class="subinputstyle" id="sub' +
    inputIds +
    '"></div>' +
    " </div>";
  //-----------------------------------------------------

  // incrementing the number used in IDs.
  inputIds++;
}
