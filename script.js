
let total = 0;

function hitung() {
    let barang = document.getElementById("barang").value;
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);

    if (barang == "" || harga <= 0 || jumlah <= 0) {
        alert("Silakan isi data belanja dengan benar!");
        return;
    }

    total = harga * jumlah;

    document.getElementById("total").innerHTML =
    "Total Belanja: Rp" + total.toLocaleString("id-ID");
}

function kembalian() {
    let bayar = Number(document.getElementById("bayar").value);

    if (total <= 0 || bayar < total) {
        alert("Pembayaran belum cukup!");
    } else {
        let kembali = bayar - total;

        document.getElementById("hasil").innerHTML =
        "Kembalian: Rp" + kembali.toLocaleString("id-ID");
    }
        }
