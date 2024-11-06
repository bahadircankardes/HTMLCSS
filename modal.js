$(document).ready(function() 
{
    $(".actionButton").click(function()
    {
        const myModal = $("#myModal");
        var row = $(this).closest("tr");
        var column = row.find("td");
        console.log(row);
        console.log(column);

        
        console.log(column[0].innerHTML);
        $('#cardHeader').val("Personel Edit - " +column[0].innerHTML);
        $('#adi').val(column[1].innerHTML);
        $('#soyad').val(column[2].innerHTML);
        $('#gsm').val(column[3].innerHTML);
        myModal.modal('show');



            
    
    });    
});