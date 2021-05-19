<template>
    <ElHeader class="font-black mt-1">
      智能人群报监控系统
    </ElHeader>
    <ElContainer>
      <ElAside>
        <ElMenu>
          <div v-for="(page,key) in routes" :key="key">
            <router-link :to="page.path" v-if="page.children" :index="key + ''">
              <ElSubmenu >
                <template v-slot:title>
                  {{ page.name }}
                </template>
                <ElMenuItem v-for="(subPage, k) in page.children" :key="k" :index="`${key}-${k}`">
                  <router-link :to="subPage.path"> {{ subPage.name }}</router-link>
                </ElMenuItem>
              </ElSubmenu>
            </router-link>

            <router-link v-else :to="page.path">
              <ElMenuItem :index="key+''">
                {{ page.name }}
              </ElMenuItem>
            </router-link>
          </div>
        </ElMenu>
      </ElAside>
      <ElMain>
        <router-view/>
      </ElMain>
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
