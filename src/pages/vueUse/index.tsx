import { defineComponent, onMounted, ref, reactive } from 'vue';
import { onClickOutside, useMouse } from '@vueuse/core';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const el = ref();
    const mouse = reactive(useMouse());
    onMounted(() => {
      onClickOutside(el, () => {
        alert('点到按钮外面了');
      });
    });
    return () => {
      return (
        <>
          <button ref={el}>click outside of me</button>
          <h3>
            Mouse: {mouse.x} x {mouse.y}
          </h3>
        </>
      );
    };
  },
});
