function displayAlert() 
{
        alert("Formunuz basariyla kaydedildi!");
}

function displayDialog() 
{
    let result = confirm("Silmek istediğinizden emin misiniz?")
    if (result == true) 
    {
            // Silme işlemi
        alert("Silme islemi tamamlandi!");
    }
        
    else
    {
            // İşlem iptal edildi
            alert("Silme islemi iptal edildi!");
    }

}

function displayDialog() 
{
    let result = prompt("Adinizi giriniz:","Ad Soyad");
    let myp = document.getElementById("test");
    
    if (result !=null && result != "" && result != "Ad Soyad" ) 
    {
        myp.innerText="Merhaba " + result;

        
    }

    else 
    {
     // Kullanıcı ad girmediğinde alert verme{
        alert("Lutfen adinizi giriniz!");
    }
    

}




