//scripts.js 
var colors = ["black","off", "blank", "accent", "light", "heavy"];
var fonts = ["sans", "serif", "code"];
for (var i = 0; i < colors.length; i++ ){
    var current = colors[i];
    for (var x = 0; x < fonts.length; x++) {
        var font = fonts[x];
        for (var y = 0; y < colors.length; y++) {
            var bg = colors[y];
            $('body').append('<div class="c-'+ current + ' bg-' + bg + ' ' + font + '"> This is ' + current + ' on ' + bg + ' in ' + font + '</div>');
        }
        
    }
}