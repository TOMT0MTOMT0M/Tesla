$(function () {
    $(".ac").draggable({
        axis: 'y',
        containment: 'parent'
    });
    // Get the axis option, after initialization.
    var axis = $('.ac').draggable('option', 'axis');
    // Set the axis option, after initialization.
    $('.ac').draggable('option', 'axis', 'y');
});