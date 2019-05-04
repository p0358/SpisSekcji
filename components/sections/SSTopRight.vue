<template>
  <div>
    Liczba sekcji w spisie:
    {{
      toggle === false
        ? sections.filter(x => x.members >= 200).length
        : sections.length
    }}<br />Ostatnia aktualizacja: 03/05/2019
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ sections: 'sections/sections', toggle: 'table/toggle' })
  }
}
</script>
