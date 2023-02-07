<script setup lang="ts"></script>

<template>
  <section>
    <div class="px-8 flex flex-wrap gap-16 justify-center">
      <div
        class="card bg-base-300 shadow-xl transform duration-300 group-hover:scale-110 md:max-w-xs"
      >
        <figure class="max-h-52">
          <img
            src="https://images.unsplash.com/photo-1598018553943-29ace5bf9867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1810&q=80"
            alt="Twitter"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">I really love Twitter!</h2>
          <p>
            Twitter is the most of the time my only source of informations and
            also I am posting here pretty regulary.
          </p>
          <div class="card-actions mt-4 justify-end">
            <button
              class="btn btn-info gap-2"
              @click="
                navigateTo('https://twitter.com/sedrickcz', { external: true })
              "
            >
              <Icon name="mdi:twitter" class="w-5 h-5" />
              Follow me
            </button>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 shadow-xl md:max-w-xs">
        <figure class="max-h-52">
          <img
            src="https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Berlin"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">I am a co-hosting Vue.js // Berlin</h2>
          <p>
            Since 2017 I am co-hosting the Vue.js // Berlin meetup. We have the
            largest Vue.js meetup in Germany and on of the biggest Vue.js
            comunity in Europe.
          </p>
          <div class="card-actions mt-4 justify-end">
            <button
              class="btn btn-primary gap-2"
              @click="
                navigateTo('https://www.meetup.com/vue-js-berlin/', {
                  external: true,
                })
              "
            >
              <Icon name="mdi:vuejs" class="w-5 h-5" />
              Visit our meetup
            </button>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 shadow-xl md:max-w-xs">
        <figure class="max-h-52">
          <img
            src="https://images.unsplash.com/photo-1552820081-00b3187b7a57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Twitch"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">I am trying to stream on Twitch</h2>
          <p>
            Since lately I am trying to stream on Twitch. I am streaming mostly
            about Vue.js ecosystem.
          </p>
          <div class="card-actions mt-4 justify-end">
            <button
              class="btn bg-violet-800 hover:bg-violet-900 gap-2"
              @click="
                navigateTo('https://www.twitch.tv/sedrickcz', {
                  external: true,
                })
              "
            >
              <Icon name="mdi:twitch" class="w-5 h-5" />
              Watch me
            </button>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 shadow-xl md:max-w-xs">
        <figure class="max-h-52">
          <img src="~/assets/images/jiri-speaker.jpg" alt="Speaker" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">I am speaker</h2>
          <p>
            Sometimes I am speaking at meetups. I am still beginner but I am
            trying to improve my skills.
          </p>
          <div class="card-actions mt-4 justify-end">
            <button
              class="btn btn-accent gap-2"
              @click="navigateTo('#contact')"
            >
              <Icon name="mdi:speak" class="w-5 h-5" />
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
