document.addEventListener('DOMContentLoaded', function()
{
    // Pytanie zamknięte
    // zmienna allButtons dla wszyskich 5 przycisków
    const allButtons = document.querySelectorAll(".wrong, .right");

    allButtons.forEach(function (button)
{
    button.onclick = function ()
    {
        // przy każdym kliknięciu kolor wszystkich przycisków wraca do domyślnego
        allButtons.forEach(function(button)
        {
            button.style.background = "#d9edff";
        });
        // jeśli zaznaczono dobry, to podswietla sie na zielono i pokazuje sie komunikat Correct
        if (this.classList.contains("right"))
        {
            this.style.background = "green";
            document.querySelector("#feedback1").textContent = "Correct!";
        }
        // jeśli zaznaczono zły, to podswietla sie na czerwono i pokazuje sie komunikat Incorrect
        else
        {
            this.style.background = "red";
            document.querySelector("#feedback1").textContent = "Incorrect";
        }
    }
});
    // Pytanie zamknięte

    // Pytanie otwarte
    document.querySelector('form').onsubmit = function()
    {
        const answer = document.querySelector("#waga").value.trim();

        if (answer === "2" || answer === "2.0" || answer === "2,0")
        {
            document.querySelector("#feedback2").textContent = "Correct!";
            document.querySelector('input').style.background = "green";
        }
        else
        {
            document.querySelector("#feedback2").textContent = "Incorrect";
            document.querySelector('input').style.background = "red";
        }

        return false;
    };

    // Pytanie otwarte
});

