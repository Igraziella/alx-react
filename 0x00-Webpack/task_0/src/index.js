import $ from 'jquery';

// Add three different paragraphs to the page
$(document).ready(() => {
    const paragraph1 = $('<p>').text('Holberton dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const paragraph3 = $('<p>').text('Copyright - Holberton School');
    $('body').append(paragraph1, paragraph2, paragraph3);
});