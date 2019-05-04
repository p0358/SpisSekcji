<template>
  <div>
    Liczba tag-grupek w spisie:
    {{ taggroups.length }}<br />Ostatnia aktualizacja: 03/05/2019
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ taggroups: 'taggroups/taggroups' })
  }
}
</script>
