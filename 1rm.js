// Inicializamos el mazo si no existe, luego añadimos las preguntas
window.misPreguntas = window.misPreguntas || [];
window.misPreguntas.push(
    { q: "RM - PREG 1:", a: "E", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/utbvOkr.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 2:", a: "B", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/4OZQxNB.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 3:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/9fBvtX3.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 4:", a: "A", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/TdiV6AP.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 5:", a: "C", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/S9Jy7me.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 6:", a: "B", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/RhsdQ3i.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 7:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/IsmlDin.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 8:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/XplDrKU.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 9:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/kZjzFTe.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 10:", a: "A", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/vmUsVhe.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 11:", a: "B", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/MhlHicL.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 12:", a: "E", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/zlW9hwO.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 13:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/9escpyi.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 14:", a: "E", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/trASZTk.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 15:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/jfWNecP.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 16:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/0rQik8J.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 17:", a: "B", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/vbWJOPF.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 18:", a: "C", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/wBl9JV3.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 19:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/2NqwaTu.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 20:", a: "C", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/xUsMuC4.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 21:", a: "C", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/1SRgsLd.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 22:", a: "E", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/7DE0OMy.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 23:", a: "B", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/tGYMFXJ.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 24:", a: "E", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/vVg6LiM.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" },
    { q: "RM - PREG 25:", a: "D", inc: ["A", "B", "C", "D", "E"], img: "http://imgfz.com/i/pnWOCMU.png", devText: "Desarrollo no disponible.", devImg: "", youtubeId: "" }
);