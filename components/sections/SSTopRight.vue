<template>
  <div>
    Liczba sekcji w spisie:
    {{
      toggle === false
        ? sections.filter(x => x.members >= 200).length
        : sections.length
    }}
    <br />
    Ostatnia aktualizacja: {{ lastUpdateDate }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      sections: 'sections/sections',
      toggle: 'table/toggle',
      lastUpdateDate: 'sections/lastUpdateDate'
    })
  }
}
</script>
