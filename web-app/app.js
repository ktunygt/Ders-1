// Express uygulaması ve gerekli modüller
const express = require("express");
const app = express();
const cors = require("cors");

// CORS (Cross-Origin Resource Sharing) yapılandırması
app.use(cors({
    origin: "*", // Her yerden gelen istekleri kabul et
    methods: "GET POST PUT DELETE" // İzin verilen HTTP metotları
}));

// URL verisi (form data) için express'in urlencoded parser'ını kullan
app.use(express.urlencoded({ extended: true }));

// EJS (Embedded JavaScript) şablon motorunu kullan (html motoru)
app.set("view engine", "ejs");

// Yeni bir router nesnesi oluşturuluyor
const router = express.Router();

// "/home" adresine GET isteği geldiğinde home/index şablonunu render et
router.get("/home", (req, res) => {
    return res.render("home/index");
});

// "/home" adresine POST isteği geldiğinde form verisini al ve konsola yazdır
router.post("/home", (req, res) => {
    const data = req.body; // POST verilerini al
    console.log(data); // Veriyi konsola yazdır
    return res.render("home/index"); // Home şablonunu render et
});

// Router'ı uygulamaya dahil et
app.use(router);

// Uygulamayı 3000 portunda çalıştır
app.listen(3000, () => {
    console.log("Uygulama çalıştı");
});
