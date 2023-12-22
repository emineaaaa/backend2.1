var mongoose =require("mongoose");  /*moongoose kullanacağımızı belittik*/
var dbURI="mongodb+srv://emine:Hh2003.e.a@mekanbul.niidkou.mongodb.net/mekanbul";
//mongodb+srv://emine:Hh2003.e.a@mekanbul.niidkou.mongodb.net/?retryWrites=true&w=majority/mekanbul
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantıda hata oldu");
});
mongoose.connection.on("disconnet",function(){
    console.log("bağlantı kesildi");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("uygulama kapatıldı");
    process.exit(0);
});
require("./venues"); 

/*venue.js’yi db.js dosyası içinde tanıtarak, aşağıdaki komutla bu dosyayı kullanacağımızı söyledik.*/ 