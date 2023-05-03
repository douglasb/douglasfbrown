/* eslint-disable */
<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero title="Failure is the pathway to success" subtitle="~ Lebron James" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
        <template v-slot:default>
        <div class="content">
          <h2>For Sale</h2>
          <p>Making some changes in my system so I'm selling what I don't need.</p>
        </div>
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    // NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}

.site-layout-width-contained {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.home-page {
  flex:1;
}
</style>
