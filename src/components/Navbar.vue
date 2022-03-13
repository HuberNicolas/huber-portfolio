<template>
  <ul class="container">
    <!-- Navigation item -->
    <li><router-link to="/me">Me</router-link></li>
    <li><div class="separator">/</div></li>
    <li><router-link to="/skills">Skills</router-link></li>
    <li><div class="separator">/</div></li>
    <li><router-link to="/bucket-list">Bucket List</router-link></li>
    <li><div class="separator">/</div></li>
    <li><router-link to="/cv">CV</router-link></li>

    <!-- Navigation item that sticks to the right -->
    <li class="container__item--right">
      <router-link to="/">Home</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.container {
  /* Content is centered horizontally */
  align-items: center;
  display: flex;

  /* Reset styles */
  list-style-type: none;
  margin: 0;
}

.container__item--right {
  /* Sticks to the right */
  margin-left: auto;
}

.separator {
  margin: 0 8px;
}

</style>