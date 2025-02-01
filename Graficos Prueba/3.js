// Datos de matrícula por año y nivel educativo
const data = {
    years: ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    primaria: {
        "1er": [11204, 11453, 13361, 16365, 16329, 17899, 8808, 7454, 7737, 6002, 5882, 5633, 5682, 5471, 5357, 5183, 3950, 84, 159, 153, 147, 145, 13, 11, 10, 8, 11, 12, 5, 2, null, null, null, null, null, null, 16, null],
        "2do": [14265, 15540, 16200, 22166, 21375, 21601, 21862, 21812, 20237, 19883, 20955, 20766, 20707, 21301, 21762, 20521, 29446, 26150, 25543, 23615, 20614, 21141, 21510, 21347, 22899, 23713, 25374, 25598, 24654, 22362, 23138, 22734, 22797, 22164, 21828, 24086, 24288, 25750],
        "3er": [21024, 21753, 24308, 27876, 30747, 33177, 31380, 32718, 26232, 28334, 28880, 29017, 29371, 28980, 30090, 30272, 31128, 30298, 29531, 29051, 26731, 26749, 26562, 26626, 26488, 27376, 28976, 30520, 29667, 29257, 28252, 28257, 28562, 28053, 28090, 28229, 29486, 29368],
        "4to": [23483, 25152, 26674, 31644, 32423, 35862, 36122, 35633, 36115, 33775, 32420, 32270, 32491, 32848, 32422, 33875, 34221, 34000, 33605, 32728, 31083, 30563, 30343, 29996, 30437, 29309, 30052, 31888, 33096, 31977, 32500, 31216, 31502, 30967, 31507, 31688, 32435, 33444],
        "5to": [21052, 24083, 27416, 29565, 33324, 32797, 35272, 36407, 35657, 35488, 34908, 33795, 33490, 33576, 34118, 33671, 32889, 34253, 34093, 33651, 32326, 31525, 31351, 30982, 30610, 30574, 29412, 30356, 32100, 32714, 31711, 32610, 31466, 31829, 31558, 32443, 33105, 32902],
        "6to": [12324, 11942, 12669, 14457, 15111, 16611, 16492, 17984, 19061, 20829, 22524, 23052, 23347, 23188, 23171, 23147, 22935, 21975, 23097, 21781, 21119, 20918, 20662, 20849, 20521, 20558, 20285, 20307, 20356, 21189, 21853, 21034, 21733, 21263, 21931, 21124, 23032, 21406],
    },
    // Asociar cada nivel escolar con su imagen correspondiente
    images: {
        "1er": "1ro.png",
        "2do": "2do.png",
        "3er": "3ro.png",
        "4to": "4to.png",
        "5to": "5to.png",
        "6to": "6to.png",
    },
};

// Escala del pictograma: 1 icono = 1000 estudiantes
const scale = 1000;

// Función para generar el pictograma
function generatePictogram(year) {
    const yearIndex = data.years.indexOf(year);
    const pictogramContent = document.getElementById("pictogram-content");
    pictogramContent.innerHTML = ""; // Limpiar contenido anterior

    // Mostrar el año seleccionado
    document.getElementById("selected-year").textContent = year;

    // Generar iconos para cada nivel educativo
    for (const nivel in data.primaria) {
        const estudiantes = data.primaria[nivel][yearIndex];
        if (estudiantes === null || estudiantes === undefined) continue;

        const iconCount = Math.round(estudiantes / scale);
        const iconUrl = data.images[nivel]; // Obtener la imagen correspondiente al nivel
        const icons = Array(iconCount).fill(`<img src="${iconUrl}" class="icon-img" alt="Icono ${nivel}">`).join("");

        const nivelDiv = document.createElement("div");
        nivelDiv.innerHTML = `<strong>${nivel} año:</strong> ${estudiantes} estudiantes <br> ${icons}`;
        pictogramContent.appendChild(nivelDiv);
    }
}

// Llenar el selector de años
const yearSelect = document.getElementById("year-select");
data.years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
});

// Actualizar el pictograma cuando se selecciona un año
yearSelect.addEventListener("change", (event) => {
    const selectedYear = event.target.value;
    generatePictogram(selectedYear);
});

// Mostrar el pictograma para el primer año al cargar la página
generatePictogram(data.years[0]);