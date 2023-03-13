"use strict";

var data = {
  pic: document.querySelectorAll(".data__pic"),
  ttl: document.querySelectorAll(".data__ttl"),
  des: document.querySelectorAll(".data__des"),
  prc: document.querySelectorAll(".data__prc"),
};

// mengatur jumlah
const countProductEl = document.querySelector("#countProduct");
countProductEl.textContent = data.pic.length;
var visit = document.getElementById("countVisit");

// const countVisitEl = document.querySelector("#countVisit");
// const loc = location.host;

const productContainer = document.querySelector(".product__wrape");
const arrProduct = [];

for (let i = 0; i < data.pic.length; i++) {
  const boxProduct = `<div class="product__box">
<img
  src="${data.pic[i].textContent}"
  alt="">
<div class="product__detail">
  <p class="product__detail-title">
  ${data.ttl[i].textContent}
  </p>
  <p class="product__detail-des">
  ${data.des[i].textContent}
  </p>
</div>
</div>`;
  productContainer.innerHTML += boxProduct;
  arrProduct.push(boxProduct);
}

let itemProduk = document.querySelector("#tglProduct").innerHTML;
let itemBiolink = document.querySelector("#tglBio").innerHTML;

const contentEl = document.querySelector("#content");
const toggleEl = document.querySelectorAll("#toggle");
const productEl = document.querySelector("#tglProduct");
const biolinkEl = document.querySelector("#tglBio");

toggleEl.forEach((item) => {
  item.addEventListener("click", () => {
    if (item === toggleEl[0]) {
      if (toggleEl[0].className === "tgl__none") {
        toggleEl[0].className = "tgl__active-product";
        toggleEl[1].className = "tgl__none";

        productEl.className = "product";
        biolinkEl.className = "disNone";
      } else {
        toggleEl[0].className = "tgl__none";
        toggleEl[1].className = "tgl__active-bio";
        productEl.className = "disNone";

        biolinkEl.className = "biolink";
      }
    } else if (item === toggleEl[1]) {
      if (toggleEl[1].className === "tgl__none") {
        toggleEl[1].className = "tgl__active-bio";
        toggleEl[0].className = "tgl__none";
        productEl.className = "disNone";

        biolinkEl.className = "biolink";
      } else {
        toggleEl[1].className = "tgl__none";
        toggleEl[0].className = "tgl__active-product";

        productEl.className = "product";
        biolinkEl.className = "disNone";
      }
    }
  });
});

const detailGuest = {
  ttl: document.querySelector(".namaProduct"),
  pic: document.querySelector(".fotoProduct"),
  prc: document.querySelector(".hargaProduct"),
};

const content = document.querySelector("#content");
const product = document.querySelectorAll(".product__box");
const container = document.querySelector(".container");

const detail = {
  this: document.querySelector("#detail"),
  pic: document.querySelector(".detail__pic >img"),
  ttl: document.querySelector(".detail__ttl"),
  prc: document.querySelector(".detail__prc"),
  des: document.querySelector(".detail__des p"),
  bck: document.querySelector("#detailBack"),
  order: document.querySelector(".detail__btn"),
  note: document.querySelector(".form__note"),
};

const form = {
  this: document.querySelector("#form"),
  inName: document.querySelector("input#input__name"),
  inCatatan: document.querySelector("textarea#input__catatan"),
  send: document.querySelector(".form__send"),
  bck: document.querySelector("#form__bck"),
  cls: document.querySelector("#form__close"),
};

const thankEl = document.querySelector("#thank");

const oferlay = document.querySelector("#oferlay");

window.addEventListener("load", () => {
  oferlay.className = "oferlay";
  setTimeout(() => {
    oferlay.className = "disNone";
  }, 1500);
});

// console.log(guestTxt, encodeURIComponent(guestTxt));

console.log(form.inName.value);
detail.this.className = "disNone";
detail.pic.src = "/";
detail.pic.alt = "";
detail.ttl.textContent = "";
detail.prc.textContent = "";
detail.des.textContent = "";

// mengambil data product untuk formulir
var getProduct, getPict;
// menampilkan detail product
for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", () => {
    content.className = "disNone";
    oferlay.className = "oferlay";
    setTimeout(() => {
      oferlay.className = "disNone";
      detail.this.className = "detail";

      detail.pic.src = `${data.pic[i].textContent}`;
      detail.pic.alt = `${data.ttl[i].textContent}`;
      detail.ttl.textContent = `${data.ttl[i].textContent}`;
      detail.prc.textContent = `Rp. ${data.prc[i].textContent}`;
      detail.des.textContent = `${data.des[i].textContent}`;
    }, 300);

    // data guest

    detailGuest.pic.textContent = data.pic[i].textContent;
    detailGuest.ttl.textContent = data.ttl[i].textContent;
    detailGuest.prc.textContent = data.prc[i].textContent;
    getProduct = data.ttl[i].textContent.replace(/^\s+|\s+$/gm, "");
    getPict = data.pic[i].textContent.replace(/^\s+|\s+$/gm, "");

    // menampilkan detail order
    detail.order.addEventListener("click", () => {
      content.className = "disNone";
      oferlay.className = "oferlay";
      setTimeout(() => {
        oferlay.className = "disNone";
        detail.this.className = "disNone";
        form.this.className = "form";
      }, 200);

      // kemabali ke detail product
      form.bck.addEventListener("click", () => {
        detail.this.className = "detail";
        content.className = "disNone";
        form.this.className = "disNone";
        oferlay.className = "disNone";
      });
      // kembali ke home
      form.cls.addEventListener("click", () => {
        content.className = "disNone";
        detail.this.className = "disNone";
        detail.pic.src = "/";
        detail.pic.alt = "";
        detail.ttl.textContent = "";
        detail.prc.textContent = "";
        detail.des.textContent = "";
        detail.this.style.animation = "";

        content.className = "content";
        form.this.className = "disNone";
        oferlay.className = "disNone";
      });
    });
    // kembali ke home dari detail produk
    detail.bck.addEventListener("click", () => {
      detail.this.style.animation = "scaleDwn 300ms ease-out";
      content.className = "content";
      setTimeout(() => {
        detail.this.className = "disNone";
        detail.pic.src = "/";
        detail.pic.alt = "";
        detail.ttl.textContent = "";
        detail.prc.textContent = "";
        detail.des.textContent = "";
        detail.this.style.animation = "";
      }, 200);
    });
  });
}
var set = {
  wa: 6285351133881,
  salam: "Halo kak",
};

form.send.addEventListener("click", () => {
  const pesan = `${set.salam}, saya ${form.inName.value} mau order *${getProduct}* ,\n\nCatatan:\n${form.inCatatan.value}\n\nFoto Product: ${getPict}\n\nMohon info selanjutnya kak, terimakasih.`;
  if (form.inName.value !== "") {
    form.this.className = "disNone";
    setTimeout(() => {
      thankEl.className = "thank";
    }, 100);
    setTimeout(() => {
      window.open(`https://wa.me/${set.wa}?text=${encodeURIComponent(pesan)}`);
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else {
    form.inName.style.border = "red solid 2px";
    form.inName.style.animation = "shake-horizontal 1s linear 0s 1 normal none";
    form.inName.placeholder = "silahkan isi nama";
  }
});
