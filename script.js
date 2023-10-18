class Kitablar{
    constructor(kitab_adi,yazar_adi,ili,qiymet){
this.kitab_adi=kitab_adi;
this.yazar_adi=yazar_adi;
this.ili=ili;
this.qiymet=qiymet;
    }
    QiymetIste(endirim_faizi){
 const endirimli_qiymeti=(this.qiymet-this.qiymet*(endirim_faizi/100))
 this.endirimli_qiymeti=endirimli_qiymeti
}
}
const KitabInfo=new Kitablar('Cinayet ve Ceza','Fyodor Dostoyevski','2020',20)
KitabInfo.QiymetIste(20)
console.log(KitabInfo);


 