<template>
  <VApp>
    <VMain>
      <v-container fluid class="homepage-hero">
        <slot/>
      </v-container>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">

</script>

<style>
  .homepage-hero {
    background-image: url("/imgs/quest_board_bg.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
</style>