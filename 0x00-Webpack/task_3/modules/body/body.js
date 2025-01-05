import $ from 'jquery';
import _ from 'lodash';
import './body.css';


let count = 0;

function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

$(function() {
  $("body")
    .append("<p>Dashboard data for the students</p>")
    .append("<button>Click here to get started</button>")
    .append("<p id='count'></p>")

  const debouncedUpdateCounter = _.debounce(updateCounter, 300);
  $("button").on("click", debouncedUpdateCounter);
});
