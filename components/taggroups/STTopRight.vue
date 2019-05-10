<template>
  <div>
    Liczba tag-grupek w spisie:
    {{ taggroups.length }}
    <br />
    Ostatnia aktualizacja: {{ lastUpdateDate }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      taggroups: 'taggroups/taggroups',
      lastUpdateDate: 'taggroups/lastUpdateDate'
    })
  }
}
</script>
