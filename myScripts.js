$('#header h1').html('My Awesome Site')
$('#addOne').click(function() {
    var value = $('#name').val()
    $('ul').append('<li>' + value + '</li>')
})