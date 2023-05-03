<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="There is no such thing as ready. There is only now."
      subtitle="~ some dude"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h1>prsOldGuy</h1>
          <p>After 30+ years of working behind a computer, that time has taken a toll on my body and I wanted to get back out and do what I love the most: be outside and compete. So I'm taking this out of shape 58 3/4 year old body and getting it into mountain tough shape and into a better place.</p>
          <p>Born in Canada living in the Carolinas since Jr. High, I am proud to call the Carolina’s my home for more than 40 years.</p>
          <p>I got a lot of bad advice on Facebook, so I don't really pay too much attention to the facebook groups, even the ones I belong too.  Instead, just getting out there and developing friendships and finding good people to train with is the path that seems to work the best for me.</p>
          <p>I'm a relative newcomer to the community, but it's useful to see what others are doing.</p>
        <div class="dataColumns">
            <div class="dataColumn">
              <span class="head">What I run for 2022</span>
              <ul>
                <li><a href="https://dnafirearmsystems.com/" target="_blank">DNA Seventy5 Stainless Bolt Action</a></li>
                 <li>6mm Creedmoor Hawk Hill barrel, 1:7.5 twist</li>
                 <li>MDT ACC Chassis</li>
                 <li>MDT Scope Ring</li>
                 <li>MDT Brake</li>
                 <li>Athon Cronus BTR Scope</li>
                 <li>Berger 108 BTHP</li>
                 <li>Lapua & Peterson Brass</li>
                 <li>Reloader 16</li>
              </ul>
            </div>
            <div class="dataColumn">
              <span class="head">Products I use</span>
              <ul>
                <li>Dillon 550c</li>
                <li>Forester CoAx Press</li>
                <li>K&M Arbor Pres</li>
                <li>Redding Competition Dies</li>
                <li>Wilson Chamber Dies</li>
                <li>Giraud Trimmer</li>
                <li>Amp Anealer</li>
                <li>Berger Bullets</li>
                <li>Hornady Bullets</li>
                <li>Alliant, Vihtavuori, and Ramshot</li>
              </ul>
            </div>
            <div class="dataColumn">
              <span class="head">Who I learn from</span>
              <ul>
                <li>Cole Hefner (Shooting buddy)</li>
                <li><a href="https://dnafirearmsystems.com/" target="_blank">Sean Casey</a> (Gunsmith)</li>
                <li><a href="https://www.precisionrifleseries.com/s/3222/andy-slade/" target="_blank">Andy Slade</a>, <a href="https://riflemanspath.com/" target="_blank">Rifleman’s Path</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Lanny_Bassham" target="_blank">Lenny Bassham</a><br><a href="https://www.amazon.com/Winning-Mind-3rd-Ed/dp/1934324264" target="_blank">Book: With Winning In Mind</a></li>
                <li><a href="https://www.shootsmallgroups.com/community/" target="_blank">Eric Cortina</a></li>
                <li><a href="https://kestrelballistics.com/classes" target="_blank">Emil Praslick (Kestrel Seminar)</a></li>
                <li>Everyone at each PRS Match I shoot.</li>
              </ul>

                <span class="head">Communities:</span>
                <ul>
                    <li><a href="https://www.facebook.com/groups/608520689301867" target="_blank">VPRC</a> Club Team</li>
                    <li><a href="https://www.facebook.com/groups/alanticcoastregion/" target="_blank">PRS Atlantic Cost Conference</a></li>
                    <li><a href="https://www.facebook.com/groups/precisionrifleseries" target="_blank">PRS Paid Members</a> </li>
                </ul>

            </div>
        </div>

        <h2>Reach out</h2>
         <p>Reach out to me on <a href="https://www.facebook.com/prsoldguy1">Facebook</a> Send me a DM if you want to connect about items for sale or respond to the SnipersHide post that brought you here.</p>
         <!-- <p>PRS Profile</p> -->
          <!-- <quote-card /> -->
        </div>
      <!-- <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
        </div> -->
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
// import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
  // components: { QuoteCard }
}

</script>
<style scoped lang="scss">
.dataColumns {
  display:flex;
  margin:10px 0;
}
.dataColumn {
  width:30%;
  padding:0 15px;
  .head {
    font-weight: 600;
    font-size:18px;
    padding-bottom:5px;
    display:inline-block;
  }
}
 @media screen and (min-width: 320px) {
  .dataColumns {
    display:block;
  }
  .dataColumn {
    width:80%;
    margin:0 auto;
    .head {
      margin:20px 0 0;
    }
     ul {
    margin: 5px 0 0 0;
  }
  li {
    list-style:none;
    padding: 0 0 2px 0;
  }
  }
 }
@media screen and (min-width:768px) {
  .dataColumns {
    display:flex;
  }
}

</style>
