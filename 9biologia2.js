// Inicializamos el mazo si no existe, luego añadimos las preguntas
window.misPreguntas = window.misPreguntas || [];
window.misPreguntas.push(
    {   q: "1. Se le considera el iniciador de la Zoología por sus numerosos estudios sobre animales y haber establecido la escala natural.", 
        q1: ["A) Platón"], 
        q2: ["B) Teofrasto de Ereso"],
        q3: ["C) Demócrito de Abdera"],
        q4: ["D) Aristóteles de Frigia"],
        q5: ["E) Pitágoras"],
        a: "D", 
        inc: ["A", "B", "C", "D", "E"], 
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "2. Fue el primero en observar y describir las bacterias, protozoarios y espermatozoides, postulando la teoría animalculista.", 
        q1: ["A) Malpighi"], 
        q2: ["B) Hooke"],
        q3: ["C) Leeuwenhoek"],
        q4: ["D) Pasteur"],
        q5: ["E) Spallanzani"],
        a: "C", 
        inc: ["A", "B", "C", "D", "E"], 
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "3. Una de las clasificaciones más antiguas de las plantas fue hecha por un naturalista griego que estableció la clasificación en Criptógamas y Fanerógamas.", 
        q1: ["A) Teofrasto"], 
        q2: ["B) Parménides"],
        q3: ["C) Epicuro"],
        q4: ["D) Fania"],
        q5: ["E) Thales"],
        a: "D", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "4. Se le considera uno de los iniciadores de la práctica médica por sus trabajos en la disección de animales.", 
        q1: ["A) Claudio Galeno"], 
        q2: ["B) Aristóteles"],
        q3: ["C) Ptolomeo"],
        q4: ["D) Hipócrates"],
        q5: ["E) Herófilo"],
        a: "A", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "5. Planteó la Nomenclatura binomial para los seres vivos.", 
        q1: ["A) George Louis Leclerc, Conde de Buffon"], 
        q2: ["B) Charles Lyell"],
        q3: ["C) Alfred Russell Wallace"],
        q4: ["D) Ernst Haeckel"],
        q5: ["E) Carl von Linné"],
        a: "E", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "6. La invención del microscopio compuesto trajo consigo la", 
        q1: ["A) Teoría Atómica."], 
        q2: ["B) Teoría Celular."],
        q3: ["C) Teoría Evolutiva."],
        q4: ["D) Teoría de la Panspermia."],
        q5: ["E) Teoría de la Generación Espontánea."],
        a: "B", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "7. Plantearon la Teoría celular.", 
        q1: ["A) Darwin y Oparin"], 
        q2: ["B) Schleiden y Schwann"],
        q3: ["C) Linné y Ray"],
        q4: ["D) Watson y Crick"],
        q5: ["E) Mendel y De Vries"],
        a: "B", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "8. El inicio del siglo XX, en el campo de la Biología, tiene como principal aporte la", 
        q1: ["A) Teoría Celular."], 
        q2: ["B) Teoría de la Biogénesis."],
        q3: ["C) Teoría Evolutiva."],
        q4: ["D) Genética."],
        q5: ["E) Generación Espontánea."],
        a: "D", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    { q: "9. El final de la concepción de la generación espontánea se produce como consecuencia de", 
        q1: ["A) la visión dialéctica de la naturaleza."], 
        q2: ["B) el desarrollo del método de experimentación."],
        q3: ["C) el planteamiento de la evolución biológica."],
        q4: ["D) la construcción de microscopios."],
        q5: ["E) la propuesta de la Teoría celular."],
        a: "B", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },
    
    { q: "10. Propusieron el modelo de la doble hélice para explicar la estructura del ADN.", 
        q1: ["A) Darwin y Oparin"], 
        q2: ["B) Schleiden y Schwann"],
        q3: ["C) Linné y Ray"],
        q4: ["D) Watson y Crick"],
        q5: ["E) Mendel y De Vries"],
        a: "D", 
        inc: ["A", "B", "C", "D", "E"],
        img: "", 
        devText: "Desarrollo no disponible.", 
        devImg: "", 
        youtubeId: "" },

    //intro
    { q0: "1", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio1.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//1
    { q0: "2", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio2.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//2
    { q0: "3", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio3.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//3
    { q0: "4", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio4.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//4
    { q0: "5", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio5.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//5
    { q0: "6", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio6.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//6
    { q0: "7", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio7.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//7
    { q0: "8", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio8.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//8
    { q0: "9", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio9.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//9
    { q0: "10", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio10.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//10
    { q0: "11", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio11.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//11
    { q0: "12", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio12.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//12
    { q0: "13", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio13.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//13
    { q0: "14", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio14.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//14
    { q0: "15", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio15.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//15
    { q0: "16", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio16.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//16
    { q0: "17", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio17.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//17
    { q0: "18", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio18.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//18
    { q0: "19", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio19.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//19
    { q0: "20", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio20.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//20
    { q0: "21", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio21.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//21
    { q0: "22", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio22.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//22
    { q0: "23", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio23.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//23
    { q0: "24", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio24.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//24
    { q0: "25", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio25.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//25
    { q0: "26", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio26.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//26
    { q0: "27", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio27.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//27
    { q0: "28", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio28.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//28
    { q0: "29", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio29.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//29
    { q0: "30", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio30.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//30
    { q0: "31", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio31.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//31
    { q0: "32", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio32.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//32
    { q0: "33", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio33.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//33
    { q0: "34", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio34.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//34
    { q0: "35", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio35.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//35
    { q0: "p6", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio36.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//36
    { q0: "37", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio37.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//37
    { q0: "38", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio38.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//38
    { q0: "39", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio39.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//39
    { q0: "40", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio40.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//40
    { q0: "41", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio41.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//41
    { q0: "42", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio42.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//42
    { q0: "43", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio43.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//43
    { q0: "44", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio44.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//44
    { q0: "45", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio45.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//45
    { q0: "46", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio46.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//46
    { q0: "47", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio47.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//47
    { q0: "48", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio48.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//48
    { q0: "49", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio49.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//49
    { q0: "50", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio50.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//50
    { q0: "51", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio51.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//51
    { q0: "52", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio52.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//52
    { q0: "53", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio53.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//53
    { q0: "54", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio54.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//54
    { q0: "55", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], a: "", img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/bio55.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//55


    //cel y gen
    { q0: "1", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen1.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//1
    { q0: "2", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen2.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//2
    { q0: "3", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen3.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//3
    { q0: "4", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen4.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//4
    { q0: "5", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen5.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//5
    { q0: "6", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen6.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//6
    { q0: "7", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen7.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//7
    { q0: "8", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen8.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//8
    { q0: "9", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen9.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//9
    { q0: "10", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen10.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//10
    { q0: "11", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen11.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//11
    { q0: "12", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen12.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//12
    { q0: "13", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen13.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//13
    { q0: "14", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen14.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//14
    { q0: "15", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen15.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//15
    { q0: "16", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen16.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//16
    { q0: "17", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen17.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//17
    { q0: "18", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen18.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//18
    { q0: "19", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen19.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//19
    { q0: "20", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen20.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//20
    { q0: "21", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen21.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//21
    { q0: "22", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen22.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//22
    { q0: "23", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen23.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//23
    { q0: "24", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen24.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//24
    { q0: "25", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen25.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//25
    { q0: "26", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen26.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//26
    { q0: "27", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen27.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//27
    { q0: "28", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen28.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//28
    { q0: "29", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen29.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//29
    { q0: "30", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen30.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//30
    { q0: "31", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen31.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//31
    { q0: "32", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen32.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//32
    { q0: "33", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen33.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//33
    { q0: "34", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen34.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//34
    { q0: "35", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen35.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//35
    { q0: "36", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen36.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//36
    { q0: "37", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen37.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//37
    { q0: "38", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen38.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//38
    { q0: "39", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen39.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//39
    { q0: "40", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen40.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//40
    { q0: "41", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen41.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//41
    { q0: "42", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen42.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//42
    { q0: "43", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen43.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//43
    { q0: "44", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen44.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//44
    { q0: "45", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen45.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//45
    { q0: "46", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen46.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//46
    { q0: "47", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen47.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//47
    { q0: "48", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen48.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//48
    { q0: "49", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen49.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//49
    { q0: "50", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/celygen50.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//50


    //div
    { q0: "1", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div1.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//1
    { q0: "2", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div2.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//2
    { q0: "3", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div3.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//3
    { q0: "4", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div4.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//4
    { q0: "5", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div5.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//5
    { q0: "6", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div6.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//6
    { q0: "7", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div7.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//7
    { q0: "8", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div8.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//8
    { q0: "9", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div9.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//9
    { q0: "10", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div10.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//10
    { q0: "11", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div11.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//11
    { q0: "12", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div12.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//12
    { q0: "13", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div13.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//13
    { q0: "14", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div14.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//14
    { q0: "15", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div15.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//15
    { q0: "16", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div16.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//16
    { q0: "17", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div17.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//17
    { q0: "18", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div18.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//18
    { q0: "19", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div19.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//19
    { q0: "20", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div20.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//20
    { q0: "21", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div21.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//21
    { q0: "22", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div22.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//22
    { q0: "23", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div23.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//23
    { q0: "24", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div24.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//24
    { q0: "25", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div25.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//25
    { q0: "26", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div26.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//26
    { q0: "27", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div27.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//27
    { q0: "28", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div28.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//28
    { q0: "29", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div29.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//29
    { q0: "30", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div30.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//30
    { q0: "31", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div31.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//31
    { q0: "32", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div32.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//32
    { q0: "33", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div33.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//33
    { q0: "34", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div34.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//34
    { q0: "35", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div35.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//35
    { q0: "36", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div36.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//36
    { q0: "37", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div37.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//37
    { q0: "38", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div38.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//38
    { q0: "39", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div39.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//39
    { q0: "40", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div40.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//40
    { q0: "41", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div41.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//41
    { q0: "42", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div42.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//42
    { q0: "43", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div43.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//43
    { q0: "44", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div44.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//44
    { q0: "45", q: "Biología", a: "C", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div45.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//45
    { q0: "46", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div46.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//46
    { q0: "47", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div47.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//47
    { q0: "48", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div48.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//48
    { q0: "49", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div49.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//49
    { q0: "50", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div50.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//50
    { q0: "51", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div51.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//51
    { q0: "52", q: "Biología", a: "A", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div52.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//52
    { q0: "53", q: "Biología", a: "E", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div53.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//53
    { q0: "54", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div54.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//54
    { q0: "55", q: "Biología", a: "D", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div55.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//55
    { q0: "56", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div56.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },//56
    { q0: "57", q: "Biología", a: "B", inc: ["A", "B", "C", "D", "E"], img: "https://raw.githubusercontent.com/hniltonhemenih/imgbiologia/main/div57.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" }//57

);
