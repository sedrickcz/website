<script setup lang="ts"></script>

<template>
  <section class="flex flex-col justify-center items-center gap-8">
    <div class="w-max">
      <h1
        class="text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5"
      >
        Hey all 👋
      </h1>
    </div>

    <div class="avatar">
      <div
        class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-8"
      >
        <img src="~/assets/images/jiri_kratochvil.jpg" />
      </div>
    </div>

    <article class="text-center">
      <h2 class="text-2xl">I am</h2>
      <h1
        class="text-5xl font-bold bg-gradient-to-r from-primary to-primary-content inline-block text-transparent bg-clip-text mb-2"
      >
        Jiří Kratochvíl
      </h1>
      <p class="text-2xl text-gray-500 lead">Senior/Lead Frontend Developer</p>
    </article>
  </section>
</template>
