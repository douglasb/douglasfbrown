import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faTimes as fortawesomefreesolidsvgicons_faTimes } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faTimes)

    import  { faSearch as fortawesomefreesolidsvgicons_faSearch } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faSearch)

    import  { faEnvelope as fortawesomefreesolidsvgicons_faEnvelope } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faEnvelope)

    import  { faUser as fortawesomefreesolidsvgicons_faUser } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faUser)

    import  { faBriefcase as fortawesomefreesolidsvgicons_faBriefcase } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faBriefcase)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
