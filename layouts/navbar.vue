<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="dehaze" />
          &nbsp;Spis Sekcji<q-badge align="top" color="secondary"
            >v1.3.1</q-badge
          >
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

    <q-page-container>
      <Nuxt />
    </q-page-container>
  </q-layout>
</template>
