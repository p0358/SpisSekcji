<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="dehaze" />
          &nbsp;Spis Sekcji<q-badge align="top" color="secondary">v1.3</q-badge>
          <q-btn flat
            ><a
              href="https://facebook.com/groups/spis.sekcji"
              target="_blank"
              class="text-white"
              style="text-decoration: none"
              >Feedback</a
            ></q-btn
          >
          <q-btn flat @click="$router.push('/changelog')">Zmiany</q-btn>
          <q-btn flat @click="$router.push('/api')">Api</q-btn>
        </q-toolbar-title>
        <q-space />
        <q-btn flat @click="$router.push('/')">Sekcje</q-btn>
        <q-btn flat @click="$router.push('/taggroups')">Tag-grupki</q-btn>
        <q-btn flat
          ><a
            href="https://8rabin.github.io/"
            target="_blank"
            class="text-white"
            >8rabin</a
          ></q-btn
        >
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-grey-8 text-white text-center">
      <div class="q-pb-sm" />
      <div class="text-body2">
        Strona uzupełniona jest o
        <a
          href="https://docs.google.com/spreadsheets/d/1b0oBrpdNXqfWx35kT4xhG0OiPY2OnYJmklGHshlv7_E/edit?fbclid=IwAR3hsIS4LRONlObNMprvAgRmB4bVf12YYlJC7jVGusXaB8Yhxl3KMakvH_8#gid=0"
          class="text-white"
          >spis sekcji</a
        >
        Aleksandry Marczuk i Adama Firynowicza
      </div>
      <div class="q-pb-sm" />
    </q-footer>

    <q-page-container>
      <Nuxt />
    </q-page-container>
  </q-layout>
</template>
