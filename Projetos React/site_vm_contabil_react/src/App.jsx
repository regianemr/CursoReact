
import './App.css'
import './styles.css'

function App() {

  return (
    <>
      <header>
          <a href="#" id="home"></a>
          <div className="container" id="nav-container">
              <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                  {/* <a href="#" class="navbar-brand"> */}
                      {/* <img id="logo" src="./images/vm (4).png" alt="VM Assessoria Contabil"> Assessoria Contábil</a> */}
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links" 
                      aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                      <div className="navbar-nav">
                          <a href="#home"  className="nav-item nav-link" id="home-menu">Início</a>
                          <a href="#servicos" className="nav-item nav-link" id="services-menu">Serviços</a>
                          <a href="#sobre" className="nav-item nav-link" id="about-menu">Sobre</a>
                          <a href="#contato" className="nav-item nav-link" id="contact-menu">Contato</a>
                      </div>
                      
                  </div>
              </nav>
          </div>
          
      </header>
      <main>
          <div className="container-fluid">
              {/* <!-- slider --> */}
              <div id="mainSlider" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                      <li data-target="#mainSlider" data-slide-to="0" className="active"></li>
                      <li data-target="#mainSlider" data-slide-to="1"></li>
                      <li data-target="#mainSlider" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          {/* <img src="images/capa.jpg" class="d-block w-100" alt="Projeto"> */}
                          <div className="carousel-caption d-md-block">
                              <h2>A organização que você precisa!</h2>
                              <p>Estou aqui para lhe ajudar.</p>

                              <a href= "https://api.whatsapp.com/send?phone=5587991257625&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre: " className="main-btn">Entre em contato</a>
                          </div>
                      </div>
                      <div className="carousel-item">
                          {/* <img src="images/img2.jpg" class="d-block w-100" alt="Projeto2"> */}
                          <div className="carousel-caption d-md-block">
                              <h2>Deixe a burocracia comigo!</h2>
                              <a href="https://api.whatsapp.com/send?phone=5587991257625&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre: " className="main-btn">Entre em contato</a>
                          </div>
                      </div>
                      <div className="carousel-item">
                          {/* <img src="images/imagem3.jpg" class="d-block w-100" alt="Projeto3"> */}
                          <div className="carousel-caption d-md-block">
                              <h2>Uma nova jornada começa agora!</h2>
                              <p>Conte comigo!</p>
                              <a href="https://api.whatsapp.com/send?phone=5587991257625&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre: " className="main-btn">Entre em contato</a>
                          </div>
                      </div>
                  </div>
                  <a className="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#mainSlider"  role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
              {/* <!-- Serviços--> */}
              <a href="#" id="servicos"></a>
              <div id="services-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <h3 className="main-title">Serviços</h3>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-solid fa-lock"></i>
                              <h4>Abertura de empresas</h4>
                              <p>Abertura de empresas simples ou microempreendedor MEI</p>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-solid fa-pen-to-square"></i>
                              <h4>Alterações de CNPJ</h4>
                              <p>Baixa ou alterações contratuais de CNPJ e licenças necessárias para funcionamento</p>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-solid fa-check"></i>
                              <h4> Declarações de Imposto de Renda</h4>
                              <p>Declarações de IR de pessoa física ou jurídica</p>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-solid fa-barcode"></i>
                              <h4>Relacionamento com órgãos públicos e bancos</h4>
                              <p>Facilitar o relacionamento da empresa com órgãos governamentais,
                                  como a Receita Federal, e instituições financeiras</p>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-solid fa-thumbs-up"></i>
                              <h4>Tomada de decisões</h4>
                              <p> Fornecer informações financeiras precisas e relatórios contábeis claros é essencial para a tomada de decisões estratégicas</p>
                          </div>
                          <div className="col-md-4 service-box">
                              <i className="fas fa-handshake"></i>
                              <h4>Conformidade Legal</h4>
                              <p> Auxiliar a empresa a cumprir todas
                                  as obrigações fiscais e contábeis exigidas pela legislação vigente</p>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Sobre a empresa --> */}
              <a href="#" id="sobre"></a>

              <div id="about-area">
                  <div className='container'>
                      <div className="row">
                          <div className="col-12">
                              <h3 className="main-title">Sobre VM Assessoria Contábil</h3>
                          </div>
                          <div className="col-md-6">
                              {/* <img class="img-fluid" src="images/8Z9A6020.jpg" alt="VM Assessoria Contabil"> */}

                          </div>
                          <div className="col-md-6">
                              <p>Seja bem-vindo(a) ao mundo da assessoria contábil! Eu sou Veralucia, uma contadora 
                                  comprometida em oferecer suporte especializado e soluções contábeis precisas para indivíduos e empresas.</p>
                              <p>Com uma trajetória profissional sólida e enraizada na contabilidade, acumulei vasta experiência no campo da consultoria contábil.</p> 
                              <p>Ao longo dos anos, trabalhei com uma ampla variedade de clientes, desde pequenas empresas familiares até corporações de médio porte, 
                                  ajudando-os a navegar pelas complexidades do universo contábil. </p>
                              
                                  
                                  Veralucia de Melo
                                  <p>Contadora e Assessora Contábil</p>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          


          {/* <!-- Contato Wpp --> */}
          <a href="#" id="contato"></a>

          {/* <div id="whats">
      
              <a href="https://api.whatsapp.com/send?phone=5587991257625&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre:" target="_blank"><img class="img-whats" src="images/whats.png" alt="WhatsApp"></a>
      
          </div> */}
      </main>
  </>
  )
}

export default App
