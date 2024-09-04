document.addEventListener("DOMContentLoaded", function () {
    const bloggInlägg = [
        {
            titel: "Mitt första blogginlägg",
            datum: "2024-09-01",
            innehåll: "Detta är mitt första inlägg på bloggen. Här delar jag mina tankar och idéer."
        },
        {
            titel: "En annan dag, ett nytt inlägg",
            datum: "2024-09-02",
            innehåll: "Idag pratar jag om vikten av att lära sig något nytt varje dag."
        },
        {
            titel: "Tips för bättre produktivitet",
            datum: "2024-09-03",
            innehåll: "I detta inlägg delar jag några av mina bästa tips för att öka din produktivitet."
        }
    ];

    const bloggContainer = document.getElementById("blogg-inlägg");

    bloggInlägg.forEach(inlägg => {
        const inläggElement = document.createElement("div");
        inläggElement.classList.add("blogg-inlägg");

        inläggElement.innerHTML = `
            <h2>${inlägg.titel}</h2>
            <p><em>${inlägg.datum}</em></p>
            <p>${inlägg.innehåll}</p>
        `;

        bloggContainer.appendChild(inläggElement);
    });
});
