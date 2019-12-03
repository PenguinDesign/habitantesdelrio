<template>
  <navbar
    position="fixed"
    type="info"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">Habitantes del Río</router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">Regresar a página de inicio</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/">Quiénes somos?</router-link>
      </li>
      <li class="nav-item">
       <router-link v-popover:popover1 class="navbar-brand" to="/">Limpiezas Ciudadanas</router-link>
      </li>
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/">Involucrate</router-link>
      </li>
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/">Galería de fotos</router-link>
      </li>
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/">Documental</router-link>
      </li>
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/">Festival</router-link>
      </li>
      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand" to="/landing">Contacto</router-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href=""
          target="/"
        >
          <div class="nstyle">
            <i class="now-ui-icons business_money-coins"></i>
            <p>Donar</p>
          </div>
        </a>
      </li>

      <!-- <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>-->
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.nstyle {
  color: blue;
}
</style>
