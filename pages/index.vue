<template>
  <div class="row q-pa-lg q-col-gutter-y-md justify-center">
    <div class="col-12">
      <q-table
        v-if="isLoaded"
        bordered
        hide-bottom
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
          <q-input v-model="userInput" placeholder="Wyszukiwarka sekcji" />
          <div class="q-pb-xs" />
          Autorzy: Grzegorz Perun & Daniel Nguyen
          <q-toggle v-model="toggle" dense color="pink">
            <q-tooltip content-class="bg-pink"
              >Pokaż grupy liczące mniej niż 200 członków</q-tooltip
            >
          </q-toggle>
        </template>
        <template v-slot:top-right>
          Liczba sekcji w spisie:
          {{
            toggle === false
              ? sections.filter(x => x.members >= 200).length
              : sections.length
          }}<br />Ostatnia aktualizacja: 03/05/2019
        </template>
        <template v-slot:body="props">
          <q-tr
            v-if="props.row.members > 10000"
            class="bg-grey-3"
            :props="props"
          >
            <q-td key="Name" :props="props">
              <span>{{ props.row.name }}</span>
            </q-td>
            <q-td key="Members" :props="props">
              {{ props.row.members }}
            </q-td>
            <q-td key="Link" :props="props">
              <a :href="props.row.link" class="text-pink" target="_blank">{{
                props.row.link.replace('https://www.facebook.com/groups', '')
              }}</a></q-td
            >
          </q-tr>
          <q-tr
            v-else-if="props.row.members === 2137"
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
              <a :href="props.row.link" class="text-white" target="_blank">{{
                props.row.link.replace('https://www.facebook.com/groups', '')
              }}</a></q-td
            >
          </q-tr>
          <q-tr v-else>
            <q-td key="Name" :props="props">
              <span>{{ props.row.name }}</span>
            </q-td>
            <q-td key="Members" :props="props">
              {{ props.row.members }}
            </q-td>
            <q-td key="Link" :props="props">
              <a :href="props.row.link" target="_blank" class="text-pink">{{
                props.row.link.replace('https://www.facebook.com/groups', '')
              }}</a></q-td
            >
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
      sections: 'sections/sections',
      isLoaded: 'table/isLoaded'
    }),
    toggle: {
      get() {
        return this.$store.state.table.toggle
      },
      set(value) {
        this.$store.dispatch('table/SET_TOGGLE', value)
      }
    },
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
    await this.$store.dispatch('sections/FETCH_SECTIONS')
    this.$store.dispatch('table/SET_LOADED')
  }
}
</script>
