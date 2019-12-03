<template>
  <div>
    <div class="page-header clear-filter" filter-color="black">
      <parallax class="page-header-image" style="background-image:url('img/header.jpg')"></parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/logo.png" alt />
          <h1 class="h1-seo">Habitantes del Río</h1>

          <h5>Queremos sanear los ríos en México, empezando por la cuenca del Río Querétaro para tener un caso de éxito que replicar en el país.</h5>
          <n-button class="first-button" type="info" outline round>
            <i class="now-ui-icons ui-2_settings-90"></i> Involucrate
          </n-button>
        </div>
      </div>
    </div>

    <div class="renaturalizar">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Renaturalización de ríos</h2>
          <h5
            class="description"
          >Se busca renaturalizar los ríos, al estar reforestando laderas del río con especies endémicas, pago de reducción de huella a propietarios forestales en el Zamorano, crear prótesis al río para replicar cómo era un río, crear rápidos para que se oxigene el agua, hacer pozas donde se sedimenten las partículas, poner biofiltros de lirio para quitar metales pesados del agua (biofiltros de piedra para retener solidos)</h5>
        </div>
      </div>
    </div>
    <div class="container opciones">
      <h2 class="title">Conócenos!</h2>
      <div class="team">
        <div class="row">
          <div class="col-md-4">
            <div class="team-player">
              <h4 class="title">Quiénes Somos?</h4>
              <p class="category text-primary">Conoce nuestra organización</p>
              <p
                class="description"
              >Por medio de este enlace, conoce nuestra organizacion, historia, y lo que hacemos!</p>
              <n-button type="warning">Conócenos</n-button>
              <br />
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-player">
              <h4 class="title">Documental</h4>
              <p class="category text-primary">Documental Habitantes del Río</p>
              <p
                class="description"
              >Ve nuestro documental sobre las limpiezas y nuestra organización!</p>
              <n-button type="warning">Ver Documental</n-button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-player">
              <h4 class="title">Festival Suena el Río</h4>
              <p class="category text-primary">COMING SOON</p>
              <p
                class="description"
              >Festvial de conciencia ambiental, con conferencias, conciertos, talleres ambientales, y más!</p>
              <n-button type="warning">Conocer el Festival</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <carousel-section></carousel-section>
    <div class="renaturalizar">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Problemas del Río Querétaro</h2>
          <h5
            class="description"
          >El Río Querétaro se encuentra contaminado principalmente de aguas residuales industriales, domésticas, de agriculutra, ranchos y rastros, aguas negras de varios desarrollos que no cuentan con plantas de tratamiento aptas para tratar sus aguas y están rebasadas en sus capacidades. Falta de infraestructura: drenaje y colectores que lleven el agua a plantas de tratamiento y no a los ríos. Urge crear infraestructura para separar el agua pluvial del agua negra en las ciudades.</h5>
        </div>
      </div>
    </div>
    <!-- <TextImage></TextImage> -->

    <!-- <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>-->
    <!-- <examples-section></examples-section> -->
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/Navigation";
import TabsSection from "./components/Tabs";
import ProgressPagination from "./components/ProgressPagination";
import Notifications from "./components/Notifications";
import Typography from "./components/Typography";
import JavascriptComponents from "./components/JavascriptComponents";
import CarouselSection from "./components/CarouselSection";
import NucleoIconsSection from "./components/NucleoIconsSection";
import SignupForm from "./components/SignupForm";
import ExamplesSection from "./components/ExamplesSection";
import DownloadSection from "./components/DownloadSection";
import { Button } from "../../src/components";
import TextImage from "./components/TextImage";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection,
    [Button.name]: Button,
    TextImage
  }
};
</script>
<style>
@media screen and (min-width: 480px) {
  .renaturalizar {
    height: 50vh;
    margin-top: 10vh;
  }
  .opciones {
    text-align: center;
    margin-bottom: 15vh;
  }
}
</style>
