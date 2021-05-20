<template>
  <ElContainer class="min-h-screen">
    <ElHeader class="font-black mt-1">
      智能人群报监控系统
    </ElHeader>
    <ElContainer>
      <div class="mr-3 rounded-md" style="width: 200px">
        <ElMenu class="border-0">
          <div v-for="(page,key) in routes" :key="key">
            <ElSubmenu :index="key + ''" :to="page.path" v-if="page.children">
              <template v-slot:title>
                {{ page.name }}
              </template>
              <router-link :to="subPage.path" v-for="(subPage, k) in page.children" :key="k">
                <ElMenuItem :index="`${key}-${k}`">
                  {{ subPage.name }}
                </ElMenuItem>
              </router-link>
            </ElSubmenu>

            <router-link v-else :to="page.path">
              <ElMenuItem :index="key+''">
                {{ page.name }}
              </ElMenuItem>
            </router-link>
          </div>
        </ElMenu>
      </div>
      <div class="border-2 border-indigo-50 container overflow-hidden rounded-md p-2">
        <router-view/>
      </div>
    </ElContainer>
  </ElContainer>
</template>

<script>
import {ref} from "vue";
import {routes} from "./routers"


export default {
  name: 'App',
  setup() {
    let activeIndex = ref('0')

    return {activeIndex, routes}
  }
}
</script>

<style>
</style>
