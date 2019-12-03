<template>
  <div  id="carousel">
    
      <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel height="500px">
            <el-carousel-item>
              <img class="d-block" src="img/bg1.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>El 70% de los rios en Mexico estan contaminados.</h5>
                <n-button type="info">Involucrate con nosotros</n-button>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg3.jpg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Los rios son fuente del liquido vital para la vida</h5>
                <h6>Ayudanos a descontaminar los rios</h6>
                <n-button type="info">Limpiezas Ciudadanas</n-button>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/bg4.jpg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Los rios son las venas de la Tierra y un ecosistema crucial para la vida, hábitat de varias especies de flora y fauna que no pueden vivir en rios contaminados.</h5>
                <n-button type="info">Conocer sobre nuestros rios</n-button>
              </div>
            </el-carousel-item>
          </el-carousel>
        
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";
import { Button } from "../../../src/components";

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button
  }
};
</script>
<style></style>
