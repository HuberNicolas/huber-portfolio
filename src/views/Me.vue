<template>
  <div>Me</div>
  <div class="avatar">
    <!-- Avatar -->
    <img class="avatar__image" src="../assets/profile.jpg" />
  </div>
  <div class="card">
    <!-- Cover -->
    <div class="card__cover">
      Nicolas Huber
    </div>

    <!-- Content -->
    <div class="card__content">
      Hallo Welt! Herzlich willkommen auf meiner Webseite. Mein Name ist Nicolas Huber und ich stelle mich hier gerne vor. Wer bin ich also?
    </div>
    Student und angehender Software-Enthusiast
  </div>

</template>

<script>
export default {
  name: "Me"
}
</script>

<style scoped>


.avatar {
  /* Rounded border */
  border-radius: 50%;
  height: 30%;
  width: 30%;
}

.avatar__image {
  /* Rounded border */
  border-radius: 50%;

  /* Take full size */
  height: 100%;
  width: 100%;
}
.card {
  display: flex;
  flex-direction: column;
}

.card__cover {
  height: 150px;
  width: 100%;
}

.card__content {
  /* Take available height */
  flex: 1;
}
</style>