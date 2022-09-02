import React from "react";

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
export default class LifeCycleClass extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      carts: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.setState({ products: ProductFromAPI });
  }

  tambahKeranjang(addProduct) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.push(addProduct);
    this.setState({ carts: keranjangSekarang });
  }

  hapusDariKeranjang(addProduct) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.splice(keranjangSekarang.indexOf(addProduct), 1);
    this.setState({ carts: keranjangSekarang });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carts.length !== this.state.carts.length) {
      let totalHarga = 0;
      for (const cart of this.state.carts) {
        totalHarga = totalHarga + cart.price;
      }
      this.setState({ totalPrice: totalHarga });
    }
  }

  render() {
    return (
      <div>
        <h1> Daftar Produk : </h1>
        <ul>
          {this.state.products.map((product) => (
            <li>
              {product.name} | Rp. {product.price} |
              <button onClick={() => this.tambahKeranjang(product)}>
                + keranjang
              </button>
            </li>
          ))}
        </ul>
        <h1> Keranjang : </h1>
        <ul>
          {this.state.carts.map((carts) => (
            <li>
              {carts.name} | Rp. {carts.price} |
              <button onClick={() => this.hapusDariKeranjang(carts)}>
                hapus
              </button>
            </li>
          ))}
        </ul>
        <h1> Total Harga : Rp. {this.state.totalPrice} </h1>
      </div>
    );
  }
}
