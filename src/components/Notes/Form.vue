<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note" />
      <TagsList @onItemClick="handleTagClick" :items="getTags" :tag="tag" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: "",
      tag: [],
    };
  },
  computed: {
    ...mapGetters(["getTags"]),
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addNote", { title: this.value, tags: this.tag });
      this.value = "";
      this.tag = [];
    },
    handleTagClick(tag) {
      if (!this.tag.includes(tag)) this.tag.push(tag);
      else {
        let tagIndex = this.tag.indexOf(tag);
        this.tag.splice(tagIndex, 1);
      }
    },
  },
};
</script>
