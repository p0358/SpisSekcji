<template>
  <div class="row q-pa-lg q-col-gutter-y-md justify-center">
    <div class="col-12">
      <q-table
        v-if="isLoaded"
        bordered
        hide-bottom
        dense
        :columns="columns"
        :visible-columns="['Id', 'Name', 'Link', 'Posting']"
        :data="taggroups"
        :filter="userInput"
        :pagination.sync="pagination"
      >
        <template v-slot:top-left>
          <q-input v-model="userInput" placeholder="Wyszukiwarka tag-grupek" />
          <div class="q-pb-xs" />
          Autorzy: Grzegorz Perun & Daniel Nguyen
        </template>
        <template v-slot:top-right>
          Liczba tag-grupek w spisie: {{ taggroups.length }}
          <br />
          Ostatnia aktualizacja: 16/04/2019
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="Id" :props="props"></q-td>
            <q-td key="Name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="Link" :props="props">
              <a :href="props.row.link" target="_blank" class="text-secondary">{{
                props.row.link.replace('https://www.facebook.com/groups', '')
              }}</a></q-td
            >
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'navbar',
  computed: {
    ...mapGetters({
      columns: 'table/columns',
      taggroups: 'taggroups/taggroups',
      isLoaded: 'table/isLoaded'
    }),
    userInput: {
      get() {
        return this.$store.state.table.userInput
      },
      set(value) {
        this.$store.dispatch('table/SET_USERINPUT', value)
      }
    },
    pagination: {
      get() {
        return this.$store.state.table.pagination
      },
      set(value) {
        this.$store.dispatch('table/SET_PAGINATION', value)
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('taggroups/FETCH_TAGGROUPS')
    this.$store.dispatch('table/SET_LOADED')
  }
}
</script>
