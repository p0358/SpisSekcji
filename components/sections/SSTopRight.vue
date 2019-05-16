<template>
  <div>
    Liczba sekcji w spisie: {{ sections.length }}
    <br />
    Wyświetlanych:
    {{
      toggle === false
        ? sections
            .filter(
              x =>
                !userInput ||
                /*(x.name.toLowerCase().includes(userInput.toLowerCase()) ||
                  x.link.toLowerCase().includes(userInput.toLowerCase())) ||
                  x.members.toLowerCase().includes(userInput.toLowerCase()))*/
                Object.values(x).find(s =>
                  (s + "").toLowerCase().includes(userInput.toLowerCase())
                )
            )
            .filter(x => x.members >= 200).length
        : sections.filter(
            x =>
              !userInput ||
              /*(x.name.toLowerCase().includes(userInput.toLowerCase()) ||
                x.link.toLowerCase().includes(userInput.toLowerCase())) ||
                x.members.toLowerCase().includes(userInput.toLowerCase()))*/
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
      sections: "sections/sections",
      toggle: "table/toggle",
      lastUpdateDate: "sections/lastUpdateDate",
      userInput: "table/userInput"
    })
  }
};
</script>
