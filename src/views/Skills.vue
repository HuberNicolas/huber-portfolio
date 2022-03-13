<template>
  <div>Skills</div>
  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="cib:symfony" width="64" height="64"/>
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Bei jkweb arbeite ich vor allem mit dem PHP-Framework Symfony.
    </div>
  </div>

  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="bxl:java" width="64" height="64" />
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Durch Java habe ich meine ersten Erfahrungen in OOP gemacht. An der Uni habe mit Java wichtige Design-Patterns und das gemeinsame Programmieren im Team gelernt.
    </div>
  </div>

  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="akar-icons:python-fill" width="64" height="64" />
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Ich mag Python wegen dem hands-on Charater und möchte defintiv noch mehr Python lernen.
    </div>
  </div>
  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="bxl:c-plus-plus" width="64" height="64" />
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Der Schritt von Java zu C & C++ war nicht immer einfach, hat mir aber einige Aha-Momente gebracht.
    </div>
  </div>

  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="file-icons:matlab" width="64" height="64" />
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Im Kurs Numerical Methods for Informatics habe ich diverse mathematische Algorithmen mit MATLAB implementiert.
    </div>
  </div>

  <div class="container">
    <!-- Image -->
    <div class="container__image">
      <Icon icon="file-icons:latex" width="64" height="64" />
    </div>
    <!-- Right side -->
    <div class="container__feature">
      Einige Papers und Assignments habe ich in LaTeX geschrieben und damit Basics gelernt. Zudem habe ich Zusammenfassungen mit LaTeX geschrieben.
    </div>
  </div>

</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";
export default {
  components : {
    Icon
  },

  name: "Skills"
}
</script>

<style scoped>
.container {
  display: flex;

  /* OPTIONAL: Reverse the order of image and content */
  flex-direction: row;

  /* OPTIONAL: Spacing between items */
  margin: 16px 0;
}

.container__image {
  width: 128px;
}

.container__feature {
  /* Take the remaining width */
  flex: 1;
}

</style>