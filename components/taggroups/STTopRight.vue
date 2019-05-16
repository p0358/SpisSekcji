<template>
  <div>
    Liczba tag-grupek w spisie:
    {{ taggroups.length }}
    <br />
    Wyświetlanych:
    {{
      taggroups.filter(
        x =>
          !userInput ||
          /*(x.name.toLowerCase().includes(userInput.toLowerCase()) ||
            x.link.toLowerCase().includes(userInput.toLowerCase()))*/
          Object.values(x).find(s =>
            (s + "").toLowerCase().includes(userInput.toLowerCase())
          )
      ).length
    }}
    <br />
    Ostatnia aktualizacja: {{ lastUpdateDate }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      taggroups: "taggroups/taggroups",
      lastUpdateDate: "taggroups/lastUpdateDate",
      userInput: "table/userInput"
    })
  }
};
</script>
