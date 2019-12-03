<template>
  <div class="color-container">
    <div class="row justify-content-center">
      <div class="col-1"></div>
      <div class="the-text col-5">
        <h3>
          Renaturalizacion de rios:
          <br />
          <small
            class="text-muted"
          >reforestando laderas del rio ccon especies endémicas, pago de reduccio de huella a propietarios forestales en el Zamorano, crear protesis al rio para replicar como era un rio, rapidos para que s oxigene el agua, pozas donde se sedimenten las partículas, biofiltros de lirio para quitar metales pesados del agua. Biofiltros de piedra para retener solidos</small>
        </h3>
      </div>
      <div class="col-6 the-text-2">
        <div class="text-pad">
          <h2>Conoce nuestras limpiezas ciudadanas</h2>
          <n-button type="info">Limpiezas Ciudadanas</n-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.color-container {
    
}
.the-text {
  text-align: left;
  padding-top: 35px;
  padding-left: 20px;
}
.the-text-2 {
  text-align: center;
  background-color: aqua;
}
.text-pad{
    padding-top: 35px;
}
</style>
<script>
import { Button } from "../../../src/components";

export default {
  components: {
    [Button.name]: Button
  }
};
</script>