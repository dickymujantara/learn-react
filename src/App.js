import React, { Component } from "react"
import Header from './Header'
import Footer from './Footer'
import MenuKontak from './page/menuKontak'
import MenuProduct from './page/menuProduct'
import MenuTentangKami from './page/menuTentangKami'
import MenuUtama from './page/menuUtama'

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

export default App;
