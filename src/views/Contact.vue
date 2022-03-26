<template>
  <div class="container">
    <!-- Image -->
    <div class="container__image">
      Mail
    </div>
    <!-- Right side -->
    <div class="container__feature">
      <a href="mailto:nicolas.huber2@uzh.ch">Send me a mail</a>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  components : {
    Icon
  },
  name: "Contact"
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