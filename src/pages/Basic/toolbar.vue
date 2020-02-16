<template>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <q-toolbar class="menubar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-scroll-area horizontal style="height:36px;width:100%">
        <div class="row no-wrap">
        <q-btn
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <svgicon name="bold" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <svgicon name="italic" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <svgicon name="strike" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <svgicon name="underline" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <svgicon name="code" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <svgicon name="paragraph" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <svgicon name="ul" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <svgicon name="ol" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <svgicon name="quote" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <svgicon name="code" />
        </q-btn>

        <q-btn
          @click="commands.horizontal_rule"
        >
          <svgicon name="hr" />
        </q-btn>

        <q-btn
          @click="commands.undo"
        >
          <svgicon name="undo" />
        </q-btn>

        <q-btn
          @click="commands.redo"
        >
          <svgicon name="redo" />
        </q-btn>
        </div>
        </q-scroll-area>
      </q-toolbar>
    </editor-menu-bar>

</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'BasicToolbar',
  mixins: [UiMixin],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
