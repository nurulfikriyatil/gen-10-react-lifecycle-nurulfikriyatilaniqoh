import { useEffect, useState } from "react";

const ProductFromAPI = [
  {
    name: "Slingbag",
    price: 78000,
  },
  {
    name: "Ransel",
    price: 90000,
  },
  {
    name: "Totebag",
    price: 52000,
  },
];

export default function LifeCycleFunction() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function tambahKeranjang(addProduct) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.push(addProduct);
    setCarts(keranjangSekarang);
  }

  function hapusDariKeranjang(indexProduct) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.splice(indexProduct, 1);
    setCarts(keranjangSekarang);
  }

  useEffect(() => {
    setProducts(ProductFromAPI);
  }, []);

  useEffect(() => {
    let countTotalPrice = 0;

    for (const cart of carts) {
      countTotalPrice = countTotalPrice + cart.price;
    }

    setTotalPrice(countTotalPrice);
  }, [carts]);

  return (
    <>
      <h4>Daftar Produk</h4>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} | {product.price}
            <button onClick={() => tambahKeranjang(product)}>
              + keranjang
            </button>
          </li>
        ))}
      </ul>

      <h4> Keranjang </h4>
      <ul>
        {carts.map((cart, indexCart) => (
          <li>
            {cart.name} | Rp. {cart.price}
            <button onClick={() => hapusDariKeranjang(indexCart)}>
              - hapus
            </button>
          </li>
        ))}
      </ul>

      <h4> Total Harga : Rp. {totalPrice} </h4>
    </>
  );
}
