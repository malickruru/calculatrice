$(".toggle").click(function (e) { 
    let sidebar = $(e.currentTarget).attr('data-sidebar');
    $("#"+sidebar).toggle();
});