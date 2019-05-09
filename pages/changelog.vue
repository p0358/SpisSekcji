<template>
  <div class="row q-pa-lg q-col-gutter-y-md justify-center">
    <q-timeline color="secondary">
      <q-timeline-entry title="v1.3.1" subtitle="09/05/2019">
        <div>
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span>Poprawki w zakładce API</span>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="v1.3" subtitle="05/05/2019">
        <div>
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span>Dodano zakładkę dot. API</span>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="v1.2" subtitle="04/05/2019">
        <div>
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span>Poprawki w kodzie</span><br />
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span
            >Dodano stały pierwszy wiersz w spisie sekcji w celach
            reklamowych</span
          ><br />
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span
            >Zmieniono miejsce przechowywania plików JSON odpowiadających za
            sekcje i tag-grupki</span
          >
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="v1.1" subtitle="03/05/2019">
        <div>
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span
            >Dodano sekcje liczące mniej niż 200 członków wraz z opcją ich
            włączenia/wyłączenia</span
          ><br />
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span>Dodano możliwość sortowania spisu po nazwie</span>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="v1.0" subtitle="11/04/2019">
        <div>
          <q-icon
            name="add"
            color="secondary"
            style="font-size: 20px;"
          />&nbsp;<span>Pierwsza wersja</span>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  layout: 'navbar'
}
</script>
