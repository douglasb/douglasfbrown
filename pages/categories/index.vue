<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero
    title="Effort x Consistancy = Building through Discipline"
    subtitle="~ some dude"
    image="/uploads/categories.jpg"
    />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
import SiteHero from '../../components/SiteHero.vue'
export default {
  components: { SiteHero },
  head() {
    return {
      title: `Categories | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
