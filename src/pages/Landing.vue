<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/bg6.jpg')"></parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Contacto Habitantes del Rio</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Direccion</h2>
            <h5
              class="description"
            >Av. Hercules Oriente #1, Col. Hercules, C.P. 7607, Queretaro, Queretaro.</h5>
            <h2 class="title">Correo</h2>
            <h5 class="description">test@test.com</h5>
            <h2 class="title">Siguenos en nuestras redes sociales!</h2>
            <h5 class="description">Facebook: Habitantes del Rio</h5>
            <h5 class="description">
              Instagram:
              @habitantesdelrioqro
            </h5>
            <div class="text-center">
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <!-- <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
               
                <p class="blockquote blockquote-primary">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly"
                  <br />
                  <br />
                  <small>-NOAA</small>
                </p>
              </div>
              
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3>
                So what does the new record for the lowest level of winter ice
                actually mean
              </h3>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Conoce a nuestro equipo</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Persona 1</h4>
                <p class="category text-primary">Trabajo 1</p>
                <p class="description">Info de la persona</p>
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
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Persona 2</h4>
                <p class="category text-primary">Trabajo 2</p>
                <p class="description">Info de la persona</p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Persona 3</h4>
                <p class="category text-primary">Trabajo 3</p>
                <p class="description">Info de la persona</p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-google-plus"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            ></fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            ></fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg">Send Message</n-button>
            </div>
          </div>
        </div>
      </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: ""
      }
    };
  }
};
</script>
<style></style>
