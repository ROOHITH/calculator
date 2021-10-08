$(document).ready(function()
{
    var display="";
    var answer;
    $('.num').click(function()
    {
        display+=$(this).val();
        $('#screen').val(display);
    });
    $('#clear').click(function()
    {  
        display =$('#screen').val();
        display=display.slice (0,-1);
        $('#screen').css({
            border:'none',
            borderBottom:'2px solid black'
        });
        $('#screen').val(display);
    });
    $('#eql').click(function()
    {
        answer=  $('#screen').val();
        if(! /[a-z]/i.test(answer))
        {
            display=answer=eval(answer);
           
            $('#screen').val(answer);
        }
        else
        {
            $('#screen').css({
                border:'2px solid red'
            });
        }
    });
});