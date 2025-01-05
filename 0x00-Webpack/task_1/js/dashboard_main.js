import $ from "jquery";
import _ from "lodash";

let count = 0; // Initialize the click counter

function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

$(function() {
  $("body")
    .append("<p>ALX Dashboard</p>")
    .append("<p>Dashboard data for the students</p>")
    .append("<button>Click here to get started</button>")
    .append("<p id='count'></p>")
    .append("<p>Copyright - ALX</p>");

  // Bind the debounced function to the button click event
  const debouncedUpdateCounter = _.debounce(updateCounter, 300);
  $("button").on("click", debouncedUpdateCounter);
});
