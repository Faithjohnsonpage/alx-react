import $ from "jquery";
import './header.css';

$(() => {
  $('head').append('<title>ALX Dashboard</title>');
  $('body')
    .append('<div id="logo"></div>')
    .append('<h1>ALX Dashboard</h1>');
  console.log('Init header');
});
