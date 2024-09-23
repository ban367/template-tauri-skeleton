<script lang="ts">
  import "../app.postcss";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import { Toast, Modal, initializeStores } from "@skeletonlabs/skeleton";
  import Icon from "@iconify/svelte";
  import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
  initializeStores();

  const currentPath = writable("");

  onMount(() => {
    currentPath.set(window.location.pathname);
  });

  page.subscribe(($page) => {
    currentPath.set($page.url.pathname);
  });
</script>

<Modal />
<Toast position="tr" />

<svelte:head>
  <title>Top</title>
</svelte:head>

<div class="flex min-h-screen">
  <div class="sticky top-0 h-screen">
    <AppRail>
      <svelte:fragment slot="lead">
        <AppRailAnchor href="/">
          <div class="flex h-full items-center justify-center">
            <Icon icon="mdi:menu" height="26" />
          </div>
        </AppRailAnchor>
      </svelte:fragment>
      <AppRailAnchor href="/" selected={$currentPath === "/"}>
        <div class="flex h-full items-center justify-center">
          <Icon icon="mdi:home" height="26" />
        </div>
      </AppRailAnchor>
    </AppRail>
  </div>

  <div class="flex-1 overflow-auto">
    <slot />
  </div>
</div>
