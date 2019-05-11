<template>
  <div>
    <q-table
      v-if="isLoaded"
      hide-bottom
      dense
      flat
      :columns="columns"
      :visible-columns="['Id', 'Name', 'Link', 'Posting']"
      :data="taggroups"
      :filter="userInput"
      :pagination.sync="pagination"
    >
      <template v-slot:top-left>
        <st-topleft />
      </template>
      <template v-slot:top-right>
        <st-topright />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Id" :props="props"></q-td>
          <q-td key="Name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="Link" :props="props">
            <a :href="props.row.link" target="_blank" class="text-secondary">
              {{
                props.row.link.replace("https://www.facebook.com/groups", "")
              }}
            </a>
          </q-td>
          <q-td key="Posting" :props="props">
            <q-icon
              v-if="props.row.posting"
              name="check"
              style="color: #26A69A; font-size: 18px;"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import STTopLeft from "~/components/taggroups/STTopLeft.vue";
import STTopRight from "~/components/taggroups/STTopRight.vue";
export default {
  layout: "navbar",
  components: { "st-topleft": STTopLeft, "st-topright": STTopRight },
  computed: {
    ...mapGetters({
      columns: "table/columns",
      taggroups: "taggroups/taggroups",
      isLoaded: "table/isLoaded",
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
    await this.$store.dispatch("taggroups/FETCH_TAGGROUPS");
    this.$store.dispatch("table/SET_LOADED");
  }
};
</script>
