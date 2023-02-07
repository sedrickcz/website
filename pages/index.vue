<script setup lang="ts">
useHead({
  title: 'Jiří Kratochvíl - Senior/Lead Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        'I am a Senior/Lead Frontend Developer from Czech Republic. I am passionate about web development and I love to create beautiful and fast websites using Vue.js and Nuxt.js.',
    },
    {
      property: 'og:description',
      content:
        'I am a Senior/Lead Frontend Developer from Czech Republic. I am passionate about web development and I love to create beautiful and fast websites using Vue.js and Nuxt.js.',
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/simonaliska/image/upload/v1675788643/kratochvil.tech/jiri_kratochvil_vox6o6.jpg',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Jiří Kratochvíl - Senior/Lead Frontend Developer',
    },
    {
      name: 'twitter:text:title',
      content: 'Jiří Kratochvíl - Senior/Lead Frontend Developer',
    },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-32">
    <AppWelcome />
    <AppStats />
    <AppSkills />
    <AppSocialCards />
    <AppContact />
    <AppFooter />
  </div>
</template>
