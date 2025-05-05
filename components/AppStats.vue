<script setup lang="ts"></script>

<template>
  <section class="flex flex-col items-center gap-8">
    <div
      class="stats stats-vertical shadow-2xl bg-base-300 md:stats-horizontal md:w-3/4"
    >
      <div class="stat">
        <div class="stat-figure text-info">
          <Icon name="mdi:laptop" class="w-10 h-10" />
        </div>
        <div class="stat-title">Total Experience</div>
        <div
          class="stat-value bg-gradient-to-r from-primary to-info inline-block text-transparent bg-clip-text"
        >
          16 Years
        </div>
        <div class="stat-desc">2009 - 2025</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <Icon name="mdi:vuejs" class="w-10 h-10" />
        </div>
        <div class="stat-title">Frontend Experience</div>
        <div
          class="stat-value bg-gradient-to-r from-primary-content to-primary inline-block text-transparent bg-clip-text"
        >
          9 Years
        </div>
        <div class="stat-desc">2016 - 2025</div>
      </div>

      <div class="stat md:hidden">
        <div class="stat-figure text-error-content">
          <Icon name="mdi:ruby" class="w-10 h-10" />
        </div>
        <div class="stat-title">Backend Experience</div>
        <div
          class="stat-value bg-gradient-to-r from-red-700 to-error-content inline-block text-transparent bg-clip-text"
        >
          8 Years
        </div>
        <div class="stat-desc">2009 - 2017</div>
      </div>

      <div class="stat md:hidden">
        <div class="stat-figure text-accent">
          <Icon name="mdi:party-popper" class="w-10 h-10" />
        </div>
        <div class="stat-title">Projects done</div>
        <div
          class="stat-value bg-gradient-to-r from-error to-accent inline-block text-transparent bg-clip-text"
        >
          50+
        </div>
        <div class="stat-desc">2009 - 2025</div>
      </div>
    </div>

    <div
      class="hidden w-3/4 stats shadow-2xl bg-base-300 stats-horizontal md:flex"
    >
      <div class="stat">
        <div class="stat-figure text-error-content">
          <Icon name="mdi:ruby" class="w-10 h-10" />
        </div>
        <div class="stat-title">Backend Experience</div>
        <div
          class="stat-value bg-gradient-to-r from-red-700 to-error-content inline-block text-transparent bg-clip-text"
        >
          8 Years
        </div>
        <div class="stat-desc">2009 - 2017</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-accent">
          <Icon name="mdi:party-popper" class="w-10 h-10" />
        </div>
        <div class="stat-title">Projects done</div>
        <div
          class="stat-value bg-gradient-to-r from-error to-accent inline-block text-transparent bg-clip-text"
        >
          50+
        </div>
        <div class="stat-desc">2009 - 2025</div>
      </div>
    </div>
  </section>
</template>
