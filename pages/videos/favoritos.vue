<template>
    <div>
        Vídeos Favoritos
    </div>
    <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descrição }}</h2>
      <iframe>
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
        </iframe>
      <div>
        <button @click="removerFavorito(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from '~/stores/video';

const { $toast } = useNuxtApp();
const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);

const removerFavorito = (id: number) => {
  videoStore.deletarFavorito(id);
  $toast.success("Vídeo removido dos favoritos com sucesso!");
};
</script>
