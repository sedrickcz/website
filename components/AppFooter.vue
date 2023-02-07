<script setup lang="ts"></script>

<template>
  <footer
    class="footer items-center justify-center p-4 bg-neutral text-neutral-content relative w-screen"
  >
    <div class="items-center justify-center grid-flow-col">
      <p>Copyright © 2023 - All right reserved</p>
    </div>
    <div class="grid-flow-col gap-4 place-self-center md:justify-self-end">
      <NuxtLink to="https://www.twitter.com/sedrickcz" target="_blank">
        <Icon name="mdi:twitter" class="w-6 h-6" />
      </NuxtLink>

      <NuxtLink to="https://github.com/sedrickcz" target="_blank">
        <Icon name="mdi:github" class="w-6 h-6" />
      </NuxtLink>

      <NuxtLink
        to="https://www.linkedin.com/in/kratochviljiri/"
        target="_blank"
      >
        <Icon name="mdi:linkedin" class="w-6 h-6" />
      </NuxtLink>

      <NuxtLink to="https://www.instagram.com/sedrickcz/" target="_blank">
        <Icon name="mdi:instagram" class="w-6 h-6" />
      </NuxtLink>
    </div>
  </footer>
</template>
