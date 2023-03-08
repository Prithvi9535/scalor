const figlet = require('figlet')

// const calculator = require('./calculator')


// calculator.addition(3,5)
// calculator.divison(45,65)
// calculator.divison(34,56)
// calculator.divison(244,57)
// calculator.substrction(54,56)


figlet.text('KUSHAL!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});





