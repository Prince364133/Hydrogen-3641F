///The IUPAC names
var names = ['Nothing', 'Meth', 'Eth', 'Prop', 'But', 'Pent', 'Hex', 'Hept', 'Oct', 'Non', 'Dec','Undec','Dodec','Tridec','Tetradec',	'Pentadec','Hexadec','Heptadec','Octadec','Nonadec','Eicos'];
///For alkanes, the hydrocarbons with formula
ane_slider = $('.alkane_');
alkane_name = $('.name');
value = $('.alkane_').val();
ane_slider.on('input', function() {
   value = $('.alkane_').val();
   $('.n').html(value);
   $('.hn').html(value * 2 + 2);
   $('.aname').html(names[value] + 'ane');
});

//////////////////////////////////
ene_slider = $('.alkene_');
alkene_name = $('.name');
value = $('.alkene_').val();
ene_slider.on('input', function() {
   value = $('.alkene_').val();
   $('.n2').html(value);
   $('.hn2').html(value * 2);
   $('.ename').html(names[value] + 'ene');
});
////////////////////////////
yne_slider = $('.alkyne_');
alkyne_name = $('.name');
value = $('.alkyne_').val();
yne_slider.on('input', function() {
   value = $('.alkyne_').val();
   $('.n3').html(value);
   $('.hn3').html(value * 2 - 2);
   $('.yname').html(names[value] + 'yne');
});
///////////////////////////
body = $('body');
view = $('.ane_wrapper,.ene_wrapper,.yne_wrapper');
$(window).resize(function() {
   var w = body.width();
   if (w < 1000) {
      view.addClass('active');
   } else {
      view.removeClass('active');
   }

});