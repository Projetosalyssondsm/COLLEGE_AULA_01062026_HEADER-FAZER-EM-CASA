import Logo from "../../assets/logo.png"
import "./Header.css"

function Header() {

  return (
    <>
      <section id="SectionHeader">
        <div>
          <a href="/"><img id="logo" src={Logo} alt="" /> </a>

          {/*  ajustar a imagem */}
        </div>
        <div id="DivHeader">
          <select >
            <option disabled selected hidden>Todas as categorias</option>
            <option>celulares</option>
            <option>notebooks</option>
            <option>Audio</option>
            <option>Smartwatches</option>
            <option>Acesssorios</option>
            <option>Periféricos</option>
            <option>TVs & Video</option>
            <option>Casa Inteligente</option>
            <option>ofertas</option>
          </select>
          <input type="text" placeholder=" &#x1F50D; Buscar produtos..."></input>
          <div><buton><i class="fi fi-rr-search"></i></buton></div>

        </div>
        <div></div>
        <div></div>
      </section>
      
      <section>

        <ul>
          <li><a href="">celulares</a></li>
          <li><a href="">notebooks</a></li>
          <li><a href="">Audio</a></li>
          <li><a href="">Smartwatches</a></li>
          <li><a href="">Acesssorios</a></li>
          <li><a href="">Periféricos</a></li>
          <li><a href="">TVs & Video</a></li>
          <li><a href="">Casa Inteligente</a></li>
          <li ><a href="" id="unico">ofertas</a></li>
        </ul>













      </section>
    </>
  )
}

export default Header
