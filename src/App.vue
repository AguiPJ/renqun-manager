<template>
  <ElContainer class="min-h-screen">
    <ElHeader class="font-black mt-1">
      智能人群报监控系统
    </ElHeader>
    <ElContainer>
      <ElAside>
        <ElMenu>
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
      </ElAside>
      <ElMain class="border-2 border-indigo-50">
        <router-view/>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script>
import {ElAside, ElContainer, ElHeader, ElMain, ElMenu, ElMenuItem, ElSubmenu} from "element-plus";
import {ref} from "vue";
import {routes} from "./routers"


export default {
  name: 'App',
  components: {ElMenu, ElMenuItem, ElContainer, ElHeader, ElMain, ElAside, ElSubmenu},
  setup() {
    let activeIndex = ref('0')

    return {activeIndex, routes}
  }
}
</script>

<style>
</style>
