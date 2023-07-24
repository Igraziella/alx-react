import $ from 'jquery';

// Add paragraph elements to the page
$(document).ready(() => {
    const p1 = $('<p>').text('Holberton Dashboard');
    const p2 = $('<p>').text('Dashboard data for the students');
    const button = $('button').text('Click here to get started');
    const p3 = $(<p id='count'></p>);
    const p4 = $('<p>').text('Copyright - Holberton School');
    $('body').append(p1, p2, button, p3, p4);
});