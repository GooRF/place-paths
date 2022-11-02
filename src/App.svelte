<script lang="ts">
    import NeonButton from "./NeonButton.svelte";
</script>

<main>
  <div class="flex gap-10 h-screen w-screen items-center justify-center">
    <h2 class="h-min shadow-cyan-600 shadow-2xl text-6xl w-min border-white border-solid border-8 py-5 px-6">
      <a href="https://www.reddit.com/r/place/" class="text-slate-300 motion-safe:animate-pulse">R/PLACE</a>, 
      BUT WITH THE WORLD.
    </h2>
    <section class="text-center w-80 flex flex-col gap-12">
      <h3 class="text-5xl">How it Works</h3>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus numquam quis impedit dolores. Aperiam, sit, illum numquam ipsa eligendi omnis cum nisi hic quos repellat a est consequuntur! Rerum, facilis!
      </div>
    </section>  
    <nav class="flex flex-col items-center justify-center h-72 w-80">
      <NeonButton />
    </nav>
  </div>
</main>