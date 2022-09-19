<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note" />
      <TagsList @onItemClick="handleTagClick" :items="tags" :tag="tag" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";
export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: "",
      tags: ["дом", "работа", "путешествия"],
      tag: [],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value, this.tag);
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

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>