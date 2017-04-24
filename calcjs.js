function loadpu(){      
    var drg;
    var a = 0;
    var cln;
    var i = 0;
    $(".short").draggable({
        drag: function (event, ui) {
            drg = $(this);
            $("#droppable").droppable('enable');
        },
        helper: 'clone'

    });

    $("#droppable").droppable({
        drop: function () {
            a = a + parseInt(drg.attr('value'));
            $("#counter").html(a);            
            if ( $("#" + drg.attr('data-value')).length > 0) {
                var txt = drg.attr('data-value') + "1";                           
                var txt2 = drg.attr('data-value') + "-2";
                $("#" + txt).html(parseInt($("#" + txt).text()) + 1);               
                var newv = parseInt($("#" + txt2).text()) + 1;
                $("#" + txt2).html(newv);      
                $("#" + txt2).attr('value', drg.attr('data-value')+'-'+newv);
            } else
            {
                $(this).append("<div id='" + drg.attr('data-value') + "' value='" + drg.attr('value') + "' class='val'>" + drg.text() + "</div>");
                $(this).append("<div id='" + drg.attr('data-value') + "1' style='float:right'>" + $("#" + drg.attr('data-value')).length + "</div><br>");   
                $('#arts').append("<option id='" + drg.attr('data-value') + "-2' selected='1' class='count' value='" + drg.attr('data-value') + "-" +
                $("#" + drg.attr('data-value')).length+"'>" + $("#" + drg.attr('data-value')).length + "</option>");
            }
            $("#" + drg.attr('data-value')).draggable({
                drag: function (event, ui) {
                    $("#droppable").droppable('disable');
                    drg = $(this);

                },
                stop: function (event, ui) {
                    var tt = drg.attr('id') + "1";
                    var vv = drg.attr('id') + "-2";
                    if (parseInt($("#" + tt).text()) > 1) {
                        $("#" + tt).html(parseInt($("#" + tt).text()) - 1);
                    } else {
                        $("#" + drg.text()).remove();
                        $(this).remove();
                        $("#" + tt + " + br ").remove();
                        $("#" + tt).remove();
                    }
                    
                    if (parseInt($("#" + vv).text()) > 1) {
                        $("#" + vv).html(parseInt($("#" + vv).text()) - 1);
                    } else {
                        $("#" + drg.text()).remove();

                        $(this).remove();
                        $("#" + vv + " + br ").remove();
                        $("#" + vv).remove();
                    }
                    
            
                    a = a - parseInt(drg.attr('value'));
                    $("#counter").html(a);

                },
                helper: 'clone'

            });
        }

    });

}//end loadpu
