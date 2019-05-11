<template>
  <div>
    <q-table
      v-if="isLoaded"
      hide-bottom
      flat
      dense
      :columns="columns"
      :visible-columns="['Name', 'Members', 'Link']"
      :data="
        toggle === false ? sections.filter(x => x.members >= 200) : sections
      "
      :filter="userInput"
      :pagination.sync="pagination"
    >
      <template v-slot:top-left>
        <ss-topleft />
      </template>
      <template v-slot:top-right>
        <ss-topright />
      </template>
      <template v-slot:body="props">
        <q-tr
          v-if="props.row.members === 2137"
          style="background-image: url('https://i.imgur.com/4uYxy3B.jpg');"
          :props="props"
        >
          <q-td key="Name" :props="props">
            <span class="text-white">{{ props.row.name }}</span>
          </q-td>
          <q-td key="Members" :props="props">
            <span class="text-white">{{ props.row.members }}</span>
          </q-td>
          <q-td key="Link" :props="props">
            <a :href="props.row.link" class="text-white" target="_blank">
              {{ props.row.link.replace("https://facebook.com/groups", "") }}
            </a>
          </q-td>
        </q-tr>
        <q-tr
          v-else-if="props.row.members >= 10000"
          style="background-color: #F2F2F2"
          :props="props"
        >
          <q-td key="Name" :props="props">
            <span>{{ props.row.name }}</span>
          </q-td>
          <q-td key="Members" :props="props">
            <span>{{ props.row.members }}</span>
          </q-td>
          <q-td key="Link" :props="props">
            <a :href="props.row.link" class="text-secondary" target="_blank">
              {{ props.row.link.replace("https://facebook.com/groups", "") }}
            </a>
          </q-td>
        </q-tr>
        <q-tr v-else :props="props">
          <q-td key="Name" :props="props">
            <span>{{ props.row.name }}</span>
          </q-td>
          <q-td key="Members" :props="props">
            <span>{{ props.row.members }}</span>
          </q-td>
          <q-td key="Link" :props="props">
            <a :href="props.row.link" class="text-secondary" target="_blank">
              {{ props.row.link.replace("https://facebook.com/groups", "") }}
            </a>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SSTopLeft from "~/components/sections/SSTopLeft.vue";
import SSTopRight from "~/components/sections/SSTopRight.vue";
export default {
  layout: "navbar",
  components: {
    "ss-topleft": SSTopLeft,
    "ss-topright": SSTopRight
  },
  computed: {
    ...mapGetters({
      columns: "table/columns",
      sections: "sections/sections",
      isLoaded: "table/isLoaded",
      toggle: "table/toggle",
      userInput: "table/userInput"
    }),
    pagination: {
      get() {
        return this.$store.state.table.pagination;
      },
      set(value) {
        this.$store.dispatch("table/SET_PAGINATION", value);
      }
    }
  },
  async mounted() {
    await this.$store.dispatch("sections/FETCH_SECTIONS");
    this.$store.dispatch("table/SET_LOADED");
  }
};
</script>
