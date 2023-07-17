$(document).ready(function() {
    $('#taskForm').submit(function(event) {
    event.preventDefault(); 

    const taskName = $('#taskName').val().trim();

    if (taskName !== '') {
        const listItem = $('<li>').text(taskName);
        listItem.click(function() {
        $(this).toggleClass('completed');
        });
        $('#taskList').append(listItem);
        $('#taskName').val('');}
    });
});