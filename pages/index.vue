<script setup lang="js">
import "animate.css";
import {useI18n} from "vue-i18n";
import {useToast} from "vue-toast-notification";

// const showingMessages = ref(false);
const {t} = useI18n();
const messages = [
  {
    message: 'boop',
    type: 'success'
  },
  {
    message: 'dev-logs',
    type: 'info'
  },
  {
    message: 'hope-you-enjoy',
    type: 'success'
  }
];

const storeMessages = [
  {
    message: 'store-coming-soon-curious',
    type: 'success'
  },
  {
    message: "store-coming-soon",
    type: 'info'
  },
  {
    message: "thanks-for-support",
    type: 'success'
  }
]

const messageDelay = 1250;

const showMessages = (messages) => {
  // if (showingMessages.value) return;

  // showingMessages.value = true;

  const toast = useToast();

  /* Iterate all the messages */
  messages.forEach(({message, type}, index) => {
    message = t(message);
    setTimeout(() => {
      let options = {
        position: "bottom-right",
        duration: 5000
      }
      if (type === "error") toast.error(message, options);
      else if (type === "success") toast.success(message, options);
      else if (type === "info") toast.info(message, options);
      else if (type === "warning") toast.warning(message, options);
      else
        toast.default(message, options);
    }, messageDelay * index);
  });

  /* Clear the delay */
  // setTimeout(() => {
  //   showingMessages.value = false;
  // }, messageDelay * messages.length);
};

const showBoopMessage = () => {
  showMessages(messages);
};

const showStoreMessage = () => {
  showMessages(storeMessages);
};

useHead({
  title: t('title'),
})

useSeoMeta({
  title: t('title'),
  ogTitle: t('title'),
  description: `${t('title')} - ${t('description')}`,
  ogDescription: `${t('title')} - ${t('description')}`,
  ogImage: "/imgs/entry-dungeon.webp",
  twitterCard: "summary_large_image"
})
</script>


<template>

  <v-row class="mt-2">
    <v-col cols="12" md="4" offset-md="4">
      <v-img src="/imgs/16bitlogo.webp" height="50vh" lazy-src="/imgs/16bitlogo.webp"
             alt="logo" contain class="pa-10 hvr-grow" @click="showBoopMessage">
      </v-img>

    </v-col>

    <v-col cols="12" md="4" offset-md="4">
      <h1 class="text-center animate__animated animate__pulse animate__infinite animate__slower">
        {{ $t('welcome-message') }}</h1>
    </v-col>
  </v-row>
  <v-row>

    <v-col cols="12" md="2" offset-md="3">
      <a href="https://facebook.com/spellboundsagaofficial" target="_blank"><h4 class="text-center">{{
          $t('facebook')
        }}</h4></a>
    </v-col>
    <v-col cols="12" md="2">
      <a href="#" @click="showStoreMessage"><h4 class="text-center">{{ $t('store') }}</h4></a>
    </v-col>
    <v-col cols="12" md="2">
      <a href="https://youtube.com/@Islati" target="_blank"><h4 class="text-center">{{ $t('youtube') }}</h4></a>
    </v-col>

  </v-row>


</template>

<style scoped lang="scss">

a {
  color: gold;
}



</style>