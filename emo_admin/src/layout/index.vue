<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <h2>{{collapsed?'管理':'表情包后台管理'}}</h2>
      </div>
      <a-menu  v-model:selectedKeys="selectedKeys"  theme="dark" mode="inline">
        <router-link to="/admin/workbench">
          <a-menu-item key="1">
            <user-outlined />
            <span>工作台</span>
          </a-menu-item>
        </router-link>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>资源管理</span>
            </span>
          </template>
          <router-link to="/admin/resource_management/emo">
            <a-menu-item key="3">表情包</a-menu-item>
          </router-link>
          <router-link to="/admin/resource_management/avatar">
            <a-menu-item key="4">头像</a-menu-item>
          </router-link>
          <router-link to="/admin/resource_management/background">
            <a-menu-item key="5">壁纸</a-menu-item>
          </router-link>
        </a-sub-menu>
        <router-link to="/admin/resource_upload">
          <a-menu-item key="6">
            <upload-outlined />
            <span>资源上传</span>
          </a-menu-item>
        </router-link>
        <router-link to="/admin/tags_admin">
          <a-menu-item key="7">
            <user-outlined />
            <span>标签管理</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'}"
      >
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name:"index",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },
});
</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.logo h2{
  color:white;
  text-align: center;
  line-height: 30px;
}
</style>