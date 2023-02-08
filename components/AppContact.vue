<script setup lang="ts"></script>

<template>
  <section class="px-8 2xl:px-96" id="contact">
    <div class="hero bg-base-300 shadow-xl rounded-xl">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Contact me</h1>
          <p class="py-6">
            I am always happy to hear from you. If you have any questions or
            just want to say hi, feel free to contact me.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form netlify method="post" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div class="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your message</span>
                </label>
                <textarea
                  class="textarea textarea-bordered h-24"
                  name="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
